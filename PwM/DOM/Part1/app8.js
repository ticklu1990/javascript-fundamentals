const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
 taskInput.value = '';

// remove the [action=index.php]: 
 //  form.addEventListener('submit', runEvent);//EVENT TYPE: submit flickers and tries to go to the next page.
  // default behaviour of a behaviour. 
  // default behaviour can be prevented using e.preventDefault();

  // function runEvent(e){
  //   console.log(`EVENT TYPE: ${e.type}`);
  
  //   console.log(taskInput.value);
  
  //   e.preventDefault();
  // }  

  // EVENT TYPE: submit
  // Walk the dog

//Value hard coded:
{/* <div class="input-field col s12">
                  <input type="text" name="task" id="task" value="Walk the dog">
                  <label for="task">New Task</label>
                </div> */}

//After clearing the input.
  // EVENT TYPE: submit
  // Do the work.


// [Keydown]:
// Now just like with mousedown,it fires off when your key actually goes down. 
// If I press the key it fires off and it just keeps firiing off as I type. 

//taskInput.addEventListener('keydown', runEvent);

// function runEvent(e){
//     //console.log(`EVENT TYPE: ${e.type}`);//EVENT TYPE: keydown
//     //Now you may want to catch the input from each key down.
//     //So what we can do here is we can console.log and we can say e.target.
//     //Remember target is the element ,the event happens on which is in this case is the input.
//     //Now the value is whatever we are typing in.[e.target.value].
//     //Its going to log everything we type.  

//     console.log(e.target.value);
//     //e.preventDefault(); //doesn't allow to type since default value is debarred.
//     heading.innerText = e.target.value;
//     //Output produced in console is [one line after].
//  }  


// Keydown: 
// keyup is going to do the same thing except its when you release the key,if I hit down,no event
// and there it is keyup. 
  
//taskInput.addEventListener('keyup', runEvent);


//  function runEvent(e){

//         console.log(`EVENT TYPE: ${e.type}`);//EVENT TYPE: keyup
//         console.log(e.target.value); 

//   }  

  // klj 
  // EVENT TYPE:keyup
  // kl
  // EVENT TYPE: keyup
  // k
  // EVENT TYPE: keyup


// Keypress:generalized keyevent:

  // taskInput.addEventListener('keypress', runEvent);
  //  function runEvent(e){

  //       console.log(`EVENT TYPE: ${e.type}`);//EVENT TYPE: keypress
  //       //console.log(e.target.value); 

  //  } 



// Focus: When you click inside of an input and you set it to the focus mode.
//So,if I just going to click in here and we get event type focus.
//  taskInput.addEventListener('focus', runEvent);

//  function runEvent(e){

//         console.log(`EVENT TYPE: ${e.type}`);//EVENT TYPE: keyfocus.
//         //console.log(e.target.value); 

//    } 


//Blur:opposite of focus:when we click out we get the blur event.

//  taskInput.addEventListener('blur', runEvent);
//   function runEvent(e){

//         console.log(`EVENT TYPE: ${e.type}`);//EVENT TYPE: blur
//         //console.log(e.target.value); 

//    }

// Cut: if right click and cut and also through keyboard[Ctrl+X]:

//  taskInput.addEventListener('cut', runEvent);

//   function runEvent(e){

//         console.log(`EVENT TYPE: ${e.type}`);//EVENT TYPE: clur
//         //console.log(e.target.value); 

//    }

// Paste:if right click and paste and also through keyboard[Ctrl+V]:

  //taskInput.addEventListener('paste', runEvent);

  // function runEvent(e){

  //       console.log(`EVENT TYPE: ${e.type}`);//EVENT TYPE: clur
  //       //console.log(e.target.value); 

  //  }


// Input:fire off on any kind of input event: for all the mentioned cut,paste

//  taskInput.addEventListener('input', runEvent);


//   function runEvent(e){

//         console.log(`EVENT TYPE: ${e.type}`);//EVENT TYPE: input
//         //console.log(e.target.value); 

//    }


// Change: event is used on a select list so we dont have 
// With materialize we need a little bit of jquery at the bottom to be able to see the select list because of it how it works.
// So,commenting materialize:

{

  /* <select>
<option value="1"></option>
<option value="2"></option>
<option value="3"></option>
</select> */

}

//select.addEventListener('change', runEvent);

// function runEvent(e){
//   console.log(`EVENT TYPE: ${e.type}`);

//   console.log(e.target.value);

//   // heading.innerText = e.target.value;

//   // Get input value
//   // console.log(taskInput.value);

//   e.preventDefault();
// }

// EVENT TYPE: change
// 3

// EVENT TYPE: change
// 2

// EVENT TYPE: change
// 1


