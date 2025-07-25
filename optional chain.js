/*
Опциональная цепочка ?. останавливает вычисление и возвращает undefined, если значение перед ?. равно undefined или null.

Далее в этой статье, для краткости, мы будем говорить, что что-то «существует», если оно не является null и не undefined.

Другими словами, value?.prop:

работает как value.prop, если значение value существует,
в противном случае (когда value равно undefined/null) он возвращает undefined.
Вот безопасный способ получить доступ к user.address.street, используя ?.:

*/

let user = {}; // пользователь без адреса

alert( user?.address?.street ); // undefined (без ошибки)

// Опциональная цепочка ?. — это не оператор, а специальная синтаксическая конструкция, которая также работает с функциями и квадратными скобками.
// Например, ?.() используется для вызова функции, которая может не существовать.
// В приведённом ниже коде у некоторых наших пользователей есть метод admin, а у некоторых его нет:
//Также работает и в случаях user?.[key]

let userAdmin = {
  admin() {
    alert("Я админ");
  }
};

let userGuest = {};

userAdmin.admin?.(); // Я админ

userGuest.admin?.(); // ничего не произойдет (такого метода нет)