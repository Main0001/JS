let userName = 'Вася'; //Глобальная переменная

function showMessage() {
  userName = "Петя"; // (1) изменяем значение внешней переменной

  let message = 'Привет, ' + userName;
  alert(message);
}

alert( userName ); // Вася перед вызовом функции

showMessage();

alert( userName ); // Петя, значение внешней переменной было изменено функцией

function showMessage(from, text = "текст не добавлен") {
  alert( from + ": " + text );
  return (
  1
  +
  1
  )
}

showMessage("Аня"); // Аня: текст не добавлен
//Используем значение text по умолчанию
//Также в значение по умолчанию можно добавлять вызываемые функции

//Функция без return или с пустым return возвращает undefined

//Tasks

//1
//Отличий нет, работать будет
//2
/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
*/
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}
//3
function min(a, b) {
  return a < b ? a : b;
}
//4
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x:", '');
let n = prompt("n:", '');

if (n >= 1 && n % 1 == 0) {
  alert( pow(x, n) );
} else {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
}