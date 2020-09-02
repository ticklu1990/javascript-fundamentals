// Scheduling in Javascript:

// Sometimes we may decide to execute a function after a certain delay.That's called "scheduling a call".

// setTimeout:

// This method allows to execute a function only once after the specified.

// setTimeout():

// This executes the function passed to it only once after the delay time has elapsed.

// Let's understand this with an example.

// function greet() {
//   console.log("Hello there!");
// }

// setTimeout(greet, 1000);

// var timerId = setTimeout(greet, 1000);
// console.log(timerId);
// clearTimeout(timerId);

//Here we execute the function "greet" with setTimeout.It will console the output after a delay of 1000ms.
//The setTimeout function returns a timerId which can be used to clear the timeout using the clearTimeout() method using
//the syntax mentioned in comments.

//setInterval():

//This executes the function passed to it after the time delay and then keeps on continuing with equal interval of time delay.

//Lets understand it with an example

// function greet() {
//   console.log("Hello there!");
// }

// setInterval(greet, 1000);

//Here,we execute the function "greet" with setInterval.It will console after a delay of 1000ms and will continue to do the same after
//every 1000ms.

//This also returns a timerId similar to setTimeout and can be cleared using clearInterval() in the same manner.
