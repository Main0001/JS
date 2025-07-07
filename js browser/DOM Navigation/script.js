// Как мы уже видели, childNodes похож на массив. На самом деле это не массив, 
// а коллекция – особый перебираемый объект-псевдомассив.

// И есть два важных следствия из этого:

// Для перебора коллекции мы можем использовать for..of:
for (let node of document.body.childNodes) {
  alert(node); // покажет все узлы из коллекции
}
// Это работает, потому что коллекция является перебираемым объектом (есть требуемый для этого метод Symbol.iterator).

// Методы массивов не будут работать, потому что коллекция – это не массив:

alert(document.body.childNodes.filter); // undefined (у коллекции нет метода filter!)

// Первый пункт – это хорошо для нас. Второй – бывает неудобен, но можно пережить. 
// Если нам хочется использовать именно методы массива, 
// то мы можем создать настоящий массив из коллекции, используя Array.from:

alert( Array.from(document.body.childNodes).filter ); // сделали массив

// родителем <body> является <html>
alert( document.body.parentNode === document.documentElement ); // выведет true

// после <head> идёт <body>
alert( document.head.nextSibling ); // HTMLBodyElement

// перед <body> находится <head>
alert( document.body.previousSibling ); // HTMLHeadElement

// Эти ссылки похожи на те, что раньше, только в ряде мест стоит слово Element:

// children – коллекция детей, которые являются элементами.
// firstElementChild, lastElementChild – первый и последний дочерний элемент.
// previousElementSibling, nextElementSibling – соседи-элементы.
// parentElement – родитель-элемент.

alert( document.documentElement.parentNode ); // выведет document
alert( document.documentElement.parentElement ); // выведет null

//Tasks

//1
dociment.body.children[0];

document.body.children[1];

document.body.lastElementChild.lastElementChild;

