function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false

function User(name) {
  if (!new.target) { // в случае, если вы вызвали меня без оператора new
    return new User(name); // ...я добавлю new за вас
  }

  this.name = name;
}

let john = User("John"); // переадресовывает вызов на new User
alert(john.name); // John

function BigUser() {

  this.name = "John";

  return { name: "Godzilla" };  // <-- возвращает этот объект
}

alert( new BigUser().name );  // Godzilla, получили этот объект

function SmallUser() {

  this.name = "John";

  return; // <-- возвращает this
}

alert( new SmallUser().name );  // John

function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "Меня зовут: " + this.name );
  };
}

let Max = new User("Max");

john.sayHi(); // Меня зовут: Max

//Tasks

//1

let obj = {};

function A() { 
  return obj; 
}
function B() { 
  return obj; 
}

alert( new A() == new B() ); // true

//2
function Calculator() {
  this.read = function() {
    this.a = +prompt('Введите число A', 0);
    this.b = +prompt('Введите число B', 0);
  },

  this.sum = function() {
    return this.a + this.b;
  },

  this.mul = function() {
    return this.a * this.b
  }

}

//3

function Accumulator(startingValue) {
    this.startingValue = startingValue;

    this.read = function() {
        userValue = +prompt('Введите число', '');
        this.startingValue += userValue;
    }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений


