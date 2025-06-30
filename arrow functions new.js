// У стрелочных функций нет «this»
// Как мы помним из главы Методы объекта, "this", у стрелочных функций нет this. Если происходит обращение к this, его значение берётся снаружи.

// Например, мы можем использовать это для итерации внутри метода объекта:

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(
      student => alert(this.title + ': ' + student)
    );
  }
};

group.showList();
// Здесь внутри forEach использована стрелочная функция, таким образом this.title в ней будет иметь точно такое же значение, как в методе showList: group.title.

// Стрелочные функции не имеют «arguments»
// У стрелочных функций также нет переменной arguments.

// Это отлично подходит для декораторов, когда нам нужно пробросить вызов с текущими this и arguments.

// Например, defer(f, ms) принимает функцию и возвращает обёртку над ней, которая откладывает вызов на ms миллисекунд:

function defer(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms)
  };
}

function sayHi(who) {
  alert('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // выводит "Hello, John" через 2 секунды