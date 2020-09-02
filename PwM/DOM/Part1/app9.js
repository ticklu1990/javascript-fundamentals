
// [EVENT BUBBLING]:

// Event bubbling is the bubbling of events through the DOM,So when an event happens on a particular element in the DOM,
// and actually will bubble up through its parent

//Case Scenerio:

// So,for instance if we were to put let's say a click event on this span right here,this card title.

// Now that event is actually going to bubble up to its parent.

// Its going to go to the card content,then its going to go up to main.

// Its going to go up to this div and so,on its going to bubble up.

//So,these are all the same,we need to use event delegation and before we want to get into that I want to give you a better example of how event
//bubbling works. 

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
//  });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

//So,with event bubbling what's going to happen is that when I click on this card title,which is task list right here,its going to bubbleup,
//and then all of the these will actually be called.

//Even though we are not going to click on any of these.There are going to be called.
//So,I am going to be right here.
//tasklist and click and look at that.

// card title
// card content
// card
// col

//All of those events all of those fired-off I dint click on any of those things but they fired off because of event-bubbling up the DOM.

//So,i think that gives you a good example visually of how that works.

//So,I am going to just comment all this out and now we are going to look at event delegation.



// EVENT DELGATION

//Is almost the opposite of event bubbling.

//Its where we put the listener on one of the parent elements and then we use logic inside of the event handler to target the element we actually want 

//That click or whatever type of event it is.

//So,it could be any parent for example what I am going to do give you an example is use these list items.

//So,we are going to put the event on the <ul> which is its parent.

//And then we are going to target the list item that we want.

//Now,this is actually needed in this situation because all of these lengths,these are actually what I want to target because they have the class
//of delete item and we want to target this link right here.

//We are putting the event listener on a parent and then going down.

//So,lets go ahead and you know before we get into that let me show you what happens without delegation,in this situation where we have all these 
//delete item classes.

//delItem calls an event listener called deleteItem,and lets do the console logged.

//const delItem = document.querySelector('.delete-item');

//delItem.addEventListener('click', deleteItem);

//document.body.addEventListener('click', deleteItem);

// function deleteItem(e){


//   console.log('delete item');
//   // if(e.target.parentElement.className === 'delete-item secondary-content'){
//       //console.log('delete item');
//   // }

//   // if(e.target.parentElement.classList.contains('delete-item')){
//   //   console.log('delete item');
//   //   e.target.parentElement.parentElement.remove();
//   // }
// }

//And what I am going to do is go over this link right here,which if we look at and if we inspect it.
//its has a class of delete-item.
//So lets go ahead and click on it.
//And in the console we get delete item.
//Now lets reload the page and lets click on the next one no [delete-item].

{/* <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a> */}

//None of these ones are working,only the first one is working.
//So,this is a situation where we need to use event delegation.I will write another situation.
//Another situation where you want to use event delegation if you dynamically insert something into the dom through javascript.
//For example if we insert a new list item that was not there when the page loaded there you also need,then you also need to use event delegation.

//So,instead of putting the event listener onto the delete-item class,we are going to choose a parent and could be anything.
//Actually we just put it on the body.

//document.body.addEventListener('click', deleteItem);

//If we click anywhere in the document body we get the delete-item.

//Obviously not we want to target these here.

//So,what we need to do is go into our function right here.
//and we need to find a target.
//

//put it on the body:
//document.body.addEventListener('click', deleteItem);

// function deleteItem(e){


//   console.log('delete item');
//   console.log(e.target);//give us the element that was clicked.
//   // if(e.target.parentElement.className === 'delete-item secondary-content'){
//       //console.log('delete item');
//   // }

//   // if(e.target.parentElement.classList.contains('delete-item')){
//   //   console.log('delete item');
//   //   e.target.parentElement.parentElement.remove();
//   // }
// }
// delete item
// <li class=​"collection-item">​…​</li>​
// delete item
// <h5 id=​"task-title" class=​"test">​Tasks​</h5>​
// delete item
// <input type=​"submit" value=​"Add Task" class=​"btn">​
// delete item
// <input type=​"text" name=​"task" id=​"task" value=​"Walk the dog">​
// delete item
// <span class=​"card-title">​Task List​</span>​
// delete item
// <li class=​"collection-item">​…​</li>​
// delete item
// <a class=​"clear-tasks btn black" href=​"#">​Clear Tasks​</a>​

//Now this is something else we have to address,if I click on this the x.
//Its actually gets the eye tag which is the a tag you can see its getting this instead of this.

{/* <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a> */}

//So,we can get the target wherever we click so we have to do the some conditional statement.                


document.body.addEventListener('click', deleteItem);

function deleteItem(e){

//Now there is a couple of ways to do it.
//It doesnt work,
  //   if(e.target.className === 'delete-item'){
  //     console.log('delete item');
  // }

  //to make this work:
  // if(e.target.className === 'fa fa-remove'){
  //        console.log('delete item');
  //    }
  // now working only on the clicking the x.
  
  //Now I dont want to deal with the icon,so I want to deal with the a tag around it,which is its parent.


  // Now if I try this out its not going to work because if we look at that a tag,it also has a class of secondary content.
  // So what this className does is it looks at the entire string thats inside the class actually attribute,so we have to match the 
  // that whole thing.
  // So, we also have to delete-item secondary-content. 

  //Now this works:
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // // e.target.parentElement.parentElement.remove();
  //  }
  //Now for some reason this isnt a great way to do it because if for some reason you add like lets say the last one here,
  //we add a class of test.
  // <a href="#" class="delete-item secondary-content test">
  //                 <i class="fa fa-remove"></i>
  //               </a>
  // Now the last one doesnt match because it doesnt macth that class String because we added a test.
  // Now a better way to do this in this situation would be to not check the classname but to use classlist.
  // and see if delete-item is in that list.


   // Now it works,even we want to go to the last list item.
   // Thats, the best way to target one of these links.
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');

   //Now lets add the functionality of making this delete the list item.
   //So,remember when we click this we are targetting the target parent element is the a tag.
   //Now if we look at our markup,here we want to delete the whole list which is the parent of the a tag.

   e.target.parentElement.parentElement.remove(); //p1 = a tag,p2 = list item.
   }
   
   //If I reload it is just going to come back because this is just in the UI,we are not persisting data,
   //to a database or anything like that but you can see we can remove them from the DOM now.
}

//The whole definition of event delegation is just putting the listener on a parent on what you are looking for 
//and putting a condition in here to try to find the target using this e.target and then doing your functionality.
