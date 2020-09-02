let val;

val = document;

//access indexes or items in the collection like you would with an array.

//val = document.all;
//val = document.all[2];

//do properties as well.

//val = document.all.length; //43 elements
//val = document.head;//gives the head
//val = document.body;//gives the body
//val = document.doctype;//<!DOCTYPE html>
//val = document.domain;//127.0.0.1 =>loop back address.
//val = document.URL;//http://127.0.0.1:550 /index.html will give the whole thing including the protocol.
//val = document.characterSet;//UTF-8
//val = document.contentType;//text/html

//can select stuff without using selectors,*** though not recommended but possible
//get all the forms of the page.

//accesses the forms with index here it is zero,//get an HTML Collection.

//val = document.forms;//HTMLCollection [form#task-form, task-form: form#task-form]

//val = document.forms[0]; //

//val = document.forms[1];//gives undefined since there is no form of index 1.

//get stuff from the form.

{
  /* <form id="task-form">
                <div class="input-field col s12">
                  <input type="text" name="task" id="task" value="Walk the dog">
                  <label for="task">New Task</label>
                </div>
            </div>
            <input type="submit" value="Add Task" class="btn">
</form> */
}

// val = document.forms[0].id;//task-form
// val = document.forms[0].method;//Outputs get can be post too.

{
  /* <form action="index.php" id="task-form">
                <div class="input-field col s12">
                  <input type="text" name="task" id="task" value="Walk the dog">
                  <label for="task">New Task</label>
                </div>
            </div>
            <input type="submit" value="Add Task" class="btn">
</form> */
}

// val = document.forms[0].action;//http://127.0.0.1:5500/PwM/DOM/Part1/index.php

//val = document.links;

//OUTPUT:

//  HTMLCollection(6) [a.delete-item.secondary-content, a.delete-item.secondary-content, a.delete-item.secondary-content, a.delete-item.secondary-content, a.delete-item.secondary-content, a.clear-tasks.btn.black]
// 0: a.delete-item.secondary-content
// 1: a.delete-item.secondary-content
// 2: a.delete-item.secondary-content
// 3: a.delete-item.secondary-content
// 4: a.delete-item.secondary-content
// 5: a.clear-tasks.btn.black
// length: 6
// __proto__: HTMLCollection

//  <ul class="collection">
//               <li class="collection-item">
//                 List Item
//                 <a href="#" class="delete-item secondary-content">
//                   <i class="fa fa-remove"></i>
//                 </a>
//               </li>
//               <li class="collection-item">
//                 List Item
//                 <a href="#" class="delete-item secondary-content">
//                   <i class="fa fa-remove"></i>
//                 </a>
//               </li>
//               <li class="collection-item">
//                 List Item
//                 <a href="#" class="delete-item secondary-content">
//                   <i class="fa fa-remove"></i>
//                 </a>
//               </li>
//               <li class="collection-item">
//                 List Item
//                 <a href="#" class="delete-item secondary-content">
//                   <i class="fa fa-remove"></i>
//                 </a>
//               </li>
//               <li class="collection-item">
//                 List Item
//                 <a href="#" class="delete-item secondary-content">
//                   <i class="fa fa-remove"></i>
//                 </a>
//               </li>
//             </ul>
//     <a class="clear-tasks btn black" href="">Clear Tasks</a>

//val = document.links[0];

//OUTPUT:
// //<a href="#" class="delete-item secondary-content">
// <i class="fa fa-remove"></i>
// </a>

//val = document.links[0].id;//doesn't has a [id].

{
  /* <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
</li>  */
}

//val = document.links[0].className; //delete-item secondary-content

//val = document.links[0].classList;

//["delete-item", "secondary-content", value: "delete-item secondary-content"]//DOMTokenList

//val = document.links[0].classList[0];//delete-item

//val = document.images;//HTMLCollection [] Empty Collection

//val = document.scripts;//HTMLCollection(3) [script, script, script]

//attributes of script tag:
//val = document.scripts[2].getAttribute('src');//app.js

//let scripts = document.scripts;

//convert into an Array:
//let scriptsArr = Array.from(scripts);

//forEach is only for an Array:
// scriptsArr.forEach(function (script) {
//   console.log(script.getAttribute("src"));
// });

console.log(val);

//OUTPUT:

//https://code.jquery.com/jquery-3.2.1.js
//https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js
//app.js
