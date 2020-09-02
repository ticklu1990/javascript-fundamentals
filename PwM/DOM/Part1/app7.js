const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click:
// clearBtn.addEventListener('click', runEvent);//EVENT TYPE: click
// Doubleclick:
 //  clearBtn.addEventListener('dblclick', runEvent);//EVENT TYPE: dblclick
// Mousedown:
 //  clearBtn.addEventListener('mousedown', runEvent);//EVENT TYPE: mousedown [Hold the mouse]
// Mouseup:
 // clearBtn.addEventListener('mouseup', runEvent);//EVENT TYPE: mouseup [Release the mouse]

//Mouseenter:
 //clearBtn.addEventListener('mouseenter', runEvent);//EVENT TYPE: mouseenter[ON reaching the button area]

 // Mouseenter:
 //card.addEventListener('mouseenter', runEvent);//EVENT TYPE: mouseenter[ON reaching the card area]

 // Mouseleave
 //card.addEventListener('mouseleave', runEvent);//EVENT TYPE: mouseleave[ON leaving the card area]



//Now in addition to mouse enter and mouse leave we have two other similar events which are [mouseover] and [mouseout],

//So,if I just hover over the card,you will see we get mouse-over and mouse-enter.

//If I leave we get mouse out and mouse leaves.

//So,what the difference between the two.

//Well,the difference is you will see that if I go in and then I go over something else another element,inside the card 
//such as Clear Tasks.

//You can see that mouse over and if I leave that we get mouse-out,mouse-over,mouse-out but mouse-enter and mouse-leave are not firing off.

//Those only fire-off when we go into the main element.However mouse-out and mouseover will only fire off when we go into another element,that's 
//inside of that Element.     


//So,whether its button or its this list right here,a list item,mouse-out,mouse-over its going to keep on firing.
//But mouse leave mouse enter is only going to fire on the initial parent element.  



// Mouseover
//card.addEventListener('mouseover', runEvent);
// Mouseout
//card.addEventListener('mouseout', runEvent);


// Mousemove:
//[Any movement inside of that element[card]],not fire off if it is outside of the card.
card.addEventListener('mousemove', runEvent);///EVENT TYPE: mousemove

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

 //  heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
   //Display the coordinates of the mouse.//MouseX: 272 MouseY: 18


  //You can use a RGB that takes 3 parameters,R,G and B,each one taking a value from 0 to 255 and then you get different variations 
  //depending upon the variations or a hexadecimal value.Use those parameters above. 
   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

