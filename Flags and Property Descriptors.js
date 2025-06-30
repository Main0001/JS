// Флаги свойств
// Помимо значения value, свойства объекта имеют три специальных атрибута (так называемые «флаги»).

// writable – если true, свойство можно изменить, иначе оно только для чтения.
// enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
// configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

// Метод Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве.

// Его синтаксис:

// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

let user = {
  name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/* дескриптор свойства:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/

user = {};

Object.defineProperty(user, "name", {
  value: "John"
});

descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */

user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  writable: false
});

user.name = "Pete"; // Ошибка: Невозможно изменить доступное только для чтения свойство 'name'

// Ошибки появляются только в строгом режиме
// В нестрогом режиме, без use strict, мы не увидим никаких ошибок при записи в свойства 
// «только для чтения» и т.п. Но эти операции всё равно не будут выполнены успешно. Действия, 
// нарушающие ограничения флагов, в нестрогом режиме просто молча игнорируются.

// Теперь добавим собственный метод toString к объекту user.

// Встроенный метод toString в объектах – неперечислимый, его не видно в цикле for..in. 
// Но если мы напишем свой собственный метод toString, 
// цикл for..in будет выводить его по умолчанию:

let user = {
  name: "John",
  toString() {
    return this.name;
  }
};

// По умолчанию оба свойства выведутся:
for (let key in user) alert(key); // name, toString
// Если мы этого не хотим, можно установить для свойства enumerable:false. Тогда оно перестанет появляться в цикле for..in аналогично встроенному toString:

let user = {
  name: "John",
  toString() {
    return this.name;
  }
};

Object.defineProperty(user, "toString", {
  enumerable: false
});

// Теперь наше свойство toString пропало из цикла:
for (let key in user) alert(key); // name


descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/

// Определение свойства как неконфигурируемого – это дорога в один конец. Мы не можем изменить его обратно с помощью defineProperty.

// Обратите внимание: configurable: false не даст изменить флаги свойства, а также не даст его удалить.

// Существует метод Object.defineProperties(obj, descriptors), который позволяет определять множество свойств сразу.
Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});

//Чтобы получить все дескрипторы свойств сразу, можно воспользоваться методом Object.getOwnPropertyDescriptors(obj).

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

for (let key in user) {
  clone[key] = user[key]
}

// Дескрипторы свойств работают на уровне конкретных свойств.

// Но ещё есть методы, которые ограничивают доступ ко всему объекту:

// Object.preventExtensions(obj)
// Запрещает добавлять новые свойства в объект.
// Object.seal(obj)
// Запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойств.
// Object.freeze(obj)
// Запрещает добавлять/удалять/изменять свойства. Устанавливает configurable: false, writable: false для всех существующих свойств.
// А также есть методы для их проверки:

// Object.isExtensible(obj)
// Возвращает false, если добавление свойств запрещено, иначе true.
// Object.isSealed(obj)
// Возвращает true, если добавление/удаление свойств запрещено и для всех существующих свойств установлено configurable: false.
// Object.isFrozen(obj)
// Возвращает true, если добавление/удаление/изменение свойств запрещено, и для всех текущих свойств установлено configurable: false, writable: false.