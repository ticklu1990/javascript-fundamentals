
//Look at some of the selectors that are used to select more than one element and they return either
//an HTML Collection or a node list which are both similar to arrays except there is 
//certain things we cannot do with a regular array but they can also be converted into 
//arrays very easily.


//document.getElementsByClassName

//Each one of these list item(s) have a class of collection item.

//const items = document.getElementsByClassName('collection-item');
//console.log(items);

// HTMLCollection(5) [li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]
// 0: li.collection-item
// 1: li.collection-item
// 2: li.collection-item
// 3: li.collection-item
// 4: li.collection-item
// length: 5
// __proto__: HTMLCollection
//gives all the properties innerClass,etc.


//Case 2: Global declared:
{/* <div class="card-action">
            <div class="collection-item">TEST</div>
            <h5 id="task-title" class="test">Tasks</h5>
            <ul class="collection">
              <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li> 
              <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li> 
              <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li>
              <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li>
              <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li>
            </ul>
            <a class="clear-tasks btn black" href="">Clear Tasks</a>
          </div> */}



//  //HTMLCollection(6) [div.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]
// 0: div.collection-item
// 1: li.collection-item
// 2: li.collection-item
// 3: li.collection-item
// 4: li.collection-item
// 5: li.collection-item
// length: 6
// __proto__: HTMLCollection  


//select from the ul:
//const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
//console.log(listItems);

//div not included:

// HTMLCollection(5) [li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]
// 0: li.collection-item
// 1: li.collection-item
// 2: li.collection-item
// 3: li.collection-item
// 4: li.collection-itemlength:
// 5__proto__: HTMLCollection


//need a specific one we can treat it like an array.

//console.log(items[0]);// first list item <li class="collection-item">…</li>

//items[0].style.color = 'red';//change the color of li first.

//items[3].textContent = 'Hello';//change the text to Hello in the list.

//** We dont have to use this get Element by class Name on a [global scope].
//REDO STUDY

//select from the ul:
//const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
//console.log(listItems);

//HTMLCollection(5) [li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]


//document.getElementsByTagName: selects multiple tags of similar type:

//let lis = document.getElementsByTagName('li');
//console.log(lis);

//HTMLCollection(5) 
//[li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]

//console.log(lis[0]); 
//lis[0].style.color = 'red';//first list item turns red.
//lis[3].textContent = 'Hello';//3rd text turn Hello.

//lis.reverse //cannot reverse since its not an array.
 
//Convert HTML Collection into array:
//lis = Array.from(lis);

//console.log(lis.reverse());//[li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]

// lis.forEach(function(li){
//     console.log(li.className);
// });

//(5) [li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]


// lis.forEach(function(li, index){
//    console.log(li.className);
//    li.textContent = `${index}: Hello`;
//  });


// 0: Hello
// 1: Hello
// 2: Hello
// 3: Hello
// 4: Hello


// let lis = document.getElementsByTagName('li');

// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//    console.log(li.className);
//    li.textContent = `${index}: Hello`;
//  });

// console.log(lis);

// 4: Hello
// 3: Hello
// 2: Hello
// 1: Hello
// 0: Hello


//document.querySelectorAll:

//which is preety much similar like the other two except it returns what's called a node list.
//and there are some differences a node list actually counts not just elements but things like text nodes.
//It also allows us to do some other array methods without having to convert it. 

// const items = document.querySelectorAll('ul.collection');
// console.log(items);//NodeList [ul.collection]

// const items = document.querySelectorAll('li.collection-item');
// console.log(items);//NodeList [ul.collection]


// NodeList(5) [li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]
// 0: li.collection-item
// 1: li.collection-item
// 2: li.collection-item
// 3: li.collection-item
// 4: li.collection-item
// length: 5
// __proto__: NodeList


const items = document.querySelectorAll('ul.collection li.collection-item');
console.log(items);//NodeList [ul.collection]

// NodeList(5) [li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]
// 0: li.collection-item
// 1: li.collection-item
// 2: li.collection-item
// 3: li.collection-item
// 4: li.collection-item


//Can be used directly without converting it to array.

// items.forEach(function(item, index){
//     item.textContent = `${index}: Hello`;
// });


// 0: Hello
// 1: Hello
// 2: Hello
// 3: Hello
// 4: Hello


// const liOdd = document.querySelectorAll('li:nth-child(odd)');

// liOdd.forEach(function(li){
//   li.style.background = '#ccc';
// });

//makes all the odd li node grey:


// const liEven = document.querySelectorAll('li:nth-child(even)');

// for(let i = 0; i < liEven.length; i++){
//   liEven[i].style.background = '#f4f4f4';
// }

// console.log(items);
//For loop also works with the querySelectorAll selector:
//We can even access the brackets with the index and the length method.



