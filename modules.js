// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!

// В модулях всегда используется режим use strict
// Каждый модуль имеет свою собственную область видимости. Другими словами, 
// переменные и функции, объявленные в модуле, не видны в других скриптах.

// В браузере также существует независимая область видимости для каждого скрипта 
// <script type="module">:

// <script type="module">
//   // Переменная доступна только в этом модуле
//   let user = "John";
// </script>

// <script type="module">
//   alert(user); // Error: user is not defined
// </script>


// 📁 1.js
import {admin} from './admin.js';
admin.name = "Pete";

// 📁 2.js
import {admin} from './admin.js';
alert(admin.name); // Pete

// Оба файла, 1.js и 2.js, импортируют один и тот же объект
// Изменения, сделанные в 1.js, будут видны в 2.js

// 📁 init.js
import {admin} from './admin.js';
admin.name = "Pete";

// 📁 other.js
import {admin, sayHi} from './admin.js';

alert(admin.name); // Pete

sayHi(); // Ready to serve, Pete!


// <script>
//   alert(this); // window
// </script>

// <script type="module">
//   alert(this); // undefined
// </script>

// <script type="module">
//   alert(typeof button); // object: скрипт может 'видеть' кнопку под ним
//   // так как модули являются отложенными, то скрипт начнёт выполнятся только после полной загрузки страницы
// </script>

// Сравните с обычным скриптом ниже:

// <script>
//   alert(typeof button); // Ошибка: кнопка не определена, скрипт не видит элементы под ним
//   // обычные скрипты запускаются сразу, не дожидаясь полной загрузки страницы
// </script>

// <button id="button">Кнопка</button>

// <!-- загружаются зависимости (analytics.js) и скрипт запускается -->
// <!-- модуль не ожидает загрузки документа или других тэгов <script> -->
// <script async type="module">
//   import {counter} from './analytics.js';

//   counter.count();
// </script>

// <script type="module">
//   alert("Работает в современных браузерах");
// </script>

// <script nomodule>
//   alert("Современные браузеры понимают оба атрибута - и type=module, и nomodule, поэтому пропускают этот тег script")
//   alert("Старые браузеры игнорируют скрипты с неизвестным атрибутом type=module, но выполняют этот.");
// </script>

