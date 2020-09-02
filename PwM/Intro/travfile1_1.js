//This is a program to add the numbers from 1 to 10 together and print out the result.
//1+2+3+4+.......+10=55

// 00110001 00000000 00000000
// 00110001 00000001 00000001
// 00110011 00000001 00000010
// 00110001 00001011 00000010
// 00100010 00000010 00001000
// 00100011 00000001 00000000
// 01000001 00000001 00000001
// 00010001 00000010 00000000
// 01100000 00000000 00000000

//[memo0] [memo1] [memo2]

//[Each line of the program contains a single instruction.It could be written in English].

//1.Store the number 0 to memory location 0.
//2.Store the number 1 in memory location 1.
//3.Store the value of memory location 1 in memory location 2.
//4.Substract the number 11 from the value in memory location 2.
//5.If the value in memory location 2 is the number 0,continue with instruction 9.
//6.Add the value of memory location 1 to memory location 0.
//7.Add the number 1 to the value of memory location 1.
//8.Continue with instruction 3.
//9.Output the value of memory location 0.

//[Using names instead of numbers instead of numbers for the instructions and memory location helps].

//Set "total" to 0.
//Set "count" to 1.
//[loop]
//Set "compare" to "count".
//Substract 11 from "count"  [count-11].
//If "compare" is zero,continue at [end].
//Add "count" to "total".
//Add 1 to "count".
//Continue at [loop].
//[end]
//Output "total".

//[Here is the same program in Javascript].

// let total = 0,count = 1;
// while(count<=10){
//     total= total + count; //total+=count
//     count=count+1;//count+=1
// }
// console.log(total);

//https://eloquentjavascript.net/2nd_edition/code/

// alert(123);

// document

// document.querySelector('h1').style.color='red';

// console.log('Hello')//'Hello'

// console.log(true);//true

// console.log(123);//123

// console.log([1,2,3,4])//[1,2,3,4]

// let greeting = 'Hello';
// console.log(greeting);//'Hello'

// console.log({a:1,b:2})
// console.table({a:1,b:2});

// console.clear();
// console.warn();
// console.warn('This is a warning message');

// console.time('Hello');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.timeEnd('Hello');//Hello: 0.59814453125

// //var,let,const

// var name = 'William Smith';
// var name = "William Smith"
// console.log(name);

// var greeting;
// console.log(greeting);//undefined;

// greeting = 'Hello';
// console.log(greeting);//Hello

// //letters,numbers:

// var 1name= 'John';//Syntax Error

// var $name = 'John';//can be inside of a variable used in jquery.

// var _name = 'John';//used in javascript patterns.

// //multiword varibles:
// var firstName = 'John Doe';

// //let,const:

// let name = 'John Doe';
// console.log(name);//John Doe

// name = 'Steve Smith';
// console.log(name);//Steve Smith

// const name = 'Ticklu';
// console.log(name);//Ticklu

// name ='Sara';//cannot be reassigned

// const greeting;
// console.log(greeting);//Have to assign a value

// const person ={
//     name:'Smith',
//     age :40
// }

// //can be mutated inside.
// person.name='Sara';
// console.log(person);//{name:'Sara',age:40}

// //cannot be reassigned
// const person ={}

// const numbers = [1,2,3,4]

// console.log(numbers);

// numbers.push(6);//[1,2,3,4,6]

// //Reference Types:
// Arrays
// ObjectLiterals
// Functions
// Dates

// //Primitive Types vs typeof:
// //String:
// const name = 'John Doe';
// console.log(typeof name);//string

// //Number:
// const age = '25';//string
// const age =25;//number

// //Boolean:
// const hasKids = true;//boolean

// //Null:
// const car = null;//object

// //undefined:
// let test;
// console.log(typeof test);//undefined

// //Symbol:
// const sym = Symbol();
// console.log(typeof sym);//symbol

// //Reference Type Objects:

// const address = {
//     city:'Boston',
//     state:'MA'
// }
// console.log(typeof address);//object

// const today = new Date();
// console.log(today);
// console.log(typeof today);

// const hobbies =['Cycling','Skateboard','Yoga'];

// //Type Conversion:
// let val;

