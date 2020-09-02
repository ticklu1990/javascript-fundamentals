//[Debouncing] and [Throttling] in [Javascript]:

//In order to limit how many times a [function] should [execute] we use "[Debouncing]" and "[Throttling]".

//There are [times] when we give the control in [user's] hand as to how and when a [function] should execute such as
//[scrolling] and [searchbar].This can hamper the [performance] of our [app].

//That is when these [techniques] come in [handy].

//[Debouncing]:

//In this,no [matter] how many times an [event] is fired,the [function] executes only after the [specified-time],when the [user]
//[stops] firing the [event].

//Consider an example,you call an API as the user types in [searchbar].
//Now if you send the API call as soon as the user starts typing
//you will end up making an API call [multiple-number-of-times] within a short period of time.
//So, to overcome we use debouncing.

//Let's understand this with an [example].

function makeAPICall() {
  //call the API:
  console.log("API called");
}

function debounce() {
  var timerID;
  if (timerID) {
    clearTimeout(timerID);
  }

  timerID = setTimeout(makeAPICall, 1000);
}

debounce();

//So,whenever the [user] fires an [event] we will call our [debounce-function] and if before the setTimeout executes
//the user types in something,the previous timeout will be cleared.

//Thus, our API will be called only after 1000ms when user stops typing.
//That's debouncing.

//[Throttling]:

//In this,no matter how many [times] the [user] fires the [event],the attached [function] will be executed only
//once in a given [time-interval].

//Youtube : [Akshay Saini]

//very helpfull for developing web apps:
//developing a customer facing web-app,you need to be very performant.
//Your website shouldnt freeze anytime while user is doing anything on the browser.
