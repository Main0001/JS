// setTimeout позволяет вызвать функцию один раз через определённый интервал времени.
// setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.

// Синтаксис:

// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...);

// Например, данный код вызывает sayHi() спустя одну секунду:

function sayHi() {
  alert('Привет');
}

setTimeout(sayHi, 1000);

function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Привет", "Джон"); // Привет, Джон

// Если первый аргумент является строкой, то JavaScript создаст из неё функцию.

// Это также будет работать:

setTimeout("alert('Привет')", 1000);

// Но использование строк не рекомендуется. Вместо этого используйте функции. Например, так:

setTimeout(() => alert('Привет'), 1000);

// Отмена через clearTimeout
// Вызов setTimeout возвращает «идентификатор таймера» timerId, который можно использовать для отмены дальнейшего выполнения.

// Синтаксис для отмены:

// let timerId = setTimeout(...);
// clearTimeout(timerId);


// setInterval
// Метод setInterval имеет такой же синтаксис как setTimeout:

// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...);

// let delay = 5000;

// let timerId = setTimeout(function request() {
//   ...отправить запрос...

//   if (ошибка запроса из-за перегрузки сервера) {
//     // увеличить интервал для следующего запроса
//     delay *= 2;
//   }

//   timerId = setTimeout(request, delay);

// }, delay);


// setTimeout с нулевой задержкой
// Особый вариант использования: setTimeout(func, 0) или просто setTimeout(func).

// Это планирует вызов func настолько быстро, насколько это возможно. Но планировщик будет вызывать функцию только после завершения выполнения текущего кода.

// Так вызов функции будет запланирован сразу после выполнения текущего кода.

// Например, этот код выводит «Привет» и затем сразу «Мир»:

setTimeout(() => alert("Мир"));

alert("Привет");

//Tasks

//1
function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function() {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

// использование:
printNumbers(5, 10);

function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

// использование:
printNumbers(5, 10);

//2
//setTimeOut выполняется после выполнения кода
// i = // 100000000
