//DOM SELECTORS:pull things from the DOM can do different things with elements or nodes.

//jquery was used for a long time for DOM manipulation.

//just add bloats to your application.

//quick simple plugins or scripts that you need to do.

//Vanila Javascript:

//Single Element: grab element by its ID or Class.
//stores on thing,grab the first one

//Multiple Element selectors will grab all of the elements of the class.
//return an HTML Collection or node list depending upon which selector your use.

//Two single element selectors:

//
//document.getElementById()//needs one argument.

//Get things from the element:

//console.log(document.getElementById('task-title'));//<h5 id="task-title">Tasks</h5>

//console.log(document.getElementById('task-title').id);//task-title

//console.log(document.getElementById('task-title').className);//test

//document.getElementById('task-title').style.background = '#333';//h5 black background.

//document.getElementById('task-title').style.color = '#fff';//text turns white.

//document.getElementById('task-title').style.padding = '5px';//adds padding

//click a button to show or disappear something when you hover over something:
// document.getElementById('task-title').style.display = 'none';

// Change content

//document.getElementById('task-title').textContent = 'Task List';//adds text Task changed to Task List.

//same functionality as textContent:
//document.getElementById('task-title').innerText = 'My Tasks';

//inserts HTML:
//fetch something from the fecth API or AJAX or something and then you want to insert a chunk of HTML.

//puts a style of color red surrounded in a span.
//document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';

//put it into variable:

//const taskTitle = document.getElementById('task-title');

//using that variable:

//taskTitle.id;

//taskTitle.className;

//taskTitle.style.background = '#333';

//taskTitle.style.color = '#fff';

//taskTitle.style.padding = '5px';

//taskTitle.style.display = 'none';

//taskTitle.textContent = 'Task List';

//taskTitle.innerText = 'My Tasks';

//taskTitle.innerHTML = '<span style="color:red">Task List</span>';

//document.querySelector():newer and much more powerfull.

//single element selector:

//select things not by Id but by anything.

//console.log(document.querySelector('#task-title'));//<h5 id="task-title" class="test">Tasks</h5>

//console.log(document.querySelector('.card-title'));//<span class="card-title">Task List</span>

//console.log(document.querySelector('h5'));

//get more than one h5 on the page,it's going to get the first one.
//<h5 id="task-title" class="test">Tasks</h5>

//document.querySelector('li').style.color = 'red'; //selects first list as red

//document.querySelector('ul li').style.color = 'blue'; //selects first list as blue

//document.querySelector('li:last-child').style.color = 'red';//selects last child.

//document.querySelector('li:nth-child(3)').style.color = 'yellow';//selects 3rd child

//document.querySelector('li:nth-child(4)').textContent = 'Hello World';//text changed from List Item to Hello World.

//document.querySelector('li:nth-child(odd)').style.background = '#ccc';//first odd child to grey background.

//document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';//first even child to grey background
