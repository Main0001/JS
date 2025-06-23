let sayHi = function() {
  alert( "Привет" );
};

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "Вы согласны." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);

//колбэки - функции передаваемые в другие функции в качестве параметров и в последующем вызываемые в переданной функции

// Function Declaration
function sum(a, b) {
  return a + b;
}

// Function Expression
let sum = function(a, b) {
  return a + b;
};
// Function Declaration может быть вызвана раньше чем она объявлена, а 
//Function Expression нет, но 
//Function Expression не создается пока до нее не дошли
