# Class 4 Lecture Notes

## Warm Up

```javascript
//creates array
var numbers = [10, 3, 2, 5, 6, 12, 15]
//creates array
var answers = []

// numbers.length 
var numbers = [10, 3, 2, 5, 6, 12, 15]
for (var i = 0; i < numbers.length; i++ ){
  if (numbers[i] < 6 || numbers[i] > 12){
    console.log(numbers[i]);
  }
}
```

## CSS Layout
- Css position properties, these elements dictate the flow of a number of elements
  - Position property
    -Absolute: Positions the element outside of the normal flow of elements around it, and anchors the elemnt to it's parent element.
    - Fixed: I want to remove the lement from the normal flow, and position it relative to the view port. (like when the title stays at the top of a page whilst scrolling the page)
    - Relative: Keeps the element within the normal flow, but allows positioning with left and right, also allowing the element to be an anchor point positioned elements.
    - Static : they follow a consistent flow that is preserved with the elements around it, but will not be usable as absolute element anchor points.
    - Sticky: combination of fixed and absolute.
  - Display property
    - 


## JS Functions

- A variable that include (not just data type) but blocks of Javascript
  - function declaration: creating a function, defining function logic.
  - arugments: the data you provide a function when you call/execute the function
  -paramenters: the data that the function defines, which come from its execution
    -think of this as a variable that only that specific function can use.
  - scope: the logic within the curly braces of a function
    - function parameters are only usable within the function scope
  -global vs local scope
    - functions are able to access global scope (variables that are defined outside the curlies);
    - function only have access to local scope that is within their own curlies
  - Function hoisting: functions that are declared with the function keyword, are able to be used on the lines above where they are defined
  - Return values: a value that precedes a value in a function

```javascript

// var array = [1, 2, 3];

// array.push(4);

//with functions we can store these operations to run when we choose
//following 6 lines are a function declaration
// function pushArray () { 

//   var array = [1, 2, 3];

//   array.push(4); 

// }

pushArray(); //calling or executing the function.

pushArray(4); //4 is an argument, We need to make sure our function is defined with the proper parameters


var arrayGlobal = [];

function pushNumber(num){ //num is the parameter
console.log
}

console.log(pushNumber(5)); //5 is an argument
 

```