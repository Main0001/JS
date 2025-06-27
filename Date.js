let now = new Date();
alert( now ); // показывает текущие дату и время

// 0 соответствует 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );

// теперь добавим 24 часа и получим 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );

// 31 декабря 1969 года
let Dec31_1969 = new Date(-24 * 3600 * 1000);
alert( Dec31_1969 );

let date = new Date("2017-01-26");
alert(date);
// Время не указано, поэтому оно ставится в полночь по Гринвичу и
// меняется в соответствии с часовым поясом места выполнения кода
// Так что в результате можно получить
// Thu Jan 26 2017 11:00:00 GMT+1100 (восточно-австралийское время)
// или
// Wed Jan 25 2017 16:00:00 GMT-0800 (тихоокеанское время)

//new Date(year, month, date, hours, minutes, seconds, ms)

new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // то же самое, так как часы и проч. равны 0

date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert( date ); // 1.01.2011, 02:03:04.567

// Существуют методы получения года, месяца и т.д. из объекта Date:

// getFullYear()
// Получить год (4 цифры)
// getMonth()
// Получить месяц, от 0 до 11.
// getDate()
// Получить день месяца, от 1 до 31, что несколько противоречит названию метода.
// getHours(), getMinutes(), getSeconds(), getMilliseconds()
// Получить, соответственно, часы, минуты, секунды или миллисекунды.

// getDay()
// Вернуть день недели от 0 (воскресенье) до 6 (суббота). 
// Несмотря на то, что в ряде стран за первый день недели принят понедельник, 
// в JavaScript начало недели приходится на воскресенье.

// Однако существуют и их UTC-варианты, возвращающие день, месяц, год для временной зоны UTC+0: 
// getUTCFullYear(), getUTCMonth(), getUTCDay(). Для их использования требуется после "get" подставить "UTC".

// getTime()
// Для заданной даты возвращает таймстамп – количество миллисекунд, 
// прошедших с 1 января 1970 года UTC+0.

// getTimezoneOffset()
// Возвращает разницу в минутах между UTC и местным часовым поясом:

// если вы в часовом поясе UTC-1, то выводится 60
// если вы в часовом поясе UTC+3, выводится -180
alert( new Date().getTimezoneOffset() );

// Следующие методы позволяют установить компоненты даты и времени:

// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) (устанавливает дату в виде целого количества миллисекунд, прошедших с 01.01.1970 UTC)

let today = new Date();

today.setHours(0);
alert(today); // выводится сегодняшняя дата, но значение часа будет 0

today.setHours(0, 0, 0, 0);
alert(today); // всё ещё выводится сегодняшняя дата, но время будет ровно 00:00:00.

// Автоисправление даты
// Автоисправление – это очень полезная особенность объектов Date. Можно устанавливать компоненты даты вне обычного диапазона значений, а объект сам себя исправит.

// Пример:

date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date); // ...1st Feb 2013!

date = new Date(2016, 0, 2); // 2 Jan 2016
date.setDate(1); // задать первое число месяца
alert( date );
date.setDate(0); // первый день месяца -- это 1, так что выводится последнее число предыдущего месяца
alert( date ); // 31 Dec 2015

let start = new Date.now(); // начинаем отсчёт времени

// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date.now(); // заканчиваем отсчёт времени

alert( `Цикл отработал за ${end - start} миллисекунд` );

// Метод Date.parse(str) считывает дату из строки.

// Формат строки должен быть следующим: YYYY-MM-DDTHH:mm:ss.sssZ, где:

// YYYY-MM-DD – это дата: год-месяц-день.
// Символ "T" используется в качестве разделителя.
// HH:mm:ss.sss – время: часы, минуты, секунды и миллисекунды.
// Необязательная часть 'Z' обозначает часовой пояс в формате +-hh:mm. Если указать просто букву Z, то получим UTC+0.
// Возможны и более короткие варианты, например, YYYY-MM-DD или YYYY-MM, или даже YYYY.

// Вызов Date.parse(str) обрабатывает строку в заданном формате и возвращает таймстамп (количество миллисекунд с 1 января 1970 года UTC+0). Если формат неправильный, возвращается NaN.

// Например:

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

alert(ms); // 1327611110417 (таймстамп)

//Tasks

//1
let res = new Date(2012, 1, 20, 3, 12);
alert( res );

//2
date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()];
}

//3
date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );

function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
    day = 7;
  }

  return day;
}

//4
date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

//5
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0); //0 - последний день предыдущего месяца, поэтому month+1
  return date.getDate();
}

alert( getLastDayOfMonth(2012, 0) ); // 31
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) ); // 28

//6
function getSecondsToday() {
  let date = new Date();
  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

//7
function getSecondsToTomorrow() {
  let now = new Date();

  // завтрашняя дата
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  let diff = tomorrow - now; // разница в миллисекундах
  return Math.round(diff / 1000); // преобразуем в секунды
}