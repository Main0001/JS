//Tasks

let table = document.getElementById('age-table');

let tableElements = document.querySelectorAll('#age-table label');

let firstTd = table.rows[0].cells[0];

let form = document.getElementsByName('search')[0];
//document.querySelector('form[name="search"]')

let firstInput = form.getElementsByTagName('input')[0];
// form.querySelector('input')

let inputs = form.querySelectorAll('input');
let lastInput = inputs[inputs.length-1];

