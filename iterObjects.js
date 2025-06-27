let range = {
  from: 1,
  to: 5
};

// 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function() {

  // ...она возвращает объект итератора:
  // 2. Далее, for..of работает только с этим итератором,
  // запрашивая у него новые значения
  return {
    current: this.from,
    last: this.to,

    // 3. next() вызывается на каждой итерации цикла for..of
    next() {
      // 4. он должен вернуть значение в виде объекта {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// теперь работает!
for (let num of range) {
  alert(num); // 1, затем 2, 3, 4, 5
}

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, затем 2, 3, 4, 5
}

for (let char of "test") {
  // срабатывает 4 раза: по одному для каждого символа
  alert( char ); // t, затем e, затем s, затем t
}

let str = "Hello";

// делает то же самое, что и
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // выводит символы один за другим
}

let arrayLike = { // есть индексы и свойство length => псевдомассив
  0: "Hello",
  1: "World",
  length: 2
};

// Ошибка (отсутствует Symbol.iterator)
for (let item of arrayLike) {} 
//Объект не итерируемый

// Есть универсальный метод Array.from, 
// который принимает итерируемый объект или псевдомассив
// и делает из него «настоящий» Array. После этого мы уже можем 
// использовать методы массивов.

arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World (метод работает)

// range взят из примера в начале статьи

// возводим каждое число в квадрат
arr = Array.from(range, num => num * num);

alert(arr); // 1,4,9,16,25

str = '𝒳😂';

// разбивает строку на массив её элементов
let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2

function slice(str, start, end) {
  return Array.from(str).slice(start, end).join('');
}

str = '𝒳😂𩷶';

alert( slice(str, 1, 3) ); // 😂𩷶

// а вот встроенный метод не поддерживает суррогатные пары
alert( str.slice(1, 3) ); // мусор (две части различных суррогатных пар)