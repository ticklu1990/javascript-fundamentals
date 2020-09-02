// Create element
const li  = document.createElement('li');//<li></li>

// Add class
li.className = 'collection-item';//<li class="collection-item"></li>

// Add id
 li.id = 'new-item';//<li class="collection-item" id="new-item"></li>

//Add attribute
 li.setAttribute('title', 'New Item');//<li class="collection-item" id="new-item" title="New Item"></li>

// Create text node and append:
 li.appendChild(document.createTextNode('Hello World'));//<li class="collection-item" id="new-item" title="New Item">Hello World</li>

//Still declared outside the ul of the Task List:


//Append li to ul:
//document.querySelector('ul.collection').appendChild(li);////<li class="collection-item" id="new-item" title="New Item">Hello World</li>

// List Item
// List Item
// List Item
// List Item
// List Item
// Hello World


//<li class="collection-item" id="new-item" title="New Item">Hello World</li>

//Not re-declaring li so we can use const a here:
//Create new link element:

//const link = document.createElement('a');
//  Add classes
 //link.className = 'delete-item secondary-content';
//  Add icon html
 //link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
 //li.appendChild(link);

 //document.querySelector('ul.collection').appendChild(li); 
//  //List Item
//  List Item
//  List Item
//  List Item
//  List Item
//  Hello World

//console.log(li); 

{/* <li class="collection-item" id="new-item" title="New Item">Hello World
<a class="delete-item secondary-content"><i class="fa fa-remove"></i></a>
</li> */}
