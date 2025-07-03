// экспорт массива
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// экспорт константы
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// экспорт класса
export class User {
  constructor(name) {
    this.name = name;
  }
}


// 📁 say.js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export {sayHi, sayBye}; // список экспортируемых переменных

// 📁 main.js
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

// 📁 main.js
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');


// 📁 main.js
import {sayHi as hi, sayBye as bye} from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!


// 📁 say.js
export {sayHi as hi, sayBye as bye};

// 📁 main.js
import * as say from './say.js';

say.hi('John'); // Hello, John!
say.bye('John'); // Bye, John!

// // 📁 user.js
// export default class User { // просто добавьте "default"
//   constructor(name) {
//     this.name = name;
//   }
// }

// // Заметим, в файле может быть не более одного export default.

// // …И потом импортируем без фигурных скобок:

// // 📁 main.js
// import User from './user.js'; // не {User}, просто User

// new User('John');

// export default class { // у класса нет имени
//   constructor() { ... }
// }
// export default function(user) { // у функции нет имени
//   alert(`Hello, ${user}!`);
// }
// // экспортируем значение, не создавая переменную
// export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


// function sayHi(user) {
//   alert(`Hello, ${user}!`);
// }

// // то же самое, как если бы мы добавили "export default" перед функцией
// export {sayHi as default};


// 📁 user.js
export default class User {
  constructor(name) {
    this.name = name;
  }
}

export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// 📁 main.js
import {default as User, sayHi} from './user.js';

new User('John');

// И, наконец, если мы импортируем всё как объект import *, 
// тогда его свойство default – как раз и будет экспортом по умолчанию:

// // 📁 main.js
// import * as user from './user.js';

// let User = user.default; // экспорт по умолчанию
// new User('John');

export {sayHi} from './say.js'; // реэкспортировать sayHi

export {default as User} from './user.js'; // реэкспортировать default

// 📁 auth/index.js

// импортировать login/logout и тут же экспортировать
import {login, logout} from './helpers.js';
export {login, logout};

// импортировать экспорт по умолчанию как User и тут же экспортировать
import User from './user.js';
export {User};

// Теперь пользователи нашего пакета могут писать import {login} from "auth/index.js".

// Запись export ... from ...– это просто более короткий вариант такого импорта-экспорта:

// 📁 auth/index.js

// импортировать login/logout и тут же экспортировать
export {login, logout} from './helpers.js';

// импортировать экспорт по умолчанию как User и тут же экспортировать
export {default as User} from './user.js';

export * from './user.js'; // для реэкспорта именованных экспортов
export {default} from './user.js'; // для реэкспорта по умолчанию