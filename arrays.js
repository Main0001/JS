// разные типы значений
let arr = [ 'Яблоко', { name: 'Джон' }, true, function() { alert('привет'); } ];

// получить элемент с индексом 1 (объект) и затем показать его свойство
alert( arr[1].name ); // Джон

// получить элемент с индексом 3 (функция) и выполнить её
arr[3](); // привет

let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[fruits.length-1] ); // Plum

fruits = ["Apple", "Orange", "Plum"];
// то же самое, что и fruits[fruits.length-1]
alert( fruits.at(-1) ); // Plum

// push добавляет элемент в конец.
// pop удаляет последний элемент.

fruits = ["Яблоко", "Апельсин", "Груша"];

alert( fruits.shift() ); // удаляем Яблоко и выводим его

alert( fruits ); // Апельсин, Груша

fruits = ["Апельсин", "Груша"];

fruits.unshift('Яблоко');

alert( fruits ); // Яблоко, Апельсин, Груша

arr = [1, 2, 3, 4, 5];

arr.length = 2; // укорачиваем до двух элементов
alert( arr ); // [1, 2]

arr.length = 5; // возвращаем length как было
alert( arr[3] ); // undefined: значения не восстановились

arr = [1, 2, 3];

alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true

alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"

//Tasks

//1
//Выведет 4, т.к. по ссылке изменили исходный объект

//2
let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[Math.floor((styles.length-1)/2)] = 'Классика';
alert(styles.shift());
styles.unshift('Рэп', 'Регги');

//3
arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // a,b,function(){...}

//4
function sumInput() {
    values = [];
    while (true) {
        let userValue = prompt('Введите число', '');

        if (userValue === '' || !isFinite(userValue) || userValue === null) {
            break;
        }

        values.push(+userValue);
    }

    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }

    return sum;
}

//5
function getMaxSubSum(arr) {
  let maxSum = 0; // если элементов не будет - возвращаем 0

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}