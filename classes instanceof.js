// Оператор instanceof позволяет проверить, 
// принадлежит ли объект указанному классу, с учётом наследования.

class Rabbit {}
let rabbit = new Rabbit();

// это объект класса Rabbit?
alert( rabbit instanceof Rabbit ); // true

// проверка instanceof будет полагать,
// что всё со свойством canEat - животное Animal


class Animal {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
  }
}

let obj = { canEat: true };
alert(obj instanceof Animal); // true: вызван Animal[Symbol.hasInstance](obj)


// Большая часть классов не имеет метода Symbol.hasInstance. 
// В этом случае используется стандартная логика: проверяется, 
// равен ли Class.prototype одному из прототипов в прототипной цепочке obj.

// Другими словами, сравнивается:

// obj.__proto__ === Class.prototype?
// obj.__proto__.__proto__ === Class.prototype?
// obj.__proto__.__proto__.__proto__ === Class.prototype
// ...
// если какой-то из ответов true - возвратить true
// если дошли до конца цепочки - false

class Animal {}
class Rabbit extends Animal {}

rabbit = new Rabbit();
alert(rabbit instanceof Animal); // true

// rabbit.__proto__ === Animal.prototype (нет совпадения)
// rabbit.__proto__.__proto__ === Animal.prototype (совпадение!)

// Кстати, есть метод objA.isPrototypeOf(objB), который возвращает true, 
// если объект objA есть где-то в прототипной цепочке объекта objB. 
// Так что obj instanceof Class можно перефразировать как Class.prototype.isPrototypeOf(obj).


// скопируем метод toString в переменную для удобства
let objectToString = Object.prototype.toString;

// какой это тип?
let arr = [];

alert( objectToString.call(arr) ); // [object Array]

// В примере мы использовали call, как описано в главе Декораторы и переадресация вызова, 
// call/apply, чтобы выполнить функцию objectToString в контексте this=arr.

// Внутри, алгоритм метода toString анализирует контекст вызова this и возвращает соответствующий

// Поведение метода объектов toString можно настраивать, используя специальное свойство объекта Symbol.toStringTag.

// Например:

let user = {
  [Symbol.toStringTag]: "User"
};

alert( {}.toString.call(user) ); // [object User]

// toStringTag для браузерного объекта и класса
alert( window[Symbol.toStringTag]); // window
alert( XMLHttpRequest.prototype[Symbol.toStringTag] ); // XMLHttpRequest

alert( {}.toString.call(window) ); // [object Window]
alert( {}.toString.call(new XMLHttpRequest()) ); // [object XMLHttpRequest]

//Tasks

//1
function A() {}
function B() {}

A.prototype = B.prototype = {}; //Одинаковые прототипы

let a = new A();

alert( a instanceof B ); // true

// И в данном примере a.__proto__ == B.prototype, так что instanceof возвращает true.

// Таким образом, по логике instanceof, именно prototype в действительности определяет тип, а не функция-конструктор.