// val = 5;
// console.log(val)//5
// console.log(typeof val);//number
// console.log(val.length);//undefined only works for strings.

// //Number to String:
// val = String(5);
// console.log(val);5
// console.log(typeof val);string
// //only works on strings:
// console.log(val.length);//1

// val = String(4+4);
// console.log(val)//8
// console.log(typeof val);//number
// console.log(val.length);//1

// val = String(true);
// console.log(val)//true
// console.log(typeof val);//string
// console.log(val.length);//4

// val = String(new Date());
// console.log(val)//
// console.log(typeof val);//string
// console.log(val.length);//4

// val = String([1,2,3,4]);
// console.log(val);//1,2,3,4,5
// console.log(typeof val);////string
// console.log(val.length);//9

// //Date to Strings:

// val = String(new Date);
// console.log(val)//Sat Jun 20 2020 00:28:42 GMT+0530 (India Standard Time)
// console.log(typeof val);//string
// console.log(val.length);//55

// //to String Method:
// val = (5).toString;//error
// val = (5).toString();//5
// console.log(val)//5
// console.log(typeof val);//string
// console.log(val.length);//1

// val = (true).toString();
// console.log(val);//true
// console.log(typeof val);//string
// console.log(val.length);//4

// val = '5';
// console.log(val)//5
// //used for only for numbers:
// console.log(val.toFixed);//has to be a function.
// console.log(val.toFixed())//TypeError: val.toFixed is not a function
// console.log(typeof val);//cannot be evaluated.
// console.log(val.length);//cannot be evaluated.

// //String to Number:

// val = Number('5');
// console.log(val)//5
// console.log(val.toFixed())//5
// console.log(typeof val);//number.
// console.log(val.length);//undefined only works on Strings.

// val = Number(5);
// console.log(val)//5
// console.log(val.toFixed(2))//5.00
// console.log(typeof val);//number.

// val = Number(true);
// console.log(val)//1
// console.log(val.toFixed())//1
// console.log(typeof val);//number.

// val = Number(false);
// console.log(val)//0
// console.log(val.toFixed())//0
// console.log(typeof val);//number.

// val = Number(null);
// console.log(val)//0
// console.log(val.toFixed(2));//0.0
// console.log(typeof val);//number

// val = Number('hello');
// console.log(val)//NaN
// console.log(val.toFixed())//NaN [Not a Number]
// console.log(typeof val);//number.

// val = Number([1,2,3])
// console.log(val)//NaN
// console.log(val.toFixed())//NaN [Not a Number]
// console.log(typeof val);//number.

// //gives only the integer part.

// val = parseInt('100');
// console.log(val)//100
// console.log(val.toFixed())//100
// console.log(typeof val);//number.

// val = parseInt('100.30');
// console.log(val)//100
// console.log(val.toFixed())//100
// console.log(typeof val);//number.

// val = parseInt('100.30');
// console.log(val)//
// console.log(val.toFixed(2))//100.00
// console.log(typeof val);//number.

// val = parseInt('100.30');
// console.log(val)//
// console.log(val.toFixed(2))//100.00
// console.log(typeof val);//number.

// val = parseInt('100.00');
// console.log(val)//100
// console.log(val.toFixed())//100
// console.log(typeof val);//number.

// val = parseFloat('100.30');
// console.log(val)//100.3 By default it is going to give you just one decimal.
// console.log(val.toFixed())//100
// console.log(typeof val);//number.

// val = parseFloat('100.30');
// console.log(val)//100.3 By default it is going to give you just one decimal.
// console.log(val.toFixed(2))//100.30
// console.log(typeof val);//number.

// //Type Coresion:
// //Javascript does it for us.

// const val1 = 5;
// const val2 = 6;
// const sum = val1 + val2;
// console.log(sum);//11
// console.log(typeof sum);

// const val1 = '5';
// const val2 = 6;
// const sum = val1 + val2;//type coersion
// console.log(sum);//56
// console.log(typeof sum);//string

// const val1 = '5';
// const val2 = 6;
// const sum = Number(val1+val2);
// console.log(sum);//56
// console.log(typeof sum);//number

// //Number and the Math Object:

// const num1 = 100;
// const num2 = 50;

