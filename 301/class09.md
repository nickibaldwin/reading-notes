# Code 301
## Class 09 SQL Continued


- **floor divide** means divide and chop off the decimals.

- npm install -s superagent (or express or whatever module, if it doesn't save with just npm install. check package.json to see if it saved in dependencies)

- call stack trace ie - /parser.js:278:15 
![](/301/assets/2021-02-25-09-40-52.png)

### **.reduce()**
    **aka SLAP CHOP**
- Purpose is to take any array and reduce it down into anything else.
- It can take veggies and turn them into a salad.

arr.reduce(function(reducer, currentValue){
    whatever ets returned, gets passed down to the next iteration of the function call, as the new reducer
});

- Can take in an 
[optionalStartingReducer]

add(numbers[0], numbers[1]) 

![](/301/assets/2021-02-25-10-55-35.png)


Prom? 
![](/301/assets/2021-02-25-11-03-49.png)
![](/301/assets/2021-02-25-11-04-11.png)

kind of like .map()
![](/301/assets/2021-02-25-11-08-39.png)

kind of like .filter()
![](/301/assets/2021-02-25-11-09-43.png)


To smoosh arrays in a more advanced setting thna above:
```javascript
const craziness = {
  cool :{
    thing: 'bazooka'
  },
  wow: {
    monster: 'mash',
    graveyard: 'smash'
  },
  nums: {
    1: '1',
    2: '2',
    3: '3'
  }
}

const arr = Object.values(craziness);
console.log(arr);

const startingAccumulator = {};
arr.reduce(flattenObj, startingAccumulator);

function flattenObj(objectWeAreBuilding, objectWeAreStealingFrom){
  for(let key in objectWeAreStealingFrom){
    objectWeAreBuilding[key] = objectWeAreStealingFrom[key];
  }
  return objectWeAreBuilding;
}
```

I think this is the right code for refactoring

![](2021-02-25-11-58-35.png)


**currying** wrapping a function in another function so it can receive the variables it needs.

![](2021-02-25-13-49-37.png)

![](2021-02-25-13-53-53.png)


Class 10:

WRRC : Web Request Response Cycle

