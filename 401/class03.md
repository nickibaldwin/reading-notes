#

## Code Review:

- Jest is probably most commonly used testing framework

- package-json is meant to hold meta information, and dependency managment. 

- "test": "jest --verbose (flag that tells us more info) --coverage(flag, gives us more info) 
  - We only need jest, the flags are optional to give us more information about our tests.

- SuperTest - we can make requests using supertest, mock request engine 

- URL - query string - is ('/category....)

![](401/assets/2021-04-21-09-28-40.png)


## REST:

"representational state transfer"
  -> GET POST PUT DELETE
  - http is stateless

## CRUD:

  -> create read update delete
  - Most web apps use crud

![](assets/2021-04-21-09-32-59.png)

![](assets/2021-04-21-09-36-20.png)

jestjs.io 
(comm + F = find on page) use to search documentation for what I'm looking for - 


# LECTURE

Workflow:
1. npm init -y 
1. touch index.js
1. npm i express jest supertest
1. mkdir src
1. mkdir errors middleware
1. touch server.js
1. touch things.js
1. mkdir models routes
1. src tree (see img 1)
1. git checkout -b dev

Image 1:
![](assets/2021-04-21-09-51-13.png)

Server.js basic construct -> export to my index.js file 
![](assets/2021-04-21-10-13-27.png)

index.js
![](assets/2021-04-21-10-15-27.png)

1. add .env
1. npm i dotenv
1. add dev-start script "nodemon index.js"
1. npm run dev-start to turn on server
1. error handling:
  1. 404.js (basically boilerplate) (image 2 below)
  1. 500.js (This is a broad error, we will advance in future)
  1. 

Image 1 (shows middleware possibilities, but not what we are using today, MW encrypts passwords)
![](assets/2021-04-21-10-22-09.png)

Image 2:
![](assets/2021-04-21-10-26-23.png)

![](assets/2021-04-21-10-26-41.png)


500.js (when next has something in it, it stops there, if next is empty it moves on)
![](assets/2021-04-21-10-27-29.png)

so do without a next
![](assets/2021-04-21-10-28-00.png)

back to server:
![](assets/2021-04-21-10-29-14.png)

correction:
![](assets/2021-04-21-10-33-16.png)

LOGGER.js
   middleware - help understand middleware, understand for future using mulitple servers (one server mat just be a logger server, ie fedex)
![](assets/2021-04-21-10-33-50.png)

add to server.js:
![](assets/2021-04-21-10-35-38.png)

need app.use(express.json());
![](assets/2021-04-21-11-50-57.png)

**App should be up and running now!** so now time plug things in

### things.js

class => class is a wrapper of the constructor, to help devs of other languages read JS

![](assets/2021-04-21-10-45-10.png)
![](assets/2021-04-21-10-48-43.png)

11:05am

CREATE:
![](assets/2021-04-21-11-05-06.png)

return record: see 11:06am but important

![](assets/2021-04-21-11-06-53.png)

READ:
  - find recod in the DB, if that record ID === ID then give me that record, else return this instead

![](assets/2021-04-21-11-09-04.png)

UPDATE:
  - Placeholder

![](assets/2021-04-21-11-16-39.png)

DELETE:
  (Similar to read if/else
  )
![](assets/2021-04-21-11-12-18.png)
HINTS: look at the delete and continue 
![](assets/2021-04-21-11-14-08.png)

NEED at bottom

![](assets/2021-04-21-11-17-21.png)


NOW TO ROUTES: (11:20am-ish)

custom-routes.js

![](assets/2021-04-21-11-44-09.png)

restful route handlers:

![](assets/2021-04-21-11-31-49.png)



req from client -> res from server (add status code (of 200) to res.json, like in SS below)
![](assets/2021-04-21-11-33-53.png)

http.cat for status codes

![](assets/2021-04-21-11-36-52.png)


GO TO SERVER (11:39am)
![](assets/2021-04-21-11-40-32.png)

next **TEST** routes (11:41am) 

npm run dev-start - once running write tests in server.test.js

![](assets/2021-04-21-11-54-43.png)

![](assets/2021-04-21-11-56-35.png)

11:55am for setting up test

![](assets/2021-04-21-12-00-34.png)

We don't need async await like above - so we can do like below
![](assets/2021-04-21-12-01-58.png)

![](assets/2021-04-21-12-02-39.png)

![](assets/2021-04-21-12-03-47.png)

ls -a (12:03pm) to check for random json packages sitting around, that will break things

vim package.json? (12:06pm)

# LAB
- choose whatever categories I want
- we did 1 today (things.js file, basically copy the things.js file twice and fill in my categories) HINT @12:12 for creating generic model - do not do.
- Stretch Goals: Testing PUT DELETE, but need to write the routes

![](assets/2021-04-21-12-11-34.png)



.get .put etc that we have used and what they do in the backend - 
![](assets/2021-04-21-10-10-31.png)
![](assets/2021-04-21-10-11-19.png)


SEMVER - semantic versioning (ie updates on phone)
