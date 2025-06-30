let user = {
  firstName: "Вася",
  sayHi() {
    alert(`Привет, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi, 1000); // Привет, undefined!

user = {
  firstName: "Вася",
  sayHi() {
    alert(`Привет, ${this.firstName}!`);
  }
};

setTimeout(function() {
  user.sayHi(); // Привет, Вася!
}, 1000);

setTimeout(() => user.sayHi(), 1000); // Привет, Вася!

// В современном JavaScript у функций есть встроенный метод bind, который позволяет зафиксировать this.

// Базовый синтаксис bind:

// полный синтаксис будет представлен немного позже
let boundFunc = func.bind(context);

user = {
  firstName: "Вася"
};

function func() {
  alert(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // Вася

user = {
  firstName: "Вася"
};

function func(phrase) {
  alert(phrase + ', ' + this.firstName);
}

// привязка this к user
funcUser = func.bind(user);

funcUser("Привет"); // Привет, Вася (аргумент "Привет" передан, при этом this = user)

user = {
  firstName: "Вася",
  sayHi() {
    alert(`Привет, ${this.firstName}!`);
  }
};

let sayHi = user.sayHi.bind(user); // (*)

sayHi(); // Привет, Вася!

setTimeout(sayHi, 1000); // Привет, Вася!

// Удобный метод: bindAll
// Если у объекта много методов и мы планируем их активно передавать, то можно привязать контекст для них всех в цикле:

// for (let key in user) {
//   if (typeof user[key] == 'function') {
//     user[key] = user[key].bind(user);
//   }
// }

// Полный синтаксис bind:

// let bound = func.bind(context, [arg1], [arg2], ...);

function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);

alert( double(3) ); // = mul(2, 3) = 6
alert( double(4) ); // = mul(2, 4) = 8
alert( double(5) ); // = mul(2, 5) = 10

function partial(func, ...argsBound) {
  return function(...args) { // (*)
    return func.call(this, ...argsBound, ...args);
  }
}

// использование:
user = {
  firstName: "John",
  say(time, phrase) {
    alert(`[${time}] ${this.firstName}: ${phrase}!`);
  }
};

// добавляем частично применённый метод с фиксированным временем
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

user.sayNow("Hello");
// Что-то вроде этого:
// [10:00] John: Hello!

//Tasks

//4
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//5
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));