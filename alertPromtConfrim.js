'use strict'

let ask = confirm('Спросить?');

if (ask) {
    let result = prompt('userName', '');
    alert(`User name is ${result}`);
}
