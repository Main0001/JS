let arr = ["Я", "изучаю", "JavaScript"];

arr.splice(1, 1); // начиная с индекса 1, удалить 1 элемент

alert( arr ); // осталось ["Я", "JavaScript"]

arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// удалить 3 первых элемента и заменить их другими
arr.splice(0, 3, "Давай", "танцевать");

alert( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]

//splice возвращает массив из удалённых элементов:

arr = ["Я", "изучаю", "JavaScript"];

// с индекса 2
// удалить 0 элементов
// вставить "сложный", "язык"
arr.splice(2, 0, "сложный", "язык");

alert( arr ); // "Я", "изучаю", "сложный", "язык", "JavaScript"

arr = [1, 2, 5];

// начиная с индекса -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4
arr.splice(-1, 0, 3, 4);

alert( arr ); // 1,2,3,4,5

//Есть еще метод slice 

arr = [1, 2];

// создать массив из: arr и [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// создать массив из: arr и [3,4] и [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// создать массив из: arr и [3,4], потом добавить значения 5 и 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

arr = [1, 2];

let arrayLike = {
  0: "что-то",
  1: "ещё",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

alert( arr.concat(arrayLike) ); // 1,2,что-то,ещё

["Бильбо", "Гэндальф", "Назгул"].forEach((item, index, array) => {
  alert(`У ${item} индекс ${index} в ${array}`);
});

arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true

let fruits = ['Яблоко', 'Апельсин', 'Яблоко']

alert( fruits.indexOf('Яблоко') ); // 0 (первый 'Яблоко')
alert( fruits.lastIndexOf('Яблоко') ); // 2 (последний 'Яблоко')

let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // Вася

users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"},
  {id: 4, name: "Вася"}
];

// Найти индекс первого Васи
alert(users.findIndex(user => user.name == 'Вася')); // 0

// Найти индекс последнего Васи
alert(users.findLastIndex(user => user.name == 'Вася')); // 3

users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2

// Метод arr.map является одним из наиболее полезных и часто используемых.

// Он вызывает функцию для каждого элемента массива и 
// возвращает массив результатов выполнения этой функции.

let result = arr.map(function(item, index, array) {
  // возвращается новое значение вместо элемента
});

// Например, здесь мы преобразуем каждый элемент в его длину:

let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
alert(lengths); // 6,8,6

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);

alert(arr);  // 1, 2, 15
//Для sort предоставляем собственную функцию сортировки, 
//т.к. метод сорт сравнивает строки (автоматическое преобразование)

arr = [ 1, 2, 15 ];
arr.sort(function(a, b) { return a - b; });
arr.sort( (a, b) => a - b );
alert(arr);  // 1, 2, 15

let countries = ['Österreich', 'Andorra', 'Vietnam'];
alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (неправильно)
alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (правильно!)

arr = [1, 2, 3, 4, 5];
arr.reverse();
alert( arr ); // 5,4,3,2,1

arr = 'Вася, Петя, Маша, Саша'.split(', ', 2);
alert(arr); // Вася, Петя

let str = "тест";
alert( str.split('') ); // т,е,с,т

arr = ['Вася', 'Петя', 'Маша']
str = arr.join(';'); // объединить массив в строку через ;
alert( str ); // Вася;Петя;Маша

arr = [1, 2, 3, 4, 5];
result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15

arr = [1, 2, 3, 4, 5];
// убрано начальное значение (нет 0 в конце)
result = arr.reduce((sum, current) => sum + current);
alert( result ); // 15

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

// найти пользователей, для которых army.canJoin возвращает true
let soldiers = users.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23

//Tasks

//1
function camelize(str) {
    let arr = str.split('-')
    arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));
    return arr.join('')
}

//2
function filterRangeInPlace(arr, a, b) { 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

//3
arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);
alert( arr );

//3
function copySorted(arr) {
  return arr.slice().sort();
}

arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

//4
function calculate(str) {
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }

    this.calculate = function(str) {
        let splitStr = str.split(' '),
        firstVal = splitStr[0],
        secondVal = splitStr[2],
        opertaion = splitStr[1];

        if (isNaN(firstVal) || isNaN(secondVal) || !this.methods[opertaion]) {
            return NaN;
        }

        return this.methods[opertaion](firstVal, secondVal);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }

}

//5
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

users = [ vasya, petya, masha ];

let names = addNamesinArr(users);
//аналог решения let names = users.map(item => item.name);

alert( names ); // Вася, Петя, Маша

function addNamesinArr(arr) {
    let resArr = [];
    arr.map(item => resArr.push(item.name));
    return resArr;
}

//6
vasya = { name: "Вася", surname: "Пупкин", id: 1 };
petya = { name: "Петя", surname: "Иванов", id: 2 };
masha = { name: "Маша", surname: "Петрова", id: 3 };

users = [ vasya, petya, masha ];

let usersMapped = users.map(item => ({
    fullName: `${item.name} ${item.surname}`,
    id: item.id
}))

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // Вася Пупкин

//7
function getAverageAge(users) {
  return users.reduce((prevAge, user) => prevAge + user.age, 0) / users.length;
}

vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 29 };

arr = [ vasya, petya, masha ];

//8
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) );

//9
users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

function groupById(array) {
  return array.reduce((obj, valueObj) => {
    obj[valueObj.id] = valueObj;
    return obj;
  }, {})
}
