let promise = new Promise(function(resolve, reject) {
  // функция-исполнитель (executor)
  // "певец"
});

// Её аргументы resolve и reject – это колбэки, которые предоставляет сам JavaScript. Наш код – только внутри исполнителя.

// Когда он получает результат, сейчас или позже – не важно, он должен вызвать один из этих колбэков:

// resolve(value) — если работа завершилась успешно, с результатом value.
// reject(error) — если произошла ошибка, error – объект ошибки.

// У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:

// state («состояние») — вначале "pending" («ожидание»), потом меняется на "fulfilled" («выполнено успешно») при вызове resolve или на "rejected" («выполнено с ошибкой») при вызове reject.
// result («результат») — вначале undefined, далее изменяется на value при вызове resolve(value) или на error при вызове reject(error).

promise = new Promise(function(resolve, reject) {
  // эта функция выполнится автоматически, при вызове new Promise

  // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
  setTimeout(() => resolve("done"), 1000);
});

promise = new Promise(function(resolve, reject) {
  // спустя одну секунду будет сообщено, что задача выполнена с ошибкой
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("…")); // игнорируется
  setTimeout(() => resolve("…")); // игнорируется
});

promise.then(
  function(result) { /* обработает успешное выполнение */ },
  function(error) { /* обработает ошибку */ }
);
// Первый аргумент метода .then – функция, которая выполняется, когда промис переходит в состояние «выполнен успешно», и получает результат.

// Второй аргумент .then – функция, которая выполняется, когда промис переходит в состояние «выполнен с ошибкой», и получает ошибку.


promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve запустит первую функцию, переданную в .then
promise.then(
  result => alert(result), // выведет "done!" через одну секунду
  error => alert(error) // не будет запущена
);

promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject запустит вторую функцию, переданную в .then
promise.then(
  result => alert(result), // не будет запущена
  error => alert(error) // выведет "Error: Whoops!" спустя одну секунду
);


promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Ошибка!")), 1000);
});

// .catch(f) это то же самое, что promise.then(null, f)
promise.catch(alert); // выведет "Error: Ошибка!" спустя одну секунду


// new Promise((resolve, reject) => {
//   /* сделать что-то, что займёт время, и после вызвать resolve или может reject */
// })
//   // выполнится, когда промис завершится, независимо от того, успешно или нет
//   .finally(() => остановить индикатор загрузки)
//   // таким образом, индикатор загрузки всегда останавливается, прежде чем мы продолжим
//   .then(result => показать результат, err => показать ошибку)

new Promise((resolve, reject) => {
  setTimeout(() => resolve("value"), 2000);
})
  .finally(() => alert("Промис завершён")) // срабатывает первым
  .then(result => alert(result)); // <-- .then показывает "value"

new Promise((resolve, reject) => {
  throw new Error("error");
})
  .finally(() => alert("Промис завершён")) // срабатывает первым
  .catch(err => alert(err));  // <-- .catch показывает ошибку


  function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
  });
}

promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => alert(`${script.src} загружен!`),
  error => alert(`Ошибка: ${error.message}`)
);

promise.then(script => alert('Ещё один обработчик...'));

//Tasks

//2
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));

//3
