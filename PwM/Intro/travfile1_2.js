//ObjectLiterals:

const person ={
    firstName: 'Steve',
}

//to access this property.

let val;
val=person;//mutating val
console.log(val);//{firstName: "Steve"}

//specific value:
// val = person.firstName;
// console.log(val);


val = person[firstName];//Uncaught ReferenceError: firstName is not defined
val = person['firstName'];
console.log(val);//Steve

const person ={
    firstName : 'Steve',
    lastName :'Smith',
    age:30,
    email:'steve@aol.com',
    hobbies:['music','hobbies'],
    address:{
        city:'Maimi',
        state:'FL'
    },
    getBirthYear:function(){
        return 1987;

    }
}

let val;
val = person.firstName;
console.log(val);//Steve

val = person['lastName'];
console.log(val);//Smith

val = person.age;
console.log(val);//Smith

val = person.hobbies;
console.log(val);//["music", "hobbies"]

val = person.hobbies[1];
console.log(val);//hobbies

val = person.address;
console.log(val);//{city: "Maimi", state: "FL"}

val = person.address.city;
console.log(val);//Maimi

val = person.address['state'];
console.log(val);//FL

val = person.getBirthYear();
console.log(val);//1987

const person ={
    firstName : 'Steve',
    lastName :'Smith',
    age:30,
    email:'steve@aol.com',
    hobbies:['music','hobbies'],
    address:{
        city:'Maimi',
        state:'FL'
    },
    getBirthYear:function(){
        return 1987 - age;

    }
}


val = person.getBirthYear();
console.log(val);//Uncaught ReferenceError: age is not defined

//this keyword should be used:

const person ={
    firstName : 'Steve',
    lastName :'Smith',
    age:30,
    email:'steve@aol.com',
    hobbies:['music','hobbies'],
    address:{
        city:'Maimi',
        state:'FL'
    },
    getBirthYear:function(){
        return 1987 - this.age;

    }
}

val = person.getBirthYear();
console.log(val);

//[1957]






const people = [
    {name:'John',age:30},
    {name:'Mike',age:34},
    {name:'Joe',age:31}
];

for(let i=0;i<people.length;i++){
    console.log(people[i].name);
}

Output:

John
Mike
Joe

const id = 100;

//EQUAL TO: 

if(id==100){
    console.log('CORRECT');
}
else{
    console.log('INCORRECT');
}

//RESULT:CORRECT

//NOT EQUAL TO 

if(id!=100){
    console.log('CORRECT');
}
else{
    console.log('INCORRECT');
}

RESULT:INCORRECT

const id = 101;

//EQUAL TO: 
if(id==100){
    console.log('CORRECT');
}
else{
    console.log('INCORRECT');
}

//RESULT:INCORRECT

//NOT EQUAL TO:

if(id!=100){
    console.log('CORRECT');
}
else{
    console.log('INCORRECT');
}

//RESULT:CORRECT

const id = '100';

//EQUAL TO: 
if(id==100){
    console.log('CORRECT');
}
else{
    console.log('INCORRECT');
}

//RESULT:INCORRECT

//NOT EQUAL TO 
if(id!=100){
    console.log('CORRECT');
}
else{
    console.log('INCORRECT');
}

RESULT:CORRECT

//this way is testing the value and not testing the type.

const id = '100';

if(id===100){
    console.log('CORRECT');
}
else{
    console.log('INCORRECT');
}

//RESULT:INCORRECT

//NOT EQUAL TO 
if(id!==100){
    console.log('CORRECT');
}
else{
    console.log('INCORRECT');
}

//RESULT:INCORRECT

const id = 100;

if(id===100){
    console.log('CORRECT');
}
else{
    console.log('INCORRECT');
}

//RESULT:CORRECT

if(id!==100){
    console.log('CORRECT');
}
else{
    console.log('INCORRECT');
}

//RESULT:INCORRECT

