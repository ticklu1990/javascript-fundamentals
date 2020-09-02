//Traversing the DOM.

//going to deal with parents in children of specific nodes or whatever we select.


let val;

//const list = document.querySelector('ul.collection');
//console.log(list);

//OUTPUT:
{/* <ul class="collection">
    <li class="collection-item"></li>
    <li class="collection-item"></li>
    <li class="collection-item"></li>
    <li class="collection-item"></li>
    <li class="collection-item"></li>
 </ul>   
 */}

 //selects the first one:
//const listItem = document.querySelector('li.collection-item');
//console.log(listItem);

{/* <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li> */}

//same as above : [select the first one]
//const listItem = document.querySelector('li.collection-item:first-child');
//console.log(listItem)

{/* <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li> */}


            


const list = document.querySelector('ul.collection');

//getting the child nodes of ul.

// val = listItem;
// val = list;


//Properties attached to these items or these nodes:
//They have to get with getting children and parents of these nodes.  


// Get child nodes:

 //val = list.childNodes;

//gives a node list of all of the child nodes.Not only allies but we also have these text-nodes .
//These text-nodes are actually line breaks.

{/* <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
</li> [LINE BREAK COUNTS AS TEXT NODE]
<li class="collection-item"></li>
 */}

//OUTPUT:
// NodeList(11) [text, li.collection-item, text, li.collection-item, text, li.collection-item, text, li.collection-item, text, li.collection-item, text]
// 0: text
// 1: li.collection-item
// 2: text
// 3: li.collection-item
// 4: text
// 5: li.collection-item
// 6: text
// 7: li.collection-item
// 8: text
// 9: li.collection-item
// 10: text
// length: 11

{/* <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li> <li class="collection-item"> [NO LINE BREAK]
                List Item
<a href="#" class="delete-item secondary-content"></a>
 */}

//OUTPUT:
//  NodeList(10) [text, li.collection-item, li.collection-item, text, li.collection-item, text, li.collection-item, text, li.collection-item, text]
//  0: text
//  1: li.collection-item
//  2: li.collection-item
//  3: text
//  4: li.collection-item
//  5: text
//  6: li.collection-item
//  7: text
//  8: li.collection-item
//  9: text
//  length: 10
//  __proto__: NodeList


//const list = document.querySelector('ul.collection');

// val = list.childNodes[0];
//gives the text node.

// #text
// assignedSlot: null
// baseURI: "http://127.0.0.1:5500/PwM/DOM/Part1/index.html"
// childNodes: NodeList []
// data: "↵             
// "firstChild: null
// isConnected: true
// lastChild: null
// length: 15
// nextElementSibling: li.collection-item
// nextSibling: li.collection-item
// nodeName: "#text"
// nodeType: 3
// nodeValue: "↵             "
// ownerDocument: document
// parentElement: ul.collection
// parentNode: ul.collection
// previousElementSibling: null
// previousSibling: nulltext
// Content: "↵              "
// wholeText: "↵              "
// __proto__: Text

//val = list.childNodes[0].nodeName;//#text

//val = list.childNodes[0].nodeType;//#text

//Numbers pertain what type of nodes these are:
//  1 - Element
//  2 - Attribute (deprecated) 
//  3 - Text node
//  8 - Comment
//  9 - Document itself
//  10 - Doctype


//If all of the line breaks are removed there will be no text Nodes.
//In most cases. you are not going to want to care about the text nodes,you are going to want the elements,the child elements.
//For that we have a property called children.

//Instead of using child nodes.lets do children.

// Get children element nodes:

//val = list.children;

//It is an HTML Collection and not a Node List:
//child returns a NODE Collection and children returns a HTML Collection.
//No Text just the elements.

//HTMLCollection(5) 
// [li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]
// 0: li.collection-item
// 1: li.collection-item
// 2: li.collection-item
// 3: li.collection-item
// 4: li.collection-itemlength:
// 5__proto__: HTMLCollection


 //val = list.children[1];

