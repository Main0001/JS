// добавим один метод (можно более одного)
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

let filteredArr = arr.filter(item => item >= 10);
alert(filteredArr); // 10, 50
alert(filteredArr.isEmpty()); // false

// Обратите внимание на интересный момент: встроенные методы, 
// такие как filter, map и другие возвращают новые объекты унаследованного класса PowerArray. 
// Их внутренняя реализация такова, что для этого они используют свойство объекта constructor.

// В примере выше,

// arr.constructor === PowerArray
// Поэтому при вызове метода arr.filter() он внутри создаёт массив результатов, 
// именно используя arr.constructor, а не обычный массив. Это замечательно, 
// поскольку можно продолжать использовать методы PowerArray далее на результатах.

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // встроенные методы массива будут использовать этот метод как конструктор
  static get [Symbol.species]() {
    return Array;
  }
}

arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

// filter создаст новый массив, используя arr.constructor[Symbol.species] как конструктор
filteredArr = arr.filter(item => item >= 10);

// filteredArr не является PowerArray, это Array
alert(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function

