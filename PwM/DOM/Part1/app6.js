//No interaction with the web-page.
//We can listen for events on absolutely any element or anything in the DOM.
//We are going to choose to add an event Listener Add an event listener on the  clear task button.
//Add an event listener and an anonymous function.

//If we look at the HTML it has a class of clear-task.

//<a class="clear-tasks btn black" href="">Clear Tasks</a>

//Now we can add on to this and say addEventListener,now this takes 2 things,the actual event we are listening for which is a click and an 
//anonymous function callback function.

//This is whatever is going to happen when we click on this click event on this object.[.clear-task]



// document.querySelector('.clear-tasks').addEventListener('click', function(e){
// console.log('Hello World');

//    //e.preventDefault();
//  });

//You can see Hello World it flashes real quick down here in the console.
//The reason that is happening is some elements have default behaviours.
//For instance a form will submit to a page, a link will redirect to a particular page. 
//Whats happening is that its doesnt has any href,it just going to link to same page.

//<a class="clear-tasks btn black" href="">Clear Tasks</a>

//<a class="clear-tasks btn black" href="#">Clear Tasks</a>
//That's actually will not allow a browser to redirect.

//Hello World. stays.


//<a class="clear-tasks btn black" href="https://google.com">Clear Tasks</a>
//Hello World flickers in the console and redirects to www.google.com
//That's the default behaviour.

//To stop the default behaviour from happening we can pass in a parameter. 

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');
  
//      e.preventDefault();
//    });

   
 //Now if we click on the Clear Task button,its just log on the console.[Hello World].
 //If we have a # symbol there,we dont have to worry about doing that.  


 //In addition to just putting in an unamed function as a second parameter when I am going to do is you 
//can aslo write a named funtion.


 document.querySelector('.clear-tasks').addEventListener('click', onClick);


 //document.querySelector('.clear-tasks').addEventListener('mouseover',onClick);
 //If you mouse over the button you know see we get mouseover as the type in the console.


 function onClick(e){
//   console.log('Clicked');


//Clicked


   let val;

   val = e;

  //  MouseEvent {isTrusted: true, screenX: 142, screenY: 576, clientX: 157, clientY: 525, …}
  //  altKey: false
  //  bubbles: true
  //  button: 0
  //  buttons: 0
  //  cancelBubble: false
  //  cancelable: true
  //  clientX: 157 //Position where the event happened.
  //  clientY: 525 //Position where the event happened.
  //  composed: true
  //  ctrlKey: false
  //  currentTarget: null
  //  defaultPrevented: false
  //  detail: 1
  //  eventPhase: 0
  //  fromElement: null
  //  isTrusted: true
  //  layerX: 93
  //  layerY: 298
  //  metaKey: false
  //  movementX: 0
  //  movementY: 0
  //  offsetX: 70
  //  offsetY: 16
  //  pageX: 157
  //  pageY: 525
  //  path: (10) [a.clear-tasks.btn.black, div.card-action, div#main.card, div.col.s12, div.row, div.container, body, html, document, Window]
  //  relatedTarget: null
  //  returnValue: true
  //  screenX: 142
  //  screenY: 576
  //  shiftKey: false //shift was held when the event happened.
  //  sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
  //  srcElement: a.clear-tasks.btn.black
  //  target: a.clear-tasks.btn.black //represents the element that the event actually happened on this case.In the case is the a tag.
  //  timeStamp: 5989.000000001397
  //  toElement: a.clear-tasks.btn.black
  //  type: "click"
  //  view: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
  //  which: 1
  //  x: 157
  //  y: 525
  //  __proto__: MouseEvent




//  Event target element
    val = e.target;//<a class="clear-tasks btn black" href="#">Clear Tasks</a>
    val = e.target.id;//doesnt have one so its blank.
    val = e.target.className;//3 classes associated with it. clear-tasks btn black
    val = e.target.classList;
    
    // DOMTokenList(3) ["clear-tasks", "btn", "black", value: "clear-tasks btn black"]
    // 0: "clear-tasks"
    // 1: "btn"
    // 2: "black"
    // length: 3
    // value: "clear-tasks btn black"
    // __proto__: DOMTokenList



  //  e.target.innerText = 'Hello';//On Click changes from CLEAR TO HELLO.
      
  //All of the changing of the styles we learn we can do when we fire off an event.
  //which is really powerfull.   

//  Event type:

//document.querySelector('.clear-tasks').addEventListener('mouseover',onClick);
val = e.type;//mouseover as the type.

// Timestamp:
   // val = e.timeStamp;//4581.219999992754

//  Coords of the event relative to the window:
    // val = e.clientY;//530 is the no of pixels from the top on the y-axis,which is the vertical axis[ref to the button].
    // val = e.clientX;//132 is the no of pixels from the right on the x-axis,which is the horizontal axis[ref to the button].

//   Coords the event relative to the element:
   //  val = e.offsetY;//8 this is from the button.
   //  val = e.offsetX;//64 this is from the button.

console.log(val);
}

//There is a lot of stuff attached to the event object.
//The target is very important if we go to the event Delegation.

