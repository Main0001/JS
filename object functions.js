function sayHi() {
  alert("Hi");
}

alert(sayHi.name); // sayHi

let sayHi = function() {
  alert("Hi");
};

alert(sayHi.name); // sayHi (есть имя!)

function f(sayHi = function() {}) {
  alert(sayHi.name); // sayHi (работает!)
}

f();

let user = {

  sayHi() {
    // ...
  },

  sayBye: function() {
    // ...
  }

}

alert(user.sayHi.name); // sayHi
alert(user.sayBye.name); // sayBye

// Ещё одно встроенное свойство «length» содержит количество параметров функции 
// в её объявлении. Например:

function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2
// Как мы видим, троеточие, обозначающее «остаточные параметры», здесь как бы «не считается».

let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // Теперь всё в порядке
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Hello, Guest (вложенный вызов работает)

//Tasks

//1

function makeCounter() {
  let count = 0

  function counter() {
    return counter.count++;
  };

  counter.set = value => count = value;

  counter.decrease = () => count--;

  return counter;
}

function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

func.call(context, ...args); // передаёт массив как список с оператором расширения
func.apply(context, args);   // тот же эффект

// Оператор расширения ... позволяет передавать перебираемый объект args в виде списка в call.
// А apply принимает только псевдомассив args.

// Передача всех аргументов вместе с контекстом другой функции называется «перенаправлением вызова» (call forwarding).

// Простейший вид такого перенаправления:

let wrapper = function() {
  return func.apply(this, arguments);
};

