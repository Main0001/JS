// 📁 say.js
export function hi() {
  alert(`Привет`);
}

export function bye() {
  alert(`Пока`);
}

let {hi, bye} = await import('./say.js');

hi();
bye();

// 📁 say.js
export default function() {
  alert("Module loaded (export default)!");
}

let obj = await import('./say.js');
let say = obj.default;
// или, одной строкой: let {default: say} = await import('./say.js');

say();

// На заметку:
// Динамический импорт работает в обычных скриптах, он не требует указания script type="module".

// На заметку:
// Хотя import() и выглядит похоже на вызов функции, на самом деле это 
// специальный синтаксис, так же, как, например, super().

// Так что мы не можем скопировать import в другую переменную или 
// вызвать при помощи .call/apply. Это не функция.