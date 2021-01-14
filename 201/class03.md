## Class 03: Box Model & Loops

```javascript

var word = 'banana';

var upperBanana = word.touppercase();

if () {

} else if (){

}


```

## HTML / CSS Box Model

- How to position elements among other elements.
- Each element is a box. It has a height and a width whic hequates to a number.
- Each element type has different default properties for these numbers. 
- The CSS properties that control an element box.
  - Margin: Space between the element content, and any element adjacent. 
  - Padding: Inverse of margin, sorta. The space around the content itself, and it's surrounding box.
  - Border: A line (of various widths), around just the content and padding. Margin is outside of the border.
  - Height + width : how much space the actual content takes up.
  - can us float: left <!-- or right or center --> to have no space between the elements involved 
 
## Formal JS logic

- What goes inside of those parenteses of a conditional statements.
- Truthy vs Falsey these are things that are not specifically true or the false that Js thinks are true or false
  -Booleans, true and false
  -Js 
    -Truthy
      - true
      - numbers 1 or more or negative numbers
      - string that are not empty 
      - '0'

    - **Falsey** **memorize these**
      - False
      - 0
      - ''
      - null
      - undefined
      - NaN 'not a number'

- Logical operator
  - ! not something
  - && two side of a statement need to be true/truthy 
  - || only one side of a statement needs to be true


## Loops

- A way to get our code to run more  than once, without having to write more than once.
- 3 types of loops
  - while loop: while a condition is truthy, run the following code over and over again.
```javascript

var condition = true;

while (condition) {
  // this will run as long as condition is true
  console.log('truthy');
  condition = false;
}

//we'll only get to code below the loop, if the condition above become falsey at some point.
console.log('loop is done');

// this prompt returns a string => null '' => 'some name'
var answer = prompt('What is your name?');
console.log(answer);


while (!answer || answer === ' ') {
  console.log('you have not given me a name');
  answer = prompt('you have not given me a name, please enter your name!')
}

console.log('thank you')

// for loop syntax: intializer / condition for the loop / incrementer, the thing you want to occur after every loop
for (var i = 0; i < 10; i++){
  console.log('loop is running' + i)
}

console.log('loop is done');

var arrayOfQuestions = ['What is your name?' , 'what is your favorite color?']

//arrayOrQuestions[someNumber] => some number represents the position of items within the array. 

var arrayOfAnswers = []

//this loop is running against the number of items in the array of Questions.
for (var i = 0; i< arrayOfQuestions.length; i++){

//because is being incremented we are able to ask each question from the array of questions.
  var answer = prompt(arrayOfQuestions[i]); 

  arrayofAnswers.push(answer);
  }

  //lets go in reverse
  //array.length is the total number of items; not necessarily the ending index
  for (var i= arrayOfQuestions.length -1; i >= 0; i--){
    //this will do things in reverse order;
  }

Console.log('loop is done' , arrayOfAnswers);

//Do While Loop

//this will always run once, regardless of the truthiness when the loop begins
do{
  console.log('condition is truthy')
}while(condition); 