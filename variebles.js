function sum(a) {

  return function(b) {
    return a + b; // берёт "a" из внешнего лексического окружения
  };

}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1) ); // 4

function func() {
  // локальная переменная x известна движку с самого начала выполнения функции,
  // но она является неинициализированной до let ("мёртвая зона")
  // следовательно, ошибка

  console.log(x); // ReferenceError: Cannot access 'x' before initialization

  let x = 2;
}

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}

arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

function byField(fieldName){
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}