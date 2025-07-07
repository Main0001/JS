document.body.myData = {
  name: 'Caesar',
  title: 'Imperator'
};

alert(document.body.myData.title); // Imperator

document.body.sayTagName = function() {
  alert(this.tagName);
};

document.body.sayTagName(); // BODY (значением "this" в этом методе будет document.body)

Element.prototype.sayHi = function() {
  alert(`Hello, I'm ${this.tagName}`);
};

document.documentElement.sayHi(); // Hello, I'm HTML
document.body.sayHi(); // Hello, I'm BODY