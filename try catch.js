try {

  // код...

} catch (err) {

  // обработка ошибки

}

// try..catch работает синхронно
// Исключение, которое произойдёт в коде, запланированном «на будущее», 
// например в setTimeout, try..catch не поймает:

try {
  setTimeout(function() {
    noSuchVariable; // скрипт упадёт тут
  }, 1000);
} catch (e) {
  alert( "не сработает" );
}
// Это потому, что функция выполняется позже, когда движок уже покинул конструкцию try..catch.

// Чтобы поймать исключение внутри запланированной функции, 
// try..catch должен находиться внутри самой этой функции:

setTimeout(function() {
  try {
    noSuchVariable; // try..catch обрабатывает ошибку!
  } catch {
    alert( "ошибка поймана!" );
  }
}, 1000);

try {
  lalala; // ошибка, переменная не определена!
} catch(err) {
  alert(err.name); // ReferenceError
  alert(err.message); // lalala is not defined
  alert(err.stack); // ReferenceError: lalala is not defined at (...стек вызовов)

  // Можем также просто вывести ошибку целиком
  // Ошибка приводится к строке вида "name: message"
  alert(err); // ReferenceError: lalala is not defined
}

let json = "{ некорректный JSON }";

try {

  let user = JSON.parse(json); // <-- тут возникает ошибка...
  alert( user.name ); // не сработает

} catch (e) {
  // ...выполнение прыгает сюда
  alert( "Извините, в данных ошибка, мы попробуем получить их ещё раз." );
  alert( e.name );
  alert( e.message );
}

json = '{ "age": 30 }'; // данные неполны

try {

  let user = JSON.parse(json); // <-- выполнится без ошибок
  alert( user.name ); // нет свойства name!

} catch (e) {
  alert( "не выполнится" );
}

// Оператор throw генерирует ошибку.

// Синтаксис:

// throw <объект ошибки>

json = '{ "age": 30 }'; // данные неполны

try {

  let user = JSON.parse(json); // <-- выполнится без ошибок

  if (!user.name) {
    throw new SyntaxError("Данные неполны: нет имени"); // (*)
  }

  alert( user.name );

} catch(e) {
  alert( "JSON Error: " + e.message ); // JSON Error: Данные неполны: нет имени
}

// Есть простое правило:

// Блок catch должен обрабатывать только те ошибки, которые ему известны, и «пробрасывать» все остальные.

// Техника «проброс исключения» выглядит так:

// Блок catch получает все ошибки.
// В блоке catch(err) {...} мы анализируем объект ошибки err.
// Если мы не знаем как её обработать, тогда делаем throw err.
// В коде ниже мы используем проброс исключения, catch обрабатывает только SyntaxError:

json = '{ "age": 30 }'; // данные неполны
try {

  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Данные неполны: нет имени");
  }

  blabla(); // неожиданная ошибка

  alert( user.name );

} catch(e) {

  if (e.name == "SyntaxError") {
    alert( "JSON Error: " + e.message );
  } else {
    throw e; // проброс (*)
  }

}

function readData() {
  let json = '{ "age": 30 }';

  try {
    // ...
    blabla(); // ошибка!
  } catch (e) {
    // ...
    if (e.name != 'SyntaxError') {
      throw e; // проброс исключения (не знаю как это обработать)
    }
  }
}

try {
  readData();
} catch (e) {
  alert( "Внешний catch поймал: " + e ); // поймал!
}

// try {
//    ... пробуем выполнить код...
// } catch(e) {
//    ... обрабатываем ошибки ...
// } finally {
//    ... выполняем всегда ...
// }

try {
  alert( 'try' );
  if (confirm('Сгенерировать ошибку?')) BAD_CODE();
} catch (e) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}

let num = +prompt("Введите положительное целое число?", 35)

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Должно быть целое неотрицательное число");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (e) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

alert(result || "возникла ошибка");

alert( `Выполнение заняло ${diff}ms` );

function func() {

  try {
    return 1;

  } catch (e) {
    /* ... */
  } finally {
    alert( 'finally' );
  }
}

alert( func() ); // сначала срабатывает alert из finally, а затем этот код

function func() {
  // начать делать что-то, что требует завершения (например, измерения)
  try {
    // ...
  } finally {
    // завершить это, даже если все упадёт
  }
}

window.onerror = function(message, url, line, col, error) {
  // ...
};

// <script>
//   window.onerror = function(message, url, line, col, error) {
//     alert(`${message}\n В ${line}:${col} на ${url}`);
//   };

//   function readData() {
//     badFunc(); // Ой, что-то пошло не так!
//   }

//   readData();
// </script>

//Tasks

//1
