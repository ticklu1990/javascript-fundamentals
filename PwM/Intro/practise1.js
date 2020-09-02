const firstName = "William";
const lastName = "Johnson";

// val = firstName.charAt(length);
// console.log(length);
// console.log(val);

// val = firstName.charAt(firstName.length - 1);
// console.log(val);

// let val = new Date();

// const today = new Date();
// val = today;
// console.log(val);
// console.log(typeof val);

// const birthday = new Date();
// val = birthday;
// console.log(val);

//date changes when we write it directly.
// const birthday = new Date("9-10-1981");
// val = birthday;
// console.log(val); //Thu Sep 10 1981 00:00:00 GMT+0530 (India Standard Time)

//date and time both can be changed.

// const birthday = new Date("9-10-1981 11:25:00");
// val = birthday;
// console.log(val); //Thu Sep 10 1981 11:25:00 GMT+0530 (India Standard Time)

// let birthday = new Date("September 10 1981");
// birthday = new Date("9/10/1981");
// console.log(birthday); //Thu Sep 10 1981 00:00:00 GMT+0530 (India Standard Time)

//starts with [0] ==> []
// const today = new Date();

// val = today.getMonth();
// console.log(val); //6

// val = today.getDay();
// console.log(val); //4

// val = today.getHours();
// console.log(val); //21

// val = today.getMinutes();
// console.log(val); //26

// val = today.getSeconds();
// console.log(val); //45

// val = today.getMilliseconds();
// console.log(val); //695

// val = today.getTime();
// console.log(val); //1596124605695

// const birthday = new Date();
// birthday.setMonth(2);
// val = birthday;
// console.log("Birthday Set Month " + val);
//Birthday Set Month Tue Mar 31 2020 17: 44: 03 GMT + 0530(India Standard Time)

// const birthday = new Date();
// birthday.setDate(12);
// val = birthday;
// console.log("Birthday Set Date " + val);

// const birthday = new Date();
// birthday.setFullYear(1985);
// val = birthday;
// console.log("Birthday Set Full Year" + val);

// const name = "John";
// const age = 30;
// const job = "Web Developer";
// const city = "Miami";

// let html;

// // html =
// // "<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>";
// // document.body.innerHTML = html;

// html =
//   "<ul>" + "<li>Name: " + name + "</li>" + "<li>Age: " + age + "</li>" + "<ul>";

// document.body.innerHTML = html;

// html =

// const car = null;
// console.log(typeof car);

// const sym = Symbol();
// console.log(typeof sym); //symbol

// const date = new Date();
// console.log(date);
// console.log(typeof date);

// const name = "John Doe";
// console.log(typeof name);

// const hobbies = ["movies", "music"];
// console.log(typeof hobbies);

// const firstName = "Traversy";
// const age = 34;
// val = "Hello,my name is " + firstName + "and I am " + age;
// console.log(val);

// val1 = "That's awesome ,I can't wait"; //using backslash.

// console.log(val1);

// val = firstName.substring(0, 4);
// console.log(val); //Will

const birthday = new Date("9-10-1981");
val1 = birthday.getMonth();
val2 = birthday.getDate();
val3 = birthday.getDay();
val4 = birthday.getFullYear();

//Format stays the same.
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
