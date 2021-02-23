# Code 301
## Class 06 Node, Express, and APIs


## [Warm-Up:](https://github.com/codefellows/seattle-301d71/blob/main/class-06/warm-up/warm-up.md)

- images are in-line by default, so in a row by default, at least while they have space.

- In-line elements are meant to behave as text. They have a tiny bit of space between img's, if we put in a display:block, float: left they'll be touching each other. 

- row-reverse or column reverse flip the order. SKEWERS anoalogy 

- align-items: center takes away the default stretch (stretched with display:flex)

- align-items: baseline, aligns the bottom and then leaves space at the top.

- align-items is vertical, justify-content is horizontal.


Prior to lab: 
- plan out my lab first, then show to a TA prior to starting and ask them what they think. "Help planning my lab"

- Friday assignments can be turned in on Sunday, won't be marked late.

- [square brackets] are object access

- #4 in trello not required

<br/>

## For lab today: 
Front Row: 10:24am started server lecture

- BIGGEST LEARN: How to create a route that sends an object.
- How to turn one object into an easier to use object.
- Creating a variable in your terminals end is 'export VARNAME=value'
- It is semantic to name your variable in all caps
- Things we aren't supposed to change as devs are in all caps
- If I want to look at the env variables in the terminal, I run 'env'
- If I want to see them in js: 'process.env.VARNAME'
- As dev's we can save our environment variables in a file called '.env'


## Server:
Front Row: 10:24am or 11:30ish started server lecture

- create and clone down the github repo
- touch -> server.js 
- npm init //instantiates package.json
- npm install -S express dotenv cors //installs the libraries, -S calls for save
- setup the server.js file // make sure entry point is server.js (for this lab at least)
    - load the packages
    - create the app
    - create the routes
    - start the server // npm install -g nodemon/ nodemon
    - THEN work on your routes


- Whenever you restart your terminal the server is reset.
- DO NOT USE GLOBAL VARIABLES FOR TODAYS LAB, unless you don't mind if it's temporary, data will be lost 

- ENVIRONMENT the collection of all variables that belong to the terminal your code is running in
- I want to use the PORT the computer wants me to use since the port is a computer-ish thing
- I will pick my port from the environment.
- I can run mulitple terminal host

- rs restarts the server in terminal
- killall node
- TRELLO
- $ajax, switch to correct data 'http:
- starter code lives in location.json
- {} OBJECT


```javascript

//_______Packages______

const express = require('express');
const cors = require('cors');// just kinda works when we need it to
// if this line of code comes, delete it: const { resposne } = require('express')
require('dotenv').config(); //read the '.env' files saved env variavles AFTER reading the real env's variables
//above is boilerplate, mine should look the exact same.

//TODO load dotenv

//_______App______

const app = express(); //express() will return a fully ready to run server object
app.use(cors());//enables local processes to talk to the server Cross Origin Resource Sharing

const PORT = process.env.3009; || 3009 // process.env is boilerplate the variable name is potato. OR 3009 as a backup default


//_______Routes______

const ginger {
    name: 'ginger',
    age: 2,
    friends: 1
};

//this route can be visited http://localhost:3009/puppy
app.get('./puppy', puppyCallback);//this is a route that lives at /puppy and sends a ginger object
//the first parameter will always be given request data
//the second parameter will always be given response data
function puppyCallback(requestPotato, responsePotato){
    ginger.friends++; //
    responsePotato.send(ginger);
}

/*
Lab requirement approximation: create a route names './location' that sends location data to the client
An example of how the data should look is this: {

}
*/
app.get('./location', handleGetLocation);
function handleGetLocation(req, res) {
    console.log(req.query);// {city: seattle}/// req.query.city :
    
     seattle
    const dataFromTheFile = require('.data/location.json'); //in an express server, we can synchronously get data from a local json file without a .then
    const output = {//organizing the loads of data from above
    search_query: 'seattle',
    formatted_query: dataFromTheFile[0].display_name,
    latitude: dataFromTheFile[0].lat,
    longitude: dataFromTheFile[0].lon
};

const output = new Location(dataFromTheFile, req.query.city);

res.send(output);

function Location(dataFromTheFile, cityName){
    this.search_query = cityName;
    this.fomatted_query = dataFromTheFile[0].display_name;
    this.latitude = dataFromTheFile[0].lat;
    this.longitude = dataFromTheFile[0].lon
}

app.get('/resrtaurants', handleGetRestaurants);

function handleGetRestaurants(req, res){
    //example data: [{name: 'Burger King', area: 'skyline, cuisines: 'classy american'}];
    const restaurantJSON = require('./data/restaurants.json');

    // const firstRest = { this is the key? I may use this vs below?
    //     name: restaurantJSON.nearby_restaurant[0].restaurant.name,
    //     area: restaurantJSON.nearby_restaurants[0].restaurant.location.locality_verbose,
    //     //cannot read property 'locality_verbose' of (of means attached to) undefined//the thing to the left is undefined ie location above, so we corrected the path and added restaurant.location.... we left out restaurant the first go
    //     cuisines: restaurantJSON.nearby_restaurant[0].restaurant.cuisines,

        const output = [];
        for (let i = 0; i < restaurantJSON.nearby_restaurant.length; i++);
            output.push(new Restaurant(restaurantJSON.nearby_restaurant[i].restaurant));
    }

    res.send(output);
}

function Restaurant(object) {
        this.name: object.name;
        this.area: object.location.locality_verbose;
        this.cuisines: object.cuisines;
}


//_______Initialization______

//I can visit this server at http://localhost:3009
app.listen(PORT, () => console.log('app is up on http://localhost:3009')); //this is what starts the server

//.ENV
PORT=3000
candy=oreo
