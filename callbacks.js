function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('/my/script.js', function() {
  // эта функция вызовется после того, как загрузится скрипт
  newFunction(); // теперь всё работает
});

// Теперь, если мы хотим вызвать функцию из скрипта, нужно делать это в колбэке:

// Смысл такой: вторым аргументом передаётся функция (обычно анонимная), 
// которая выполняется по завершении действия.

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Здорово, скрипт ${script.src} загрузился`);
  alert( _ ); // функция, объявленная в загруженном скрипте
});

// Такое написание называют асинхронным программированием с использованием колбэков. В функции, 
// которые выполняют какие-либо асинхронные операции, передаётся аргумент callback — функция, 
// которая будет вызвана по завершению асинхронного действия.

loadScript('/my/script.js', function(script) {

  loadScript('/my/script2.js', function(script) {

    loadScript('/my/script3.js', function(script) {
      // ...и так далее, пока все скрипты не будут загружены
    });

  })

});

//Колбэк внутри колбэка, когда по очереди надо вызвать скрипты

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`));

  document.head.append(script);
}

//Перехват ошибок

loadScript('/my/script.js', function(error, script) {
  if (error) {
    // обрабатываем ошибку
  } else {
    // скрипт успешно загружен
  }
});

// Опять же, подход, который мы использовали в loadScript, также распространён и называется 
// «колбэк с первым аргументом-ошибкой» («error-first callback»).

// Правила таковы:

// Первый аргумент функции callback зарезервирован для ошибки. В этом случае вызов выглядит вот так: callback(err).
// Второй и последующие аргументы — для результатов выполнения. В этом случае вызов выглядит вот так: callback(null, result1, result2…).
// Одна и та же функция callback используется и для информирования об ошибке, и для передачи результатов.

