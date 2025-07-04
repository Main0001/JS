fetch('https://no-such-server.blabla') // ошибка
  .then(response => response.json())
  .catch(err => alert(err)) // TypeError: failed to fetch (текст может отличаться)


// Как видно, .catch не обязательно должен быть сразу после ошибки, он может быть далее, после одного или даже нескольких .then

// Или, может быть, с сервером всё в порядке, но в ответе мы получим некорректный JSON. Самый лёгкий путь перехватить все ошибки – это добавить .catch в конец цепочки:
fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  }))
  .catch(error => alert(error.message));

// Вокруг функции промиса и обработчиков находится «невидимый try..catch». Если происходит исключение, то оно перехватывается, и промис считается отклонённым с этой ошибкой.

// Например, этот код:

new Promise((resolve, reject) => {
  throw new Error("Ошибка!");
}).catch(alert); // Error: Ошибка!
// …Работает так же, как и этот:

new Promise((resolve, reject) => {
  reject(new Error("Ошибка!"));
}).catch(alert); // Error: Ошибка!



new Promise((resolve, reject) => {
  resolve("ок");
}).then((result) => {
  throw new Error("Ошибка!"); // генерируем ошибку
}).catch(alert); // Error: Ошибка!
// Это происходит для всех ошибок, не только для тех, которые вызваны оператором throw. Например, программная ошибка:

new Promise((resolve, reject) => {
  resolve("ок");
}).then((result) => {
  blabla(); // нет такой функции
}).catch(alert); // ReferenceError: blabla is not defined


// В примере ниже мы видим другую ситуацию с блоком .catch. Обработчик (*) перехватывает ошибку и не может обработать её (например, он знает как обработать только URIError), поэтому ошибка пробрасывается далее:
// the execution: catch -> catch -> then
new Promise((resolve, reject) => {

  throw new Error("Ошибка!");

}).catch(function(error) { // (*)

  if (error instanceof URIError) {
    // обрабатываем ошибку
  } else {
    alert("Не могу обработать ошибку");

    throw error; // пробрасывает эту или другую ошибку в следующий catch
  }

}).then(function() {
  /* не выполнится */
}).catch(error => { // (**)

  alert(`Неизвестная ошибка: ${error}`);
  // ничего не возвращаем => выполнение продолжается в нормальном режиме

});


window.addEventListener('unhandledrejection', function(event) {
  // объект события имеет два специальных свойства:
  alert(event.promise); // [object Promise] - промис, который сгенерировал ошибку
  alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
});

new Promise(function() {
  throw new Error("Ошибка!");
}); // нет обработчика ошибок

