## Class 8 Notes


### Warm-Up
Pokemon

```javascript
function Pokemon(name, attackPoints, healthPoints, abilities, ){ //this is a constructor that creates an object 
  this.name = name;
  this.abilities = abilities;
  this.healthPoints = healthPoints;
  this.attackPoints = attackPoints;
  this.speak = function(){
    console.log(speak, this.name, this.name, this.name);
  }
}

var pikachu = new Pokemon('Pikachu', 3, 5, 'shoot fire', 'pika');
console.log(pikachu);

```

## Code Reivew:
in vs code: type ! + ENTER to load HTML

- We need to create object for each store
- each store contains properties 
  store name
  minCust per hour
  maxCust per hour
  avgCookies that each customer buy
Generate and average the number of cookies, sold at each hour, per store.
  - in order to get this number, we need to generate a random number between the minCust value and the maxCust value
  - once we have this number we can multiply by the average number of cookies that each customer buys.

- Put this information about cookie sales onto my HTML page
  - Create HTML elements
  - Put text content into those elements
  - Place those elements on the rendered HTML Page

```javascript 

var storesElement = document.getElementById('store-list');
var tableElelement = document.getElelementByIf('store-table');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = { //define object literal called seattle
  name: 'Seattle'
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  openHours: hours, //this is property, to collect some data
  cookieSalePerHour: [], //setting up array
  cookieTotalSales: 0,
    // this method is only used to generate cookies based on values given above
  generateCookiesAtHour: function() { 
    return generateStoreCustomers(this.minCust, this.maxCust) * this.avgCookie;
  },
    // fill the cookie sales array, with calculated cookie sales data for each hour that our store is open
  generateCookiesPerHour: function(){
    // for every hour that the store is open...
    for (var i = 0; i < this.openHours.length; i++){
      //generate a number of cookies sold at that hour...
      var cookieSales = this.generateCookiesAtHour();

      //we are adding up total cookies for each store over all open hours
      this.cookieTotalSales = this.cookieTotalSales + cookieSales;

      // add that number to our Cookie Sales data (cookieSalesPerHour)
      this.cookieSalesPerHour.push(cookieSales);
    }
  },
  displayList: function() {

    var listElement = document.createElement('ul');
    var nameElement = document.createElement('p');
    nameElement.textContent = this.name;
    listElement.appendChild(nameElement);

    for (var i = 0; i < this.CookieSalesPerHour.length; i++) {
      var itemElement = document.createElement('li');

        // templating syntax 'here is string stuff ${variableName} continue with string stuff`
      itemElement.textContent = `${this.openHours[i]}: ${this.cookieSalesPerHour[i]}`;
      listElement.appendChild(nameElement);
    }
    storesElement.appendChild(listElement);
  }
}

//generate a number of customer between min and max
function generateStoreCustomers(min, max) {  //defining discrete function logic, the logic applies to just this function
  return Math.floor(Math.random() * (max - min +1)) + min; //Math.floor 
}

seattle.generateCookiesPerHour();
console.log(seattle.cookieSalesPerHour);

seattle.displayList();


function CookieStore(name, minCust, MaxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.openHours = hours; //this is property, to collect some data
  this.cookieSalePerHour = []; //setting up array
  this.cookieTotalSales = 0;
}

CookieStore.prototype.generateCookiesAtHour = function () {
  return generateStoreCustomers(this.minCust, this.maxCust) * this.avgCookie;
}

CookieStore.prototype.generateCookiesPerHour = function (){
   for (var i = 0; i < this.openHours.length; i++){
      var cookieSales = this.generateCookiesAtHour();
      this.cookieTotalSales = this.cookieTotalSales + cookieSales;
      this.cookieSalesPerHour.push(cookieSales);
   }
};

CookieStore.prototype.displayList

    //populate table header, which creates on row that display the global for each
  function createHeader(){

  }

  function createFooter(){

      //1st start looping  through our total number of hours
    var totalOfTotals = 0;
    var hourlyTotal = 0;
    for (var i = 0; i < hours.length; i++){
        //we need to remember to reset at each hour
      hourlyTotal = 0;

      for (var j = 0; j < stores.length; j++);{


        hourlyTotal += stores[j].cookieSalesPerHour[i];
        totalofTotals += stores[j].cookieSalesPerHour[i];
      }
    }
  }
}
```


## CSS 

- placeholder.com 