// let val;

// val = num1+num2;
// console.log(val);//Added Result.

// val = num1-num2;
// console.log(val);//Substrated Result.

// val = num1*num2;
// console.log(val);//Multiplication Result.

// val = num1/num2;
// console.log(val);//Gives the Quotient.

// val = num1%num2;
// console.log(val);//Gives the Remainder.

// //Math Object:

// val = Math.PI;
// console.log(val);

// val = Math.E;
// console.log(val);

// val = Math.round(2.4);
// console.log(val);

// val = Math.ceil(2.4);
// console.log(val);

// val = Math.floor(2.8);
// console.log(val);

// val = Math.sqrt(64);
// console.log(val);

// val = Math.abs(-3);
// console.log(val);

// val = Math.pow(8,2);
// console.log(val);

// val = Math.min(2,33,4,1,55,6,3);
// console.log(val);

// val = Math.max(2,33,4,1,55,6,3);
// console.log(val);

// val = Math.random();
// console.log(val);

// val = Math.random()*20;
// console.log(val);

// val = Math.random()*20 +1;
// console.log(val);

// val =Math.floor(Math.random()*20+1);
// console.log(val);

// //Strings:Methods and Conacatenation:

// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36;

// let val;

// val = firstName+lastName;
// console.log(val);//WilliamJohnson

// val = firstName + ' ' +lastName;
// console.log(val);//William Johnson

// //Append:

// val = 'Bradr';
// val+=' Traversy';//[space] provioded in the next string.

// console.log(val);

// val = 'Hello,my name is '+firstName+' and I am '+age;
// console.log(val);//Hello,my name is William and I am 36.

// //Escaping:

// val = ' That's awesome ,I can't wait';

// val = "That's awesome ,I can't wait";//using double quotes.

// console.log(val);//That's awesome ,I can't wait

// val ='That\'s awesome ,I can\'t wait';//using backslash.

// console.log(val);//That's awesome ,I can't wait

// //length:
// val = firstName.length;
// console.log(val);//7

// //concat:

// val = firstName.concat(' ',lastName);
// console.log(val);//William Johnson

// //change case:
// val = firstName.toUpperCase();
// console.log(val);//WILLIAM

// val = firstName.toLowerCase();
// console.log(val);//william

// val = firstName[0];
// console.log(val);//W

// val = firstName[2];
// console.log(val);//l

// // W i l l i a m
// // 0 1 2 3 4 5 6
// // 6 5 4 3 2 1 0

// //indexOf():
// const firstName = 'William';
// val = firstName.indexOf('2');//For values when not available.
// console.log(val);//-1

// //const firstName = 'William';
// val = firstName.indexOf('l');
// console.log(val);//2

// //counts from the last.
// val = firstName.lastIndexOf('l')
// console.log(val);//3

// //CharAt():

// // W i l l i a m
// // 0 1 2 3 4 5 6
// // 6 5 4 3 2 1 0

// val  = firstName.charAt('2');
// console.log(val);//l

//get last character:[Since its [0] based]
val = firstName.charAt(firstName.length - 1);
console.log(val); //m => 6

//substring:can be used in arrays:

// W i l l i a m
// 0 1 2 3 4 5 6
// 6 5 4 3 2 1 0

val = firstName.substring(0, 4);
console.log(val); //Will

//slice() can be used with arrays,similar to substring.

// W i l l i a m
// 0 1 2 3 4 5 6
// 6 5 4 3 2 1 0

val = firstName.slice(0, 4);
console.log(val); //Will

// takes the last 3 and starts from the back.
val = firstName.slice(-3);
console.log(val); //iam

//split()://can split the string into an array.
const str = "Hello there my name is Brad";
val = str.split("");
console.log(val);

[
  "H",
  "e",
  "l",
  "l",
  "o",
  " ",
  "t",
  "h",
  "e",
  "r",
  "e",
  " ",
  "m",
  "y",
  " ",
  "n",
  "a",
  "m",
  "e",
  " ",
  "i",
  "s",
  " ",
  "B",
  "r",
  "a",
  "d",
];

val = str.split(" ");
console.log(val); //["Hello", "there", "my", "name", "is", "Brad"]

