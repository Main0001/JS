class User {
  static staticMethod() {
    alert(this === User);
  }
}

User.staticMethod(); // true

// Это фактически то же самое, что присвоить метод напрямую как свойство функции:

class User { }

User.staticMethod = function() {
  alert(this === User);
};

// Обычно статические методы используются для реализации функций, 
// которые будут принадлежать классу в целом, но не какому-либо его конкретному объекту.

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// использование
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);

alert( articles[0].title ); // CSS


class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createTodays() {
    // помним, что this = Article
    return new this("Сегодняшний дайджест", new Date());
  }
}

let article = Article.createTodays();

alert( article.title ); // Сегодняшний дайджест

// Статические методы недоступны для отдельных объектов
// Статические методы могут вызываться для классов, но не для отдельных объектов.

// Например. такой код не будет работать:

// ...
article.createTodays(); /// Error: article.createTodays is not a function

class Article {
  static publisher = "Илья Кантор";
}

alert( Article.publisher ); // Илья Кантор

class Animal {

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    alert(`${this.name} бежит со скоростью ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }

}

// Наследует от Animal
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} прячется!`);
  }
}

let rabbits = [
  new Rabbit("Белый кролик", 10),
  new Rabbit("Чёрный кролик", 5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Чёрный кролик бежит со скоростью 5.

class Animal {}
class Rabbit extends Animal {}

// для статики
alert(Rabbit.__proto__ === Animal); // true

// для обычных методов
alert(Rabbit.prototype.__proto__ === Animal.prototype); // true

