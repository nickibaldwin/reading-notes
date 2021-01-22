## Class 09: HTML Events and Event Handling

## Warm Up

Using two nested loops, write some JS that will print this to console.log
*
**
***
****
*****

```javascript

var starArray = ['*', '**', '***', '****', '*****']
//single array we do like so
for (var i = 0; i < starArray.legnth; i++){
  console.log(starArray[i]);
}



var star = '*';
for (var i = 1; i <= 5; i++){

  var printString = '';

  for(var j = 1, j <= 5, j++){
    if (j <= i){
      printString += star; ''
    }
    console.log(printString);
  }
}
```
## HTML Events

- When we do things in the browser
  - hovering over element
  - pressing a key on the keyboard
  - clicking
    -mouse down + mouseup
  - The browser is aware that this happens
  - As developers we have the power to call functions, toggle classes, run any JS when these occur
- Forms are the most prevelent element to get interactions from the user, and we need to learn how to handle all the events that occur around form inputs.
- This is a combo of HTML plus Javascript
  - We can tell our JS to do something when an event is fired from out HTML.
- HTML attributes example:
  onclick
  on is the attriue, click is the event

```html

<div id='box'>
</div>

```
```javascript
var boxElement = document.getElementById('box');

var inputElement = document.getElementById('input-one')

//new method on HTML elements: addEventListener
// the commands that you assign to the event, will run only when that event occurs.

boxElement.addEventListener('click', function(
  console.log('box was clicked');
});// 2 arguments to add to the addEventListener method: a)the event that I'm listening for, and a function to run when that event occurs.

boxElement.addEventListener('mouseover', function(){
  console.log('box was fovered');
})

//we get info passed into our callback, FROM OUR HTML
inputElement.addEventListener('input', function (event)){ // make sure the name i give to event is easy to remember, event is a JS object
  console.log(event.target); // should tell us about the input element itself
  console.log(event.target.value); // the thing we really want => the value of the input field 
});


```

JS RUNS TOP TO BOTTOM

JS
- grab content
- define listeners
- create constructor