const tags = "webdesign,webdevelopment,programming";
val = tags.split(",");
console.log(val); // ["webdesign", "webdevelopment", "programming"]

//replace:

str = "Hello,there my name is Brad";
val = str.replace("Brad", "Jack");

console.log(val); //Hello,there my name is Jack.

//includes:
str = "Hello,there my name is Brad";
val = str.includes("Hello");
console.log(val); //true
console.log(str); //Hello,there my name is Brad

//[Dates and Times]:

let val;
const today = new Date();
console.log(today); //Sat Jun 20 2020 05:15:03 GMT+0530 (India Standard Time)
val = today;
console.log(typeof val); //Object

//change to String:
val = today.toString();
console.log(val); //Sat Jun 20 2020 05:15:03 GMT+0530 (India Standard Time)
console.log(typeof val); //string.

const birthday = new Date("9-10-1981");
val = birthday;
//Format stays the same.
console.log(val); //Thu Sep 10 1981 00:00:00 GMT+0530 (India Standard Time)

let birthday = new Date("9-10-1981 11:25:00");
val = birthday;
console.log(val); //Thu Sep 10 1981 11:25:00 GMT+0530 (India Standard Time)

let birthday = new Date("September 10 1981");
val = birthday;
//console.log(val);//Thu Sep 10 1981 00:00:00 GMT+0530 (India Standard Time)

birthday = new Date("9/10/1981");
console.log(birthday); //Thu Sep 10 1981 00:00:00 GMT+0530 (India Standard Time)

let val;
const today = new Date();
val = today.getMonth();
console.log(val); //5 since its 0 based.

val = today.getDate();
console.log(val); //21

val = today.getDay();
console.log(val); //0 since its 0 based

val = today.getFullYear();
console.log(val); //2020

val = today.getHours();
console.log(val); //8

val = today.getMinutes();
console.log(val); //53

val = today.getSeconds();
console.log(val); //48

val = today.getMilliseconds();
console.log(val); //161

val = today.getTime();
console.log(val); //1592709879461 used for Time Stamp.

let birthday = new Date("9-10-1981 11:25:00");
birthday.setDate(2);
console.log(birthday); //Wed Sep 02 1981 11:25:00 GMT+0530 (India Standard Time)

let birthday = new Date("9-10-1981 11:25:00");
birthday.setDate(2);
val = birthday;
console.log(val); //Wed Sep 02 1981 11:25:00 GMT+0530 (India Standard Time)

let birthday = new Date("9-10-1981 11:25:00");
birthday.setDate(2);
val = birthday;
console.log(val); //Uncaught SyntaxError: Identifier 'birthday' has already been declared

let val;
//let val;works even if not declared.
//const val;Uncaught SyntaxError: Missing initializer in const declaration

const birthday = new Date("9-10-1981 11:25:00");
birthday.setDate(2);
val = birthday;
console.log(val); //Wed Sep 02 1981 11:25:00 GMT+0530 (India Standard Time)

birthday.setHours(3);
val = birthday;
console.log(val); //Wed Sep 02 1981 03:25:00 GMT+0530 (India Standard Time)

birthday.setMinutes(30);
val = birthday;
console.log(val); //Wed Sep 02 1981 03:30:00 GMT+0530 (India Standard Time)

birthday.setSeconds(30);
val = birthday;
console.log(val); //Wed Sep 02 1981 03:30:30 GMT+0530 (India Standard Time)

//Template strings which are part of ES6 but are compatible in all the modern browser.

//No need to compile your ES6.Unless you are looking to be compatible with older versions of
//IE which personally I dont care about.

//IE no longer used.

const name = "John";
const age = 30;
const job = "Web Developer";
const city = "Miami";

//Inserting [HTML] from [Javascript].

// #Fetching something from AJAX and you want to put in an unordered list or a table with Dynamic
// Data

// #You are going to be do that through Javascript.

// #You are usually create some HTML string,with the HTML,with the Dynamic Data,that you want to
// insert.

// #Without template strings (ES6) way:

let html;

html =
  "<ul><li>Name :" +
  name +
  "</li><li>Age :" +
  age +
  "</li><li>Job :" +
  job +
  "</li></ul>";

