//what is Hoisting?.

//Hoisting is default javascript behaviour which moves the declaration of all the variables to the top of current scope.

//Let's understand this with an [Example].

// x = "Hello World";
// console.log(x);
// var x;

//We see Hello World on our console even though we declared x in the end.

//Well this is where hoisting comes into play.

//By default,Javascript moves the declaration,at the top while execution,and then it is initialized.This is "Hoisting".

//Does the opposite hold true?

//We know that declaration moves to top but what about initialization.

//Let's understand it with an example.


// console.log(x);
// var x = "Hello World";

//We see "undefined" on our console.But why?

//This happens because by default Javascript moves only the "Declaration" at the top and not the "Initialization".
