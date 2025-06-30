function sumTo(number) {
    return (number == 1) ? 1 : number + sumTo(number - 1);
}

function sumTo(number) {
  return number * (number + 1) / 2;
}

function sumTo(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}

//Формула самая быстрая
//Цикл по скорости после формулы
//Рекурсия самая последняя

function factorial(number) {
  return (number != 1) ? number * factorial(number - 1) : 1;
}

function fib(number) {
  return number <= 1 ? number : fib(number - 1) + fib(number - 2);
}

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

function printList(list) {
  let tmp = list;

  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }

}

function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert( arr[i] );
  }
}