const id = 100;

if(id){
    console.log(`The ID is ${id}`);
}else{
    console.log(`NO ID`);
}

//The ID is 100

//If ID is not defined:

//correct way to test:

if(typeof id!=='undefined'){
    console.log(`the ID is ${id}`);
}else{
    console.log(`NO ID`);
}

//NO ID


//If ID is defined:
const id = 100;

if(typeof id!=='undefined'){
    console.log(`The id is ${id}`)
}else{
    console.log('NO ID');
}

//The id is 100

//GREATER OR LESS THAN:

const id = 100;

if(id>200){
    console.log('CORRECT');
}else{
    console.log('INCORRECT');
}

//INCORRECT:

if(id<=100){
    console.log('CORRECT');
}else{
    console.log('INCORRECT');
}

//CORRECT:

//IF ELSE:

const color ='yellow';

//syntax error:

if(color==='red'){
    console.log('color is red');
}
elseif(color==='blue')
    console.log('color is blue');
else 
console.log('color is not red or blue');


//correct syntax:
if(color==='red'){
    console.log('color is red');
}
else if(color==='blue')
    console.log('color is blue');
else 
console.log('color is not red or blue');

//color is not red or blue

//LOGICAL OPERATORS: AND or &&

//Test more than 1 thing:

const name='Steve';
const age =30;

if(age>0 && age<12){
    console.log(`${name} is a child`);
}else if(age>=13 && age<=19){
    console.log(`${name} is a teenager`);
}
else{
  console.log(`${name} is an adult`);
}

//Steve is an adult


//OR or ||

if(age<16 || age>65){
    console.log(`${name} cannot run in race`);
}else{
    console.log(`${name} is registered for the race.`);
}

//Steve is registered for the race.

//Shorthand Operators:

const id = 100;

console.log(id===100?'CORRECT':'INCORRECT');

//CORRECT

//Switches:

const color = 'red';
switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}


let day;

switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thrusday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;  
    default:
        console.log('Enter correct day');
        break;               
}

console.log(`Today is ${day}`);

//Today is Tuesday.

//GENERAL LOOPS:
//FOR LOOPS:

for(let i=0;i<10;i++){
    console.log(i);
}

//OUTPUT:
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

for(let i=0;i<10;i++){
    console.log('Number :'+i);
}

// Number :0
// Number :1
// Number :2
// Number :3
// Number :4
// Number :5
// Number :6
// Number :7
// Number :8
// Number :9

for(let i=0;i<10;i++){
    if(i===2){
        console.log('2 is my favorite number');
    }
       console.log('Number :'+i);
    }

    // Number :0
    // Number :1
    // 2 is my favorite number
    // Number :2
    // Number :3
    // Number :4
    // Number :5
    // Number :6
    // Number :7
    // Number :8
    // Number :9

    for(let i=0;i<10;i++){
        if(i===2){
            console.log('2 is my favorite number');
            continue;//goes for the next iteration in the [for] loop.
        }
           console.log('Number :'+i);
        }

        // Number :0
        // Number :1
        // 2 is my favorite number
        // Number :3
        // Number :4
        // Number :5
        // Number :6
        // Number :7
        // Number :8
        // Number :9

        for(let i=0;i<10;i++){
            if(i===2){
                console.log('2 is my favorite number');
                continue;//goes for the next iteration in the [for] loop.
            }

            if(i===5){
               console.log('Number :'+i);
               break;
            }

            console.log('Number '+i);
        }

        // Number 0
        // Number 1
        // 2 is my favorite number
        // Number 3
        // Number 4
        // Number :5

//WHILE LOOP:

let i=0;
while(i<10){
console.log('Number :'+i);
i++;
}

// Number :0
// Number :1
// Number :2
// Number :3
// Number :4
// Number :5
// Number :6
// Number :7
// Number :8
// Number :9


//Do while: RUN ATLEAST ONCE:

