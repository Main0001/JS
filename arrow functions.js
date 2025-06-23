'use strict'

let func = (arg1, arg2, ...argN) => expression;

func = function(arg1, arg2, ...argN) {
  return expression;
};
//Одно и тоже работает

let double = n => n * 2;
// примерно тоже что и: let double = function(n) { return n * 2 }

alert( double(3) ); // 6

let sayHi = () => alert("Hello!");

sayHi();

let age = prompt("Сколько Вам лет?", 18);

let welcome = (age < 18) ?
  () => alert('Привет!') :
  () => alert("Здравствуйте!");

welcome();

let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
  let result = a + b;
  return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
};

alert( sum(1, 2) ); // 3

//Tasks

//1
/*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);