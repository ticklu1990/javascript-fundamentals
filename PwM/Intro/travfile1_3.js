//Function Declaration:

//important control structures:

//functions are blocks of code that can be defined and then called at a later time or in some cases defind at the same time.

//Different ways of writing functions in javascript:

//Function Declaration.
//Function Expression
//Immediately Invokable Functions Expressions.
//Property Methods:

//Function Declaration:

//just declaring the function => Nothing comes.
function greet()
{
    console.log('Hello');

}
//have to call the function:
greet();//Hello


function greet(){
 return 'Hello';
}

greet();//Nothing comes.

console.log(greet());//Hello

//can take parameters or aguments
function greet(firstName){
    return 'Hello '+firstName;
}

console.log(greet('John'));//Hello John

function greet(firstName,lastName){
    return 'Hello '+firstName+' '+lastName;
}

console.log(greet('John','Doe'));//Hello John Doe

console.log(greet());//Hello undefined undefined

function greet(firstName,lastName){

if(typeof firstName==='undefined'){
    firstName = 'John'
}
if(typeof lastName==='undefined'){
    lastName ='Doe'
}
return 'Hello '+firstName+' '+lastName;
}

console.log(greet('Steve','Smith'));//Hello Steve Smith

console.log(greet());//Hello John Doe

//FUNCTION EXPRESSION:

//Function Expression is basically putting a function as a varible assigning it

const square = function(x){
    return x * x ;
}

console.log(square(8));//64

function greet(firstName='John',lastName='Doe'){
    return 'Hello '+firstName+' '+lastName;
}

console.log(greet());//Hello John Doe

//In a lot of cases,or in most cases,it is using an expression or declaration,isnt going to make much of a difference,
//but there are times wehn expressions have some benefits to them when it comes to hoisting,when it comes to closures and 
//some more advanced stuff.


// Immediately Invoked Function Expressions:

//It is a function that you declare and run at the same time.

//To do this,we need an expression and we can make it an expression by putting it into parethesis.

//Anonymous Function is inside a parenthesis:

function(){
    console.log('IIFE RAM');
}

(function (){
    console.log('IIFE RAM');
});

//Anonymous Function is inside a parenthesis:

//Not Complete:

//When we run functions,they end with(),whether its a declaration or expression.
//So,we actually have to add some parenthesis right here.

(function (){
    console.log('IIFE RAM');
})();
//IIFE RAM


//can also take parameters:
(function (name){
    console.log('Hello '+name);
})('Brad'); //Hello Brad

//usefull for design patterns like Module Patterns.

//Bunch of IIFE's that have private property and private methods.

///Property:

const todo ={
    add:function(){
        console.log('Add todo');
    }
}

todo.add();//Add todo


const todo={
    add:function(){
        console.log('Add to do');
    },
    edit:function(id){
        console.log(`Edit todo ${id}`);
    }

}


todo.add();
todo.edit(22);

//Add to do
//Edit todo 22

//Function Expression:

todo.delete=function(){
    console.log('Delete Todo');
}

todo.delete();
//Delete Todo