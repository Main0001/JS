async function f() {
  return 1;
}
// У слова async один простой смысл: эта функция всегда возвращает промис. Значения других типов оборачиваются в 
// завершившийся успешно промис автоматически.

// Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. 
// После чего оно вернёт его результат, и выполнение кода продолжится.

// В этом примере промис успешно выполнится через 1 секунду:

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000)
  });

  let result = await promise; // будет ждать, пока промис не выполнится (*)

  alert(result); // "готово!"
}

f();

async function showAvatar() {

  // запрашиваем JSON с данными пользователя
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();

  // запрашиваем информацию об этом пользователе из github
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // отображаем аватар пользователя
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // ждём 3 секунды и затем скрываем аватар
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();

// SyntaxError на верхнем уровне вложенности
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();

// Можно обернуть этот код в анонимную async–функцию, тогда всё заработает:
(async () => {
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
})();


// await работает с «thenable»–объектами
// Как и promise.then, await позволяет работать с промис–совместимыми объектами. Идея в том, 
// что если у объекта можно вызвать метод then, этого достаточно, чтобы использовать его с await.

// В примере ниже, экземпляры класса Thenable будут работать вместе с await:

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve);
    // выполнить resolve со значением this.num * 2 через 1000мс
    setTimeout(() => resolve(this.num * 2), 1000); // (*)
  }
};

async function f() {
  // код будет ждать 1 секунду,
  // после чего значение result станет равным 2
  let result = await new Thenable(1);
  alert(result);
}

f();
// Когда await получает объект с .then, не являющийся промисом, JavaScript автоматически запускает этот метод, 
// передавая ему аргументы – встроенные функции resolve и reject. Затем await приостановит дальнейшее выполнение кода, 
// пока любая из этих функций не будет вызвана (в примере это строка (*)). 
// После чего выполнение кода продолжится с результатом resolve или reject соответственно.


// Асинхронные методы классов
// Для объявления асинхронного метода достаточно написать async перед именем:

class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}

new Waiter()
  .wait()
  .then(alert); // 1


async function f() {
  await Promise.reject(new Error("Упс!"));
}

// Делает то же самое, что и такой:

async function f() {
  throw new Error("Упс!");
}


// Но есть отличие: на практике промис может завершиться с ошибкой не сразу, а через некоторое время. 
// В этом случае будет задержка, а затем await выбросит исключение.

// Такие ошибки можно ловить, используя try..catch, как с обычным throw:

async function f() {

  try {
    let response = await fetch('/no-user-here');
    let user = await response.json();
  } catch(err) {
    // перехватит любую ошибку в блоке try: и в fetch, и в response.json
    alert(err);
  }
}

f();


// Если у нас нет try..catch, асинхронная функция будет возвращать завершившийся с ошибкой промис (в состоянии rejected). 
// В этом случае мы можем использовать метод .catch промиса, чтобы обработать ошибку:
async function f() {
  let response = await fetch('http://no-such-url');
}

// f() вернёт промис в состоянии rejected
f().catch(alert); // TypeError: failed to fetch // (*)


// async/await отлично работает с Promise.all
// Когда необходимо подождать несколько промисов одновременно, можно обернуть их в Promise.all, и затем await:

// await будет ждать массив с результатами выполнения всех промисов
let results = await Promise.all([
  fetch(url1),
  fetch(url2),
]);

//Tasks

//1
async function loadJson(url) { // (1)
  let response = await fetch(url); // (2)

  if (response.status == 200) {
    let json = await response.json(); // (3)
    return json;
  }

  throw new Error(response.status);
}

loadJson('no-such-user.json')
  .catch(alert); // Error: 404 (4)

//2
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {

  let user;
  while(true) {
    let name = prompt("Введите логин?", "iliakan");

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break; // ошибок не было, выходим из цикла
    } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        // после alert начнётся новая итерация цикла
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
      } else {
        // неизвестная ошибка, пробрасываем её
        throw err;
      }
    }
  }


  alert(`Полное имя: ${user.name}.`);
  return user;
}

demoGithubUser();

//3
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // покажет 10 через 1 секунду
  wait().then(result => alert(result));
}

f();