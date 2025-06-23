'use strict'

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true, т.к. не пустая строка

alert(a == b); // true, т.к. преобразует "0" к типу число

/*
== - нестрогое сравнение (приводит к одному типу автоматически)
=== - строгое сравнение (приведение к одним типам отсутствует)

При строгом равенстве ===
Эти значения различны, так как различны их типы.

alert( null === undefined ); // false
При нестрогом равенстве ==
Эти значения равны друг другу и не равны никаким другим значениям. Это специальное правило языка.

alert( null == undefined ); // true

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true (сравнение преобразует null в число)

unndefined - преобразуется в Nan, а Nan ничему не равняется
*/

//Tasks

5 > 4 //True
"ананас" > "яблоко" //false
"2" > "12" //true
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" //false

///////////////////////////////////////////////////////////////////

let condition = 2015; // преобразуется к true или false

if (condition > 2015) {
    {} //аналог pass в питоне
}
else if (!condition < 2015) {
    {}
}
else {
    {}
}

// оператор сравнения "age > 18" выполняется первым в любом случае
// (нет необходимости заключать его в скобки)
//в тернарном операторе можно возвращать куда более сложные значения или действия, нежели true and false
let accessAllowed = age > 18 ? true : false;

// то же самое
let accessAllowed1 = age > 18;

let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message );

//Tasks

//1
//True, т.к. строка не пустая
if ("0") {
  alert( 'Привет' );
}

//2

let res = prompt('Какое «официальное» название JavaScript?', '');

alert((res == 'ECMAScript') ? alert('Верно') : alert('Не знаете? ECMAScript!'));

//3

let res2 = prompt('Введите число:', '');

if (+res2 > 0) {
    alert(1);
}
else if (+res2 < 0) {
    alert(-1);
}
else {
    alert(0);
}

// 4

/*
let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
*/

let res3 = (a + b < 4) ? 'Мало' : 'Много';

//5

/*
let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
*/

let res4 = prompt('Какое «официальное» название JavaScript?', '');
let result = (res4 == 'Сотрудник') ? 'Привет' : (res4 == 'Директор') ? 'Здравствуйте' : (res4 == '') ? 'Нет логина' : '';