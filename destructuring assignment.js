// у нас есть массив с именем и фамилией
let arr = ["Ilya", "Kantor"];

// деструктурирующее присваивание
// записывает firstName = arr[0]
// и surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // Ilya
alert(surname);  // Kantor

[firstName, surname] = "Ilya Kantor".split(' ');
alert(firstName); // Ilya
alert(surname);  // Kantor

// второй элемент не нужен
let [firstName1, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul


// Работает с любым перебираемым объектом с правой стороны
// …На самом деле мы можем использовать любой перебираемый объект, не только массивы:
let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);

let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');

alert(user.name); // Ilya
alert(user.surname); // Kantor

user = {
  name: "John",
  age: 30
};

// цикл по ключам и значениям
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, затем age:30
}

user = new Map();
user.set("name", "John");
user.set("age", "30");

// Map перебирает как пары [ключ, значение], что очень удобно для деструктурирования
for (let [key, value] of user) {
  alert(`${key}:${value}`); // name:John, затем age:30
}

let guest = "Jane";
let admin = "Pete";

// Давайте поменяем местами значения: сделаем guest = "Pete", а admin = "Jane"
[guest, admin] = [admin, guest];

alert(`${guest} ${admin}`); // Pete Jane (успешно заменено!)

// Если мы хотим не просто получить первые значения, 
// но и собрать все остальные, то мы можем добавить ещё один параметр, 
// который получает остальные значения, используя оператор «остаточные параметры» – троеточие ("..."):

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest это массив элементов, начиная с 3-го
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

[firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefined

// значения по умолчанию
let [name = "Guest", surname1 = "Anonymous"] = ["Julius"];

alert(name);    // Julius (из массива)
alert(surname1); // Anonymous (значение по умолчанию)

// prompt запустится только для surname
[name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];

alert(name);    // Julius (из массива)
alert(surname); // результат prompt

let options = {
  title1: "Menu",
  width: 100,
  height: 200
};

let {title1, width, height} = options;

alert(title1);  // Menu
alert(width);  // 100
alert(height); // 200

let {height2, width2, title2} = { title: "Menu", height: 200, width: 100 }

// Если мы хотим присвоить свойство объекта переменной с другим названием, например, свойство options.width присвоить переменной w, то мы можем использовать двоеточие:

options = {
  title3: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title3} = options;

// width -> w
// height -> h
// title -> title

alert(title3);  // Menu
alert(w);      // 100
alert(h);      // 200

options = {
  title4: "Menu",
  height: 200,
  width: 100
};

// title = свойство с именем title
// rest = объект с остальными свойствами
let {title4, ...rest1} = options;

// сейчас title="Menu", rest={height: 200, width: 100}
alert(rest1.height);  // 200
alert(rest1.width);   // 100

//Чтобы показать JavaScript, что это не блок кода, мы можем заключить выражение в скобки (...):

// сейчас всё работает
({title, width, height} = {title: "Menu", width: 200, height: 100});

alert( title ); // Menu

let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// деструктуризация разбита на несколько строк для ясности
let {
  size: { // положим size сюда
    width,
    height
  },
  items: [item1, item2], // добавим элементы к items
  title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut

// мы передаём объект в функцию
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// ...и она немедленно извлекает свойства в переменные
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – взято из options,
  // width, height – используются значения по умолчанию
  alert( `${title} ${width} ${height}` ); // My Menu 200 100
  alert( items ); // Item1, Item2
}

showMenu(options);

let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu({
  title = "Untitled",
  width: w = 100,  // width присваиваем в w
  height: h = 200, // height присваиваем в h
  items: [item1, item2] // первый элемент items присваивается в item1, второй в item2
}) {
  alert( `${title} ${w} ${h}` ); // My Menu 100 200
  alert( item1 ); // Item1
  alert( item2 ); // Item2
}

showMenu(options);


showMenu({}); // ок, все значения - по умолчанию

showMenu(); // так была бы ошибка
// Мы можем исправить это, сделав {} значением по умолчанию 
// для всего объекта параметров:

function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  alert( `${title} ${width} ${height}` );
}

showMenu(); // Menu 100 200

//Tasks

//1
let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = user;

//2
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
    let max = 0;
    let maxName = null;
    for ([keys, values] of Object.entries(salaries)) {
        if (values > max) {
            max = values;
            maxName = keys;
        }
    }
    return maxName
}