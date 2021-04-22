# Code 401
## Class 01

85-90% @second week of class is good. 
60% below at end of week, probably need to drop the class

**Keep Grade at 90% or above the whole class! It's hard to get caught up in this class**


## Lecture began at 11:15am 

## Node.js

- Comes with a REPL (read, eval, print, loop)

- None-User interface, text

- NPM (node package manager)
  - ecosystem of a bunch of apps that I can use to build my own.
  - express is a node app that builds other node apps

  - npm init (or i) -y (what does the -y mean?)
    - initializes the JSON packages
    - JSON - hold meta information and dependencies
    - cat package.json 
      - cat allows you to see whats in the package?

![](assets/401/assets/2021-04-19-11-31-23.png)

Quick Server Build:

![](401/assets/401/assets/2021-04-19-11-37-47.png)

PORT: Anything above 1000, allows for network traffic. Backend, dev port is usually 3000 or 3333. Front-end is 8000 or 8080.

## Middleware:

  - app.use is a global mw construct, every request is ran through this. 

### Custom Middlewares:

- Allows us to designate specific routes, instead of global like app.use

**404** status code: route not found error
**500** status code: server error - generic error

modeule.exports is an object

11:51am:

404.js:

![](401/assets/401/assets/2021-04-19-11-51-51.png)

500.js

![](401/assets/401/assets/2021-04-19-11-55-12.png)


11:57am: 

![](401/assets/2021-04-19-11-57-00.png)

ERROR HANDLERS LIVE AT THE BOTTOM OF SERVER.JS

![](401/assets/2021-04-19-11-58-32.png)

const PORT = 3000

![](401/assets/2021-04-19-12-00-16.png)

2nd Video (after lunch):
server.js
handlers : 
middlewares :

app.use is a global mw function, all incoming requests will pipe through this

(below is a recap, follow above image for building app)
![](401/assets/2021-04-19-13-04-14.png)

![](401/assets/2021-04-19-13-06-26.png)

express gives us the ability it quickly send a json response- ie line 11 below

![](401/assets/2021-04-19-13-09-22.png)


**curl: command line url**

![](401/assets/2021-04-19-13-14-17.png)

**Custom Middleware**
- always use next(); says move to the next middleware in the chain

**stamper** req, res, next defines middleware?
![](401/assets/2021-04-19-13-24-07.png)

![](401/assets/2021-04-19-13-25-25.png)

Swaggar Inspector:
/data = my route
![](401/assets/2021-04-19-13-29-56.png)

## JEST 

- is a test runner and assertion library

jest looks for __tests__ (two underscores)
  npm i jest
  (be sure to install all required dependencies, ie dotenv and express)

## Supertest

npm i supertest

## module.exports (1:40pm)

"We want our server to be exportable so we can test it"

![](401/assets/2021-04-19-13-42-13.png)

create index.js - entry point, all it does is require other things so we can start our server

remove the env lines from server.js and move to index.js

![](401/assets/2021-04-19-13-43-48.png)

## server.test.js

supertest (line 5) passes all the routes, in memory server 

describe = the bigger thing we're testing, test suite

  can use it('') or test('')

![](401/assets/2021-04-19-13-48-31.png)

![](401/assets/2021-04-19-13-51-17.png)

** we can have mulitple expects

Google jest assertions 

edit the test in the package.json
![](401/assets/2021-04-19-13-55-08.png)

Had an error, so edited code
![](401/assets/2021-04-19-13-56-30.png)

Changed the test suite and ran test again, and passed:
![](401/assets/2021-04-19-13-57-12.png)

## ci cd pipeline (2pm)
(customize at 2:05pm)

"continuous integration, continuous deployment"

sqm = software qulaity management

Github -> actions -> node.js (config file)

** missing a git ignore! contains node_modules, so we need to add gitignore.io (add node.js, ds store mac, windows, linux)
![](401/assets/2021-04-19-14-07-16.png)

.yml files are important
![](401/assets/401/assets/2021-04-19-14-11-51.png)

![](401/assets/401/assets/2021-04-19-14-12-24.png)


Then once tests pass in github (2:14pm for example), then go to heroku to deploy.

- already connected to my github, so search for my repo, connect.
- Select the branch and select **Wait for CI to pass before deploy**

**WATCH OUT FOR CORRECT PORTS** will throw "application error" (not 404 or my error) when the heroku deploy url is hit

Steps for today (2:23pm)
1 - setup workflow (node.js in github actions) (paste the file he sends us in that file in github)
2 - 
3 -
4 - 