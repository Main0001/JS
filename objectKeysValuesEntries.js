// Для простых объектов доступны следующие методы:

// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар [ключ, значение].

let user = {
  name: "John",
  age: 30
};

// перебор значений
for (let value of Object.values(user)) {
  alert(value); // John, затем 30
}

//Tasks

//1
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650

function sumSalaries(salaries) {
    let sum = 0;

    for (let value of Object.values(salaries)) {
        sum += value;
    }

    //аналог решения return Object.values(salaries).reduce((a,b) = > a + b, 0);

    return sum;
}

//2
user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2

function count(properties) {
    return Object.keys(properties).length;
}