let i=0;
do{
   console.log('Number: '+i);
   i++; 
}
while(i<10);

// Number: 0
// Number: 1
// Number: 2
// Number: 3
// Number: 4
// Number: 5
// Number: 6
// Number: 7
// Number: 8
// Number: 9

let i=100;
 do{
   console.log('Number: '+i);
    i++; 
 }
 while(i<10);

 Number: 100

//Arrays have specific methods for looping through:

const cars = ['Fords','Chavy','Honda','Toyota'];

for(let i =0;i<cars.length;i++){
    console.log(i);
}

// 0
// 1
// 2
// 3

for(let i =0;i<cars.length;i++){
    console.log(cars[i]);
}

// Fords
// Chavy
// Honda
// Toyota


//WHILE LOOP:

const cars = ['Ford','Chavy','Honda','Toyota'];

// takes a callback function
// function can take parameters

cars.forEach(function(car){
    console.log(car);
})

// Ford
// Chavy
// Honda
// Toyota

//MAP: used to return a different array:

const users = [{id:1,name:'John'},
               {id:2,name:'Sara'}, 
               {id:3,name:'Jio'} ]

//Take these arrays:

const ids = users.map(function(user){
    return user.id;
});
console.log(ids);

[1, 2, 3]

const cars = ['Ford','Chavy','Honda','Toyota'];

cars.forEach(function(car,index){
    console.log(`${index}:${car}`);
});

// 0:Ford
// 1:Chavy
// 2:Honda
// 3:Toyota

cars.forEach(function(car,index,array){
    console.log(array);
});

//  ["Ford", "Chavy", "Honda", "Toyota"]
//  ["Ford", "Chavy", "Honda", "Toyota"]
//  ["Ford", "Chavy", "Honda", "Toyota"]
//  ["Ford", "Chavy", "Honda", "Toyota"]

//For Loop:

const user ={
    firstName : 'John',
    lastName:'Doe',
    age:40
}

for(let x in user){
    console.log(x);
}

//x gives the key:

firstName
lastName
age


//Inside of an Object,we have the key and the value:

const user ={
    firstName : 'John',
    lastName:'Doe',
    age:40
}

for(let x in user){
    console.log(`${x}:${user[x]}`);
}

// firstName:John
// lastName:Doe
// age:40

//Scopes: Global Scope:


//# var changes since it has only function and block scope.


var a = 1;
let b = 2;
const c = 3;

console.log(`Global Scope:`,a,b,c);
//Global Scope: 1 2 3

function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`Function Scope:`,a,b,c);
}

test();

// Global Scope: 1 2 3
// Function Scope: 4 5 6

// Global Scope:

var a = 1;
let b = 2;
const c = 3;

if(true){
    //Block Scope:
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`If scope :`,a,b,c);

}

console.log(`Global:`,a,b,c);

// If scope : 4 5 6
// Global: 4 2 3

//Hence let and const are used so that it works like other programming languages.


//Global Scope:

var a = 1;
let b = 2;
const c = 3;

console.log(`Global:`,a,b,c);

for(let a=0;a<10;a++){
    console.log(`Loop :${a}`);
}

// Global: 1 2 3
// Loop :0
// Loop :1
// Loop :2
// Loop :3
// Loop :4
// Loop :5
// Loop :6
// Loop :7
// Loop :8
// Loop :9

// let and const have a block level scope.


//Global Scope:

var a = 1;
let b = 2;
const c = 3;

console.log(`Global:`,a,b,c);

for(var a=0;a<10;a++){
    console.log(`Loop :${a}`);
}

console.log(`Global:`,a,b,c);


// Global: 1 2 3
// Loop :0
// Loop :1
// Loop :2
// Loop :3
// Loop :4
// Loop :5
// Loop :6
// Loop :7
// Loop :8
// Loop :9
// Global: 10 2 3//changes the value of global a,which is not good.

















