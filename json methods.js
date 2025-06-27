// let user = {
//   name: "John",
//   age: 30,

//   toString() {
//     return `{name: "${this.name}", age: ${this.age}}`;
//   }
// };

// alert(user); // {name: "John", age: 30}

// let student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//   wife: null
// };

// let json = JSON.stringify(student);

// alert(typeof json); // мы получили строку!

// alert(json);
// /* выведет объект в формате JSON:
// {
//   "name": "John",
//   "age": 30,
//   "isAdmin": false,
//   "courses": ["html", "css", "js"],
//   "wife": null
// }
// */

// // JSON поддерживает следующие типы данных:

// // Объекты { ... }
// // Массивы [ ... ]
// // Примитивы:
// // строки,
// // числа,
// // логические значения true/false,
// // null.

// // число в JSON остаётся числом
// alert( JSON.stringify(1) ) // 1

// // строка в JSON по-прежнему остаётся строкой, но в двойных кавычках
// alert( JSON.stringify('test') ) // "test"

// alert( JSON.stringify(true) ); // true

// alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]

// user = {
//   sayHi() { // будет пропущено
//     alert("Hello");
//   },
//   [Symbol("id")]: 123, // также будет пропущено
//   something: undefined // как и это - пропущено
// };

// alert( JSON.stringify(user) ); // {} (пустой объект)

// let meetup = {
//   title: "Conference",
//   room: {
//     number: 23,
//     participants: ["john", "ann"]
//   }
// };

// alert( JSON.stringify(meetup) );
// /* вся структура преобразована в строку:
// {
//   "title":"Conference",
//   "room":{"number":23,"participants":["john","ann"]},
// }
// */

// let room = {
//   number: 23
// };

// // Важное ограничение: не должно быть циклических ссылок.
// meetup = {
//   title: "Conference",
//   participants: ["john", "ann"]
// };

// meetup.place = room;       // meetup ссылается на room
// room.occupiedBy = meetup; // room ссылается на meetup

// JSON.stringify(meetup); // Ошибка: Преобразование цикличной структуры в JSON

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup ссылается на room
// };

// room.occupiedBy = meetup; // room ссылается на meetup

// alert( JSON.stringify(meetup, ['title', 'participants']) );
// // {"title":"Conference","participants":[{},{}]}

// // Здесь мы, наверное, слишком строги. Список свойств применяется ко всей структуре объекта. Так что внутри participants – пустые объекты, потому что name нет в списке.

// // Давайте включим в список все свойства, кроме room.occupiedBy, из-за которого появляется цикличная ссылка:

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup ссылается на room
// };

// room.occupiedBy = meetup; // room ссылается на meetup

// alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
// /*
// {
//   "title":"Conference",
//   "participants":[{"name":"John"},{"name":"Alice"}],
//   "place":{"number":23}
// }
// */

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup ссылается на room
// };

// room.occupiedBy = meetup; // room ссылается на meetup

// alert( JSON.stringify(meetup, function replacer(key, value) {
//   alert(`${key}: ${value}`);
//   return (key == 'occupiedBy') ? undefined : value;
// }));

// /* пары ключ:значение, которые приходят в replacer:
// :             [object Object]
// title:        Conference
// participants: [object Object],[object Object]
// 0:            [object Object]
// name:         John
// 1:            [object Object]
// name:         Alice
// place:        [object Object]
// number:       23
// occupiedBy: [object Object]
// */

// user = {
//   name: "John",
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true
//   }
// };

// alert(JSON.stringify(user, null, 2));
// /* отступ в 2 пробела:
// {
//   "name": "John",
//   "age": 25,
//   "roles": {
//     "isAdmin": false,
//     "isEditor": true
//   }
// }
// */

// /* для JSON.stringify(user, null, 4) результат содержит больше отступов:
// {
//     "name": "John",
//     "age": 25,
//     "roles": {
//         "isAdmin": false,
//         "isEditor": true
//     }
// }
// */

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   date: new Date(Date.UTC(2017, 0, 1)),
//   room
// };

// alert( JSON.stringify(meetup) );
// /*
//   {
//     "title":"Conference",
//     "date":"2017-01-01T00:00:00.000Z",  // (1)
//     "room": {"number":23}               // (2)
//   }
// */

// let room = {
//   number: 23,
//   toJSON() {
//     return this.number;
//   }
// };

// let meetup = {
//   title: "Conference",
//   room
// };

// alert( JSON.stringify(room) ); // 23

// alert( JSON.stringify(meetup) );
// /*
//   {
//     "title":"Conference",
//     "room": 23
//   }
// */

// user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// user = JSON.parse(user);

// alert( user.friends[1] ); // 1

// // let json = `{
// //   name: "John",                     // Ошибка: имя свойства без кавычек
// //   "surname": 'Smith',               // Ошибка: одинарные кавычки в значении (должны быть двойными)
// //   'isAdmin': false,                 // Ошибка: одинарные кавычки в ключе (должны быть двойными)
// //   "birthday": new Date(2000, 2, 3), // Ошибка: не допускается конструктор "new", только значения
// //   "gender": "male"                  // Ошибка: отсутствует запятая после непоследнего свойства
// //   "friends": [0,1,2,3],             // Ошибка: не должно быть запятой после последнего свойства
// // }`;

// let schedule = `{
//   "meetups": [
//     {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//     {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//   ]
// }`;

// schedule = JSON.parse(schedule, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });

// alert( schedule.meetups[1].date.getDate() ); // 18 - отлично!

//Tasks

//1
let user = {
  name: "Василий Иванович",
  age: 35
};

let json = JSON.stringify(user);
let res = JSON.parse(json);

//Аналог решения let user2 = JSON.parse(JSON.stringify(user));

//2
let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/