document.body.innerHTML = html;

//Output:

//* Name : John
//* Age :30
//* Job :Web Developer

html =
  "<ul>" +
  "<li>Name :" +
  name +
  "</li>" +
  "<li>Age :" +
  age +
  "</li>" +
  "<li>Job :" +
  job +
  "</li>" +
  "</ul>";

document.body.innerHTML = html;

//Output:

//* Name : John
//* Age :30
//* Job :Web Developer

// # With template Literals using back ticks:

html = `<ul><li>Name :${name}</li>
            <li>Age :${age}</li>
            <li>Job :${job}</li>
        </ul> 
        `;

document.body.innerHTML = html;

//Output:

//* Name : John
//* Age :30
//* Job :Web Developer

function hello() {
  return "hello";
}

let html = `
           <ul>
           <li>Name:${name}</li>
           <li>Age:${age}</li>
           <li>Job:${job}</li>
           <li>${2 + 2}</li>
           <li>${hello()}</li>
           <li>${age > 30 ? "Over 30" : "Under 30"}</li>
          </ul> 
           `;
document.body.innerHTML = html;

//Array and Array Methods:

const numbers = [43, 56, 33, 23, 44, 36, 5];
console.log(numbers); //[43, 56, 33, 23, 44, 36, 5]

const numbers = new Array(22, 45, 33, 76, 54);
console.log(numbers2); // [22, 45, 33, 76, 54]

const fruit = ["Apple", "Banana", "Orange", "Pear"];
console.log(fruit); // ["Apple", "Banana", "Orange", "Pear"]

const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];
console.log(mixed);

// Get Array Length:
let val;
val = numbers.length;
console.log(val); //7

// Check if is Array:
val = Array.isArray(numbers);
console.log(val); ///true

// Get value:
// [43,56,33,23,44,36,5]
//  0   1  2  3  4  5  6
val = numbers[3];
console.log(val); //23

val = numbers[0];
console.log(val); //43

//Insert into Array:
numbers[2] = 100;
console.log(numbers); //[43, 56, 100, 23, 44, 36, 5]

//Find index of value:
val = numbers.indexOf(36);
console.log(val); //5

//Mutating Arrays:
//Add to the end of the Array:
numbers.push(250);
console.log(numbers); //[43, 56, 100, 23, 44, 36, 5, 250]

//Add to the front of the Array:
numbers.unshift(250);
console.log(numbers); //[250, 43, 56, 100, 23, 44, 36, 5, 250]

//Take off from end:
numbers.pop();
console.log(numbers); //[250,43, 56, 100, 23, 44, 36, 5]

//Take off from the beginning:
numbers.shift();
console.log(numbers); //[43, 56, 100, 23, 44, 36, 5]

//Splice values:(start,end)
//[43, 56, 100, 23, 44, 36, 5]

numbers.splice(1, 1);
console.log(numbers); //[43, 100, 23, 44, 36, 5]

//Splice values:(start,end)
numbers.splice(1, 3);
console.log(numbers); //[43,36,5]

//reverse the order of array:
numbers.reverse();
console.log(numbers); //[5,36,43]

//concatenate array:
//[22,45,33,76,54]

val = numbers.concat(numbers2);
console.log(val); //[5, 36, 43, 22, 45, 33, 76, 54]

const numbers = [43, 56, 100, 23, 44, 36, 5, 22, 45, 33, 76, 54];
val = numbers.sort();
console.log(val); //[100, 22, 23, 33, 36, 43, 44, 45, 5, 54, 56, 76]

val = numbers.sort(function (x, y) {
  return x - y;
});
console.log(val); //[5, 22, 23, 33, 36, 43, 44, 45, 54, 56, 76, 100]

//reverse:
val = numbers.sort(function (y, x) {
  return y - x;
});

//find:gives the first number:
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);
console.log(numbers); //[43, 56, 100, 23, 44, 36, 5, 22, 45, 33, 76, 54]
console.log(val); //43

function over50(num) {
  return num > 50;
}
val = numbers.find(over50);
console.log(numbers); //[43, 56, 100, 23, 44, 36, 5, 22, 45, 33, 76, 54]
console.log(val); //56
