## Reading 07: Objecy-Oriented Programming, HTML Tables



## HTML Book, Chapter 6: Tables (page 126-145)
- TABLES
  <table></table> table element
  <tr></tr> table row
  <td></td> table cell
  <th></th> table head

## Chapter 3: Functions, Methods, and Objects (page 106-144)
- **Creating an object: constructor notation**
  -(**insert img from book pg 106**)

- Updating an object (pg 107):
  - To update the value of properties, use dot notation or square brackets.
  - delete a property using **delete** keyword
    delete objectName .propertyName;
  - to clear a property value
    object .propertyName = '';

- Creating many objects (page 108):
  - Object constructors can use a function as a template for creating objects. First, create the template with the objects properties and methods.
  (Insert img from page 108 + 109)

- Creating objects using constructor syntax
  - (**img from page 110**)
  - If the object already had any of these properties, this would overwrite the values in those properties.
  - Use dot notation, like any object

- Adding and removing properties 
  (**IMG page 112**)

**Ways to create objects** (img from page 113)

- keyword **this** page 114-115
  - Where the function is declared alters what this means.
  - It always refers to one object
  - Global scope = global context
    **img from 114**

** Storing Data**
-Organize data into arrays or objects. **img from 118**
  - variables
  - arrays
  - individual objects
  - multiple objects
  -
- In Javascript there are 6 data types:
  Simple or Primitive
  1. string
  1. number
  1. boolean
  1. undefined
  1. null
  Complex data 
  1. Object (arrays are objects, functions are technically objects too)


- **Built-in Objects)** page 120+
  -Object model, group of objects
  **img from page 122-123**
1. **Browser Object Model:**
  - contains objects that represent the current browser window or tab. It contains objects that model things like browser history and the device's screen.
  - The window object represents the current browser window or tab. It is the topmost object in the BOM and it contains other objects that tell you about the browser.
  **IMG pg 124 + 125**

1. Document Object Model:
  - uses objects to create a representation of the current page. It creates a new object for each element (and each individual section of text) within the page.
  - The topmost object in the DOM is the document object. It represents the web page loaded into the current browser or tab. 
  **img page 126** 

1. Global Javascript Objects:
  - The global JavaScript objects represent things that the Javascript language needs to create a model of. For exammple, there is an object that deals only with dates and times.
  **IMG page 128-129**

- Global objects: Number Object
  -Whenever you have a value that is a number, you can use the methods and properties of the Number object on it. 

- to control decimal spaces
  originialNumber.toFixed(howeverManyDecimalPlacesHere)

- Math object has properties and methods for math constants and functions (page 134)
  Math.PI  
    returns pi
  Math.round()
    rounds number to nearest integer
  Math.sqrt()
  Math.ceil()
    rounds up to nearest integer
  Math.floor()
    rounds down
  Math.random()
    generates random number between 0 and 1

**Date Object** (page 136)
- In order to work with dates, you create an instance of the Date object. You can then specify the time and date that you want it to represent.
  **img page 136**
- to create a Date object:
  Date();
**IMG 137** Date methods

Examples of Functions, Methods, Objects page 142-143


  

