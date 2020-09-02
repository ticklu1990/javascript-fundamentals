//LOCAL STORAGE AND PERSIST THEM TO LOCAL STORAGE:

//use the localStorage API
//which is exactly part of the browser
//If I were to look at the window Object.

// localStorage: Storage
// length: 0
// __proto__: Storage
// clear: ƒ clear()
// getItem: ƒ getItem()
// key: ƒ key()
// length: (...)
// removeItem: ƒ removeItem()
// setItem: ƒ setItem()
// constructor: ƒ Storage()
// Symbol(Symbol.toStringTag): "Storage"
// get length: ƒ length()
// __proto__: Object

//Local storage API with a bunch of methods such as getItem,setItem and removeItem,its very simple to understand really.
//You can set key-value pairs and its important to know that what you said is a value has to be a string.
//Now you can still save arrays and objects and you have to turn them into a string.
//Using a method called JSON.stringify and pull it out use it to parse it back using a method called JSON.parse

//How to set local storage item.
//And the difference between [local-storage] and [session-storage] is that
//Local storage will stay until you manually clear it out in your settings or through your program and session storage
//will leave,once your browser is closed,once the session ends.
//But other than that the API is exactly the same.

//We want to store a key of 'name' and value of 'John':

//Use the >>menu  => application =>local storage =>localhost:
//localStorage.setItem('name','John');
//After closing the browser name John stays.
//Can be removed by using the browser [x] button.

//remove from local storage:
//localStorage.removeItem('name');

//Also have session storage:
//Use the >>menu  => application =>local storage =>localhost:
//sessionStorage.setItem('name','beth');

//After closing the browser name beth is gone.
//That cleared out because we ended the session.
//Can be removed by using the browser x button.

//Methods are exactly the same for both of the same.

//get from storage:
//const name = localStorage.getItem('name');
//console.log(name);//John

//const age = localStorage.getItem('age');

//localStorage.clear();

//console.log(name,age);//null null

// document.querySelector('form').addEventListener('submit',
// function(e){
//        console.log(123);
//        e.preventDefault(e);//pressing add gives 123
// })

//  document.querySelector('form').addEventListener('submit',
//  function(e){
//    const task = document.getElementById('task').value;
//    console.log(task);//Enters value and the value is displayed in the console.
//    e.preventDefault(e);
//  })

//To set that to local storage

//  document.querySelector('form').addEventListener('submit',
//  function(e){
//    const task = document.getElementById('task').value;

{
  /* <div class="input-field col s12">
                  <input type="text" name="task" id="task" value="Walk the dog">
                  <label for="task">New Task</label>
                </div> */
}

//    //See reference:localStorage.setItem('name','John');
//    localStorage.setItem('tasks',task);
//    alert('Task Saved');
//    console.log(task);//Enters value,task saved in localStorage as key value pairs.[tasks,walk the DOG]
//    e.preventDefault(e);
//  })

//Now the problem with this is if I were to add another task.
//Thats gets replaced.//tasks Keep Moving.
//We can only store one task at a time.
//Create an array as a task and store that as a string.

document.querySelector("form").addEventListener("submit", function (e) {
  const task = document.getElementById("task").value;

  //Initialize a task variable.
  //ANd we want to first pull out of local storage.
  //Whatever is in there.
  //Or check to see if something is in there.
  //If there is pull it out and add to it.
  //If not just set tasks to an empty array and add to it.

  if (localStorage.getItem("tasks") === null) {
    //set task to an empty array.
    tasks = [];
  }
  //if there is something in there,then we want to set that local variable tasks equal to whatever is in there.
  //
  else {
    // tasks = localStorage.getItem('tasks');//This is going to be a string.
    //Parse it into a JSON or parse it into an Object,that we can use.
    //Well in this its not going to be an Object  because its just storing one value an array of strings.
    //But usually you will store an array of JSON Objects.
    //But you still want to use the JSON.parse
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  //Now what we do is push the task thats coming through the form on to this variable.
  //So,we are going to go down here.
  tasks.push(task);
  //Now thats not going to change anything to local storage,yet we need to know to
  //reset the localStorage tasks with this added value. [tasks.push(task);]
  //So we are going to do the setItem here,we are going to set tasks variable which now includes the new one we added.

  //localStorage.setItem('tasks',tasks);

  //But remember like I said,it has to store strings so we need to wrap this task in JSON.stringify(tasks).
  localStorage.setItem("tasks", JSON.stringify(tasks));
  //And that should set it inside of an array,which is formatted as a string.
  //Lets go ahead and save this and see what it does.

  alert("Task Saved");
  e.preventDefault(e);
});

//Now we can see that this is an array.Its actually a string but its formatted as an array with the value "Walk the Dog".
//Now if we want to add something else here,
//["Walk the dog", "There is this curtain"] added to tasks.

//Now if we were try to pull this show up lets go outside of this whole event,

//task is defined but we cannot define forEach on it.

//const tasks = localStorage.getItem(tasks);

//So,what we can do this we can parse this by saying

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach(function (task) {
  console.log(task);
});

//Now we get the correct error which is foreach is not a function because this is an array function,this is an array they are calling
//for each on we pulled it out of local storage with which only store strings

//  Walk the dog
//  There is this curtain
