let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true

// Установка Rabbit.prototype = animal буквально говорит интерпретатору следующее: 
// «При создании объекта через new Rabbit() запиши ему animal в [[Prototype]]».

function Rabbit(name) {
  this.name = name;
  alert(name);
}

rabbit = new Rabbit("White Rabbit");

let rabbit2 = new rabbit.constructor("Black Rabbit");

// Это удобно, когда у нас есть объект, 
// но мы не знаем, какой конструктор использовался для его создания 
// (например, он мог быть взят из сторонней библиотеки), 
// а нам необходимо создать ещё один такой объект.

function Rabbit() {}

// Не перезаписываем Rabbit.prototype полностью,
// а добавляем к нему свойство
Rabbit.prototype.jumps = true
// Прототип по умолчанию сохраняется, и мы всё ещё имеем доступ к Rabbit.prototype.constructor

