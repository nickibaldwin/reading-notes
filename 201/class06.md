## Class 06 Lecture Objects and The DOM (Document Object Model)


- Fundamental data structure ( something that holds different types of data ie: string, number, booleans, nulls, undefined);
- Objects allows us to place things in a specific place.
`var array = [1, '1', 2]` // how arrays work
  - when we reference items within: array [0];
`var object = {key: value, }`
  - var person = {name: 'Jacob'}
  - no are reference looks like this: person.name => 'Jacob';
    - This reference method is known as 'dot notation';
    - We can still use bracket notation if we can. ie 
      person['name'] => 'Jacob'
      - Handy, when we need to use a variable to represent a property name.
  - Every time we see something like array.length;
- Things we define on an object, as comma separated. You don't need one at the end, but it won't break your code.
- If we want to place a function on an object, we call this a method
- 'this' => we can this contextual 'this'
  - inside of an object, 'this' refers to the object that is being defined

  ```javascript 
  - var person = {
    name: 'Jacob',
    age: 31,
    languages: ['javascript', 'english']
    speak: function () {
      console.log('Hey there');
    },
    greet: function (){
      console.log('My name is ' + this.name);
    }
    school: {
      name: 'Code Fellows',
    },
  }
  
  person.speak():
  <!-- //prints to the console => 'Hey there'; -->
  person.name;
  person.greet(); // => 'My name is Jacob';
  person.school.name;
  person.name = 'Chance' // we can change properties after objects are already created.

  ```

  ## Document Object Model

  - This is a Javascript object that lives globally within the browser.
  - Represents the current HTML document we are currently looking at.
  - It has its own properties and methods, many of which we will dicuss.
  - We are going to use this today to select elements that are on the page, create new elements that are not on the page yet, append those new elements to the document object.
  - Useful methods:
    - getElementById() //<= selects an element
    - createElement() //<= creates a new HTML element that is not displayed yet
    - appendChild() //<= places new elements on the page
    - setAttributes() //<= lets us modify elements with styling or classnames or ids 
    - textContent //<= use this to set the content within opening and closing tags
  

## Modeling The Problem Domain
- Understanding the scope of the problem, and providing a working model of how it can be solved.
- Demo in README.md
- 

