# Code 301
## Class 07 APIs


- snake_case camelCase lowercase UPPERCASE


SHRED TALK

/*
// let newArray = arr.map(callback(currentValue[, index[, array]]) {
//   // return element for newArray, after executing something
// }[, thisArg]);
**array.map returns a new newArray.**
.map's purpose is to create new arrays from the array it is called from

The array is made up of whatever is returned by the callback, each time it is called;

/*

const letter = ['a', 'b', 'etc'];

letters.map((value, index, array) => {
  return 2;
})


- Use return after .map function, which will then return the array it created. I do not create the array.

![](/301/assets/2021-02-23-10-52-39.png)

![](/301/assets/2021-02-23-10-53-06.png)

``` javascript
const nums = [1, 2, 3, 4, 5];

const newNums = nums.map(numStuff);

nums.map(numStuff);

function numStuff(valuePotato, idx, arr){//usually only use valuePotato and drop idx and arr
    return 1 + ind + valuePotato;
}
console.log(newNums);
```

LAB TODAY:

location, weather and parks need to get going to day. Rest can wait


superagent goes out to the internet and fetches data from other servers for us

add API key to .env
LOCATION_API_KEY=numbernumbernumberforever 



npm install -s superagent
run nodemon

Fuck with Postman.com for URL/API things. URL error reduction


// First req from client, we get sent an object, on the property of city. This is found on the request.query
//In location the request.query === { city: 'seattle'}
//We send back an object in our response, that looks like
// {
//     search_query: 'Daenarys',
//     formatted_query: 'Khal Drogo',
//     latitude: [ 'Drogon', 'Rhaegal', 'Viserion' ],
//     longitude: 'Targaryen'
//   },
// City explorer then says, great Location is here, I still need things. Weather needs some kind of location, but the server no longers remembers what it has sent for Location. SO instead of trying location again, weather sends back the same object we sent for location, to our server.
// In weather, our request.query === {
//     search_query: 'Daenarys',
//     formatted_query: 'Khal Drogo',
//     latitude: [ 'Drogon', 'Rhaegal', 'Viserion' ],
//     longitude: 'Targaryen'
//   }
//Our server sends back a nice array of weather objects. We close this request with a response of that array we made.
//Front end then says, sweet, still need stuff. I need movies
//In movies our request.query === {
//     search_query: 'Daenarys',
//     formatted_query: 'Khal Drogo',
//     latitude: [ 'Drogon', 'Rhaegal', 'Viserion' ],
//     longitude: 'Targaryen'
//   }