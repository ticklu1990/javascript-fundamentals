// REPLACE ELEMENT:


//h5 with h2:

// Create Element:
//const newHeading = document.createElement('h2');
//console.log(newHeading);//<h2></h2>

// Add id
//newHeading.id = 'task-title';
//console.log(newHeading);//<h2 id="task-title"></h2>

// New text node
//newHeading.appendChild(document.createTextNode('Task List'));
//<h2 id="task-title">Task List</h2>

// Get the old heading [Since its an id so can be written directly]
// const oldHeading = document.getElementById('task-title');

 // Parent [Since its a class,it should be preceded by a dot]
// const cardAction = document.querySelector('.card-action');

//  Replace:
// cardAction.replaceChild(newHeading, oldHeading);

//<h2 id="task-title">Task List</h2>
//  Task List
//  List Item
//  List Item
//  List Item
//  List Item
//  List Item


//  REMOVE ELEMENT:
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item :
lis[0].remove();//remove the first list item.

// List Item
// List Item
// List Item
// List Item


// Remove child element:
list.removeChild(lis[3]);//removes the last element.

// List Item
// List Item
// List Item


// CLASSES & ATTR:
const firstLi = document.querySelector('li:first-child');
//console.log(firstLi);
// //<li class="collection-item">
// List Item
// <a href="#" class="delete-item secondary-content">
//   <i class="fa fa-remove"></i>
// </a>
// </li>

const link = firstLi.children[0];
//console.log(link);
// <a href="#" class="delete-item secondary-content">
// <i class="fa fa-remove"></i>
// </a>



// let val;

// Classes:
 //val = link.className;// A String of the classes delete-item secondary-content
 //val = link.classList;


 //Gives a DOMTokeList(2) but not an array.
 //DOMTokenList(2) 
 //["delete-item", "secondary-content", value: "delete-item secondary-content"]


 //val = link.classList[0]; //delete-item

 link.classList.add('test');
//val = link;
//console.log(val);
// <a href="#" class="delete-item secondary-content test">
// <i class="fa fa-remove"></i>
// </a>


link.classList.remove('test');
val = link;
{/* <a href="#" class="delete-item secondary-content test">
// <i class="fa fa-remove"></i>
// </a> */}


// Attributes:
 val = link.getAttribute('href');//#

//takes you to www.google.com for the link:
 val = link.setAttribute('href', 'http://google.com');

 val = link.hasAttribute('href');//true

 val = link.hasAttribute('title');//false

 link.setAttribute('title', 'Google');
 val = link;

//  <a href="http://google.com" class="delete-item secondary-content" title="Google">
//                   <i class="fa fa-remove"></i>
//                 </a>

val = link.hasAttribute('title');//true
val = link.removeAttribute('title');//
val = link;
// //<a href="http://google.com" class="delete-item secondary-content">
// <i class="fa fa-remove"></i>
// </a>

console.log(val);
