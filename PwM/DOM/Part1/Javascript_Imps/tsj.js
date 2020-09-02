//Types of scope in Javascript:

//Javascript has three different types of scopes.

//Global Scope:

//Any variable declared outside of a function,belongs to the global scope.
//These are accessible from anywhere in the code.

// var x = 10;
// function foo() {
//   console.log("Inside the function", x); //Inside the function 10
// }

// foo();
// console.log("Outside the function", x); //Outside the function 10

//Here we declare "x" outside the function which means it is globally scoped.
//This is the reason it is consoled both inside and outside the function.

//Local Scope:

//It is created by functions.Variable(s) declared inside a function are accessible only inside the function.
//It is also called function scope.

//Lets see an example:

// function foo() {
//   var x = 10;
//   console.log("Inside the function", x);
// }
// foo(); //Inside the function 10
// console.log("Outside the function", x);

//Uncaught ReferenceError: x is not defined.

//Here,we declare "x" inside our function.This makes it accessible only inside the function.
//Thus we get an error "Reference Error:x is not defined" for the console outside the function.

//Block Scope:

//This is created by block structures such as "for loop".Thus variables are accessible only inside the block.
//This can be achieved only using [let] and [const] since these are block [scoped] declaration(s).

// function foo() {
//   for (let i = 0; i < 9; i++) {
//     let x = 10;
//     console.log("Inside for loop", x);
//   }
//   console.log("Outside the loop", x);
// }

// foo();

//Inside for loop 10.
//Uncaught ReferenceError: x is not defined.
//Here,we declare "x" inside the for loop so it will be accessible only inside the "for" block.
//So we get an error "Reference Error:x is not defined".
