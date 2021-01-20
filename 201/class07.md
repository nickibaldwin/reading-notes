## Class 07 day 2 Salmon Cookies

## Warm up

<!DOCTYPE html>
<html>
  <body>
    <div id="content-box"></div>
  </body>
</html>
/**
  * Complete the function below, which takes takes in 2 parameter, the first is a string that represents an HTML element, the second is a string that represents content we want to put in our HTML.
  *  The function should utilize DOM methods to create that type of element, and set its text content to whatever is passed in as the `content` parameter.  That element should be returned.

  *  STRETCH:  if you complete the function see if you can use the function to render content to some HTML.  Some starter HTML has been provided to get you started.
**/
```javascript 
// we declare the contentCreator function with 2 paramenters (variables)
function contentCreator(elementType, content)  {
                // method is below. assign the newly created element to the element variable
  var element = document.createElement(elementType);

  // use the 'element' variable, which now has a property called textContent, we set this content using the textContent property. (which should match whatever is above in "content")
  element.textContent = content 
  
  //return this new element to whatever code invokes or calls it.
  return element;
}

//invoke the contentCreator function, and assign the return value to the paragraph variable.
var paragraph = content.Creator('p','here is some text');

//grab div from html above
var divElement = document.getElementById('content box');

//append paragrpah to divElement
divElement.appendChild(paragraph); //div element puts the paragraph within it

// innerHTML= <p>Here is some text</p>
// vs.
// textContent = Here is some text
```

## Code Reivew
- Gettign a random number to represent cookies sold at each hour.
  - that number is within some range of values.
    - min customers per hour
    - max customers per hour
      -randomly generate a number of customers between these values.
    - Average number of cookies each customer buys.
      multiply the number above by this number (Avg. Customer).
  - we need to do this same thing for every hour that a store is open

**FOCUS ON PROBLEM DOMAIN**

```javascript
var hours = ['6am', '7am' etc];

//if know all the hours, we can, for each hour, perform some logic

var Seattle = {
  minCust: 10,
  maxCust: 15,
  avgCookies: 3,
  findCookiesPerHour: function(){ // this is an anonymous function (it doesn't get a function name)

    //how do I get a random number between 10 and 15 (min/max customer)
    
    //We subtract the min from the max to get our middle point

    //we add the min from the max to get our middle point
    //  if we use a middle instad of an absolute maximum, we might go above our max value when we add out minimum 

    //we add the min so that if zero we get our min value
    var randomCustomers = Math.floor(Math.random * (this.maxCust - this.minCust + 1)) + this.minCust;

    var randomCookies = randomCustomers * this.avg.Cookies;
    return randomCookies;
  }
}

//for loop for cookies per hour
for (var i = 0; i < hours.length; i++){

  var cookies = Seattle.findCookiesPerHour();
  Seattle.cookiesperHour.push(cookies);
  // now we can build our list.
}
//passing in a store into our function
function generateCustomer(){
  Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
}

generateCustomers(Seattle);
```

- Get some values to append to the a list.

## Object Oriented Programming 

- We are using objects as a design pattern.
- We use objects as the starting point for programming operations.
  - All the functions and operations that you culd, belong to an object.
  - Before we can call out to properties and methods, we have to create an object.
- It all begins with defining functions that produce objects.
- **Constructors** it's a function that creates an object.


```javascript
var Seattle = {
  //properties and methods go here
}

//in JS, we mark constructor functions with a capital letter at the beginning
function Store(){
  this.name = 'Seattle';
  this.hours = ['6am' , '7am' etc];

}

var Seattle = new Store(); // creating an object using the Store constructor function

console.log(Seattle) // {name: 'Seattle', hours: ['6am', '7am', etc]}

// by convention, when we define constructors, we capitalize them
function Store(name, hours, minCust){
  this.name = name;
  this.hours = hours;
  this.minCust = minCust;
};

// prototype is the set of properties and methods that all objects that are associated with the constructor recieve

// Store is constructor, .speak is method
Store.prototype.speak = function(){
  console.log('Hey Im ' + this.name);
}

//we want things defined on the prototype to be shared between all objects created with that constructor.
Store.prototype.hours = ['6am', '7am',etc]

// calling (invoking) the constructor and passing values within
var Seattle = new Store('Seattle', ['6am', '7am', etc]) // the new keyword activates the constructor function powers within
//Store.name => this doesn't exist

var openHours = ['6am', '7am', etc]
Seattle.name 
Seattle.speak();


var Tokyo = new Store('Tokyo', [openHours])

Tokyo.name // returns the city name
Tokyo.hours // returns open hours array 6am, 7am, etc
```

## HTML Tables

- Creating rows and columns.
- This requires a very specific composition/hieracrchy of elements.
  -There not really a column element itself, more like stack of row.
  - Each row is made of data cells, and if one row appears above another in your code, they will stack

```html

  <table>
    <tbody id='table-body'>
      <tr>   // table row
        <td>One</td> // data cell
        <td>Two</two>
      </tr>
      <tr>
        <td>three</td>
        <td>four</td>
      </tr> 
      <tr>
        <td>five</td>
      </tr>
    </tbody>
  </table>
  <script src='app.js'></script>
</body>

</html>
```

```javascript
var tableBody = document.getElementById('table-body');

var rowOne = document.createElement('tr'); //<tr></tr>
var cellOne = document.createElement('td'); // <td></td>
var cellTwo = document.createElement('td'); // <td></td>

cellOne.textContent = 'one'
cellTwo.textContent = 'two'

rowOne.appendChild(cellOne);
rowOne.appendChild(cellTwo);
tableBody.appendChild(rowOne);

var rowTwo = document.createElement('tr'); //<tr></tr>
var cellThree = document.createElement('td'); // <td></td>
var cellFour = document.createElement('td'); // <td></td>

cellThree.textContent = 'three';
cellFour.textContent = 'four';

rowTwo.appendChild(cellFour);
rowTwo.appendChild(cellThree);
tableBody.appendChild(rowOne);

// his example below
//this is only for data that will live in JS and be repeatable

function Kitten(name, breed, traits, personality){
  this.name = name;
  this.breed = breed;
  this.traits = traits;
  this.personality = personality;
}

Kitten.prototype.display = function(){
  var kittenRow = document.createElement('tr');

  // for every number of properties
    //create a td
    //fill that td with text
    // appenf td to row
    

  var nameCell = document.createElement('td')  
  var breedCell = document.createElement('td')  
  var traitCell = document.createElement('td')  
  var personalityCell = document.createElement('td') 

  nameCell.textContent = this.name;
  breedCell.textContent = this.breed;
  traitCell.textContent = this.trait;
  personalityCell.textContent = this.personality;

  kittenRow.appendChild(nameCell);
  kittenRow.appendChild(breedCell);
  kittenRow.appendChild(traitCell);
  kiteenRow.appendChild(personalityCell);

  tableBody.appendChild(kittenRow); 
}

tableBody.innerHTML = '';

var frankie = new Kitten('Frankie', 'calico', ['spotted', 'fuzzy'], 'friendly and warm');

var spencer = new Kitten('Spencer', 'trabby', ['round', 'always hungry'], 'shy and really hates loud noises');

spencer.display();