//  <li class="collection-item">
//                 List Item
//                 <a href="#" class="delete-item secondary-content">
//                   <i class="fa fa-remove"></i>
//                 </a>
//  </li>


//list.children[1].textContent = 'Hello';
 
//  List Item
//  Hello
//  List Item
//  List Item
//  List Item


// Children of children:

//gives the collection of the links.
//val = list.children[3].children;
//gives the 4th one down.

// HTMLCollection 
// [a.delete-item.secondary-content]
// 0: a.delete-item.secondary-content
// length: 1__proto__: HTMLCollection


//val = list.children[3].children[0];
{
  /* <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a> */}


//Adds a test-link id:
//list.children[3].children[0].id = 'test-link';
//val = list.children[3].children[0];

{/* <a href="#" class="delete-item secondary-content" id="test-link">
                  <i class="fa fa-remove"></i>
                </a> */}


// [First child]
//val = list.firstChild;
//We get [text].
//Just like childNodes,first child is going to gives us the [first node].  
//whether its an element or not.

// #text
// assignedSlot: null
// baseURI: "http://127.0.0.1:5500/PwM/DOM/Part1/index.html"
// childNodes: NodeList []
// data: "↵              "
// firstChild: null
// isConnected: true
// lastChild: null
// length: 15
// nextElementSibling: li.collection-item
// nextSibling: li.collection-item
// nodeName: "#text"
// nodeType: 3nodeValue: "↵              
// "ownerDocument: document
// parentElement: ul.collection
// parentNode: ul.collection
// previousElementSibling: null
// previousSibling: nulltext
// Content: "↵              "
// wholeText: "↵              "
// __proto__: Text


//val = list.firstElementChild;

{/* <li class="collection-item">
List Item
<a href="#" class="delete-item secondary-content">
  <i class="fa fa-remove"></i>
</a>
</li> */}


// Last child:
// val = list.lastChild;

// #text
// assignedSlot: null
// baseURI: "http://127.0.0.1:5500/PwM/DOM/Part1/index.html"
// childNodes: NodeList []
// data: "↵            "
// firstChild: null
// isConnected: true
// lastChild: null
// length: 13
// nextElementSibling: null
// nextSibling: null
// nodeName: "#text"
// nodeType: 3
// nodeValue: "↵            "
// ownerDocument: document
// parentElement: ul.collection
// parentNode: ul.collection
// previousElementSibling: li.collection-item
// previousSibling: li.collection-item
// textContent: "↵            "
// wholeText: "↵            "
// __proto__: Text

//val = list.lastElementChild;

{/* <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
</li> */}


//Count child elements:
//val = list.childElementCount;//5

// List Item
// List Item
// List Item
// List Item
// List Item

// Get parent node:

const listItem = document.querySelector('li.collection-item');

//val = listItem.parentNode;
//<ul class="collection"></ul>

//val = listItem.parentElement;
//<ul class="collection"></ul>

//val = listItem.parentElement.parentElement;
//<div class="card-action"></div>


//Get next sibling:

//val = listItem.nextSibling;
//gives a text node
// #text
// assignedSlot: null
// baseURI: "http://127.0.0.1:5500/PwM/DOM/Part1/index.html"
// childNodes: NodeList []
// data: "↵              "
// firstChild: null
// isConnected: true
// lastChild: null
// length: 15
// nextElementSibling: li.collection-item
// nextSibling: li.collection-item
// nodeName: "#text"
// nodeType: 3
// nodeValue: "↵              "
// ownerDocument: document
// parentElement: ul.collection
// parentNode: ul.collection
// previousElementSibling: li.collection-item
// previousSibling: li.collection-item
// textContent: "↵              "
// wholeText: "↵              "
// __proto__: Text


//val = listItem.nextElementSibling;

{/* <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li> */}


//val = listItem.nextElementSibling.nextElementSibling;

{/* <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li> */}


//Get previous Sibling:              

// val = listItem.previousSibling;//#text
// val = listItem.previousElementSibling;//null

//Mixture of both:
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(val);


