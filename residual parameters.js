function sumAll(...args) { // args — имя массива
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6
//Остаточные параметры через ...args

function showName(firstName, lastName, ...titles) {
  alert( firstName + ' ' + lastName ); // Юлий Цезарь

  // Оставшиеся параметры пойдут в массив
  // titles = ["Консул", "Император"]
  alert( titles[0] ); // Консул
  alert( titles[1] ); // Император
  alert( titles.length ); // 2
}

showName("Юлий", "Цезарь", "Консул", "Император");

// Все аргументы функции находятся в псевдомассиве arguments под своими порядковыми номерами.
function showName() {
  alert( arguments.length );
  alert( arguments[0] );
  alert( arguments[1] );

  // Объект arguments можно перебирать
  // for (let arg of arguments) alert(arg);
}

// Вывод: 2, Юлий, Цезарь
showName("Юлий", "Цезарь");

// Вывод: 1, Илья, undefined (второго аргумента нет)
showName("Илья");

// Стрелочные функции не имеют "arguments"
// Если мы обратимся к arguments из стрелочной функции, то получим аргументы внешней «нормальной» функции.
function f() {
  let showArg = () => alert(arguments[0]);
  showArg(2);
}

f(1); // 1

// И тут нам поможет оператор расширения. Он похож на остаточные параметры – тоже использует ..., 
// но делает совершенно противоположное.

// Когда ...arr используется при вызове функции, он «расширяет» перебираемый объект arr в список аргументов.

// Для Math.max:

let arr = [3, 5, 1];

alert( Math.max(...arr) ); // 5 (оператор "раскрывает" массив в список аргументов)

arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

alert(merged); // 0,3,5,1,2,8,9,15 (0, затем arr, затем 2, в конце arr2)

let str = "Привет";

alert( [...str] ); // П,р,и,в,е,т

str = "Привет";

// Array.from преобразует перебираемый объект в массив
alert( Array.from(str) ); // П,р,и,в,е,т