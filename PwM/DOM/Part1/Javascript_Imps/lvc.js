//These are frequently used to declare variables in Javascript.

//But how are they different from each other?

//var :

//It is a [global] or [functional] scoped declaration.

//let:

//It is [blocked] scoped.In other words,it can be only be accessed within the [block] it was declared.

//const:

//It is also [block scoped] but it is [immutable].

//var vs let:

//Both of these can be updated within their scope but only [var] can be [re-declared] and abides by [hoisting].

//Let's understand it with A [simple-example].

// function foo() {
//   var a = 10;
//   for (let i = 0; i < 10; i++) {
//     var a = 20;
//     console.log(i);
//   }
//   console.log(a);
//   console.log(i);
// }

// foo();

// 0;
// 1;
// 2;
// 3;
// 4;
// 5;
// 6;
// 7;
// 8;
// 9;

// 20;

//Uncaught ReferenceError: i is not defined.
//In the above example,"a" is accessible throughout the function and we can re-declare it inside the for loop
//but "i" is only available inside the for loop and can only be updated within it.
//Because of this,if we uncomment the last line,we will get "Reference Error:i is not defined".

//var vs const:

//const is similar to let but one major difference is that it cannot be updated once declared.

//Let's understand it with a simple example.

function foo() {
  var a = 10;
  if (a) {
    const i = 1;
    console.log(i);
    //i=2;
  }
  console.log(a);
  //console.log(i);
}

//In this example,we declare "i" inside the if block so it will only be accessible within this block.
//If we uncomment the first comment,we will get "TypeError:Assignment to constant variable".
//This is because we cannot reassign a constant variable.
//For last comment,we get 'ReferenceError:i is not defined.'
