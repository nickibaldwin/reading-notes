//Two steps for every route, 1 creare a working url and replace dataFrom JSON with data FromSuperagent.
//2. make everything dynamic using the data from the client (req.query)
'use strict'


//======= Packages //need all below to get server live, boilerplate
const cors = require('cors');
const express = require('express');
const superagent = require('superagent');//fetches data from other servers, it stores it in response.body
require('dotenv').config();

//======= App
const app = express();
app.use(cors());//cors function call// need to get server live

const PORT = process.env.PORT || 3333 // need to get server live
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;//the api key lives in env, and this tells it to go get it. It lives in env bc env never goes onlines as long as I have a gitignore blocking it. DO NOT PUT API KEYS ON THE INTERNET
const RESTAURANT_API_KEY = process.env.RESTAURANT_API_KEY;

//======= Routes

app.get('/location', handleLocation);
function handleLocation(req, res) { 
// get data from api, pass it through a constructor. send it to the front end
    // const dataFromTheFile = require('./data/location.json'); we don't need this anymore
    //TODO go to the internet and get data
    //we need superagent: npm install -S superagent
    //TODO make this dynamic using what the client is searching or (req.query.city)
    const city = req.query.city;//the query from client is sent to me as an object, that has a key of city which represents the value of what the user searched for
    const url = 'API URL HERE key=${LOCATION API KEY}&q=${city}');//just cleaner than leaning url in line below.
    superagent.get(url)//superagent is a get call, superagent makes us a client for a minute bc we are requesting information from the API
        .then(stuffTheComesBack => {//stuff is Potato, represents data coming back from the API, it's their res to our req

        // console.log(stuffTheComesBack.body);//anytime this week that data comes back, it will be in the body
        //data from the file === stuffThatComesBack.body so we can replace dataFromTheFile
        const output = new Location(stuffThatComesBack.body, req.query.city);//location OBJECT is created

        res.send(output);
        })

    .catch(errorThatComesBack => {
        console.log(errorThatComesBack);
    });
}

function Location(jsonArray, cityName){ //mapping the information in the CONSTRUCTOR, we're aasking for these keys (below) back
    this.search_query = cityName;
    this.formatted_query = jasonArray[0].display_name;
    this.latitude = '1999999';
    this.longitude = '88888888';
}

app.get('/restaurant', handleGetRestaurant);
function handleGetRestaurants(req, res) {
// get data from api, pass it through a constructor. send it to the front end
    // const dataFromTheFile = require('./data/location.json'); we don't need this anymore
    //TODO go to the internet and get data
    //we need superagent: npm install -S superagent
    //TODO make this dynamic using what the client is searching or (req.query.city)
    const url = 'API URL HERE key=${LOCATION API KEY}&q=${city}&');//yelp? zomato?
    superagent.get(url).then(dataFromTheFile => {
        // console.log(dataFromTheFile.body);//anytime this week that data comes back, it will be in the body
        //data from the file === stuffThatComesBack.body so we can replace dataFromTheFile
       .set('user-key', 'numbers go here');
       .then(dataFromTheFile => {
           console.log(dataFromTheFile.body);
    
        const output = [];
        for (let i = 0; i < .restaurantJSON.nearby_restaurants.length[i]; i++){
        output.push(new Restaurant(.restaurantJSON.nearby_restaurants.length[i].restaurant));
        }
        res.send(output);
    });
    .catch(errorThatComesBack => {
        console.log(errorThatComesBack);
        res.statrus(500).send('Sorry something went wrong');
        //200 things went wrong
        //300 redirect
        //400 you did something wrong
        //500 is I did something wrong
});





app.get('/weather', handleWeather); 
function handleWeather(req, res) { // get data from another api, pass it through a a bunch of times. send it to the front end

    const jsonFromWeather = require('./data/weather.json');
    const arr = [];
    for(let i = 0; i < jsonFromWeather.data[i]; i++){
        arr.push(new Forecast());
    }

    res.send(arr);
}

function Forecast(weatherObj){
    this.forecast = weatherObj.weather.description;
    this.time = 'today';
}





//======= Initialization
app.listen(PORT, console.log(`App is up on ${PORT}.`)); // need to get server alive