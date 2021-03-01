# Code 301
## Class 08 SQL


## Code Review

- superagent sticks the data into the body, so we always .body?

- postman.com This is a tool where you can edit the keys in your URL here rather than manually to avoid making typos and what not

${} - template literal, allows us to put a string inside of it?

![](/301/assets/2021-02-24-10-32-08.png)

If we want to get more complicated-

![](/301/assets/2021-02-24-10-36-49.png)

**TURNERY STATEMENT**
If this ? then that - turnery statement?
return a > 1000 ? 'apple' : false

![](/301/assets/2021-02-24-10-41-13.png)

## Shred Talk

array.prototype.**filter** takes in a callback function with optional parameters of (value index array).
    fiilter creates a new array of the original values but it filters some of them out

    if the callback function on an element returns true, it keeps it, if it returns false, it leaves it out.
 
    **TURNERY STATEMENT** don't iterate a bunch of if statements, but ok for one quick one.

## SQL

- might need to start postgress
    in terminal: sudo services ______ google if I need to

- we use _ in SQL not -

- also case insensitive but use lowercase for things I create, use CAPS for the SQL things that I'm not making, ie CREATE DATABASE demo_301

- SERIAL PRIMARY KEY

- q to exit the blown up table

1. Make a db 'CREATE DATABASE book_people'
2. Make a schema file for your table ('s).
3. Run the schema.sqp file with 'psql -f book_people_schema.sql -d book_people'
3. 
4. install pg 'npm install -s pg'
5. setup pg in your app

.then(takes in a callback here)

stuff from url:
stuff from superagent: postgress (check demo notes)
stuff from postgress: result.res

![](/301/assets/2021-02-24-12-40-20.png)


How we're communicating/sending things around

![](/301/assets/2021-02-24-14-59-47.png)





// function ParkList(userData) {
//   return userData.map(data => {
//     return new Park(data.fullName, data.addresses[0].line1, data.enteranceFees[0].cost, data.description, data.url);
//   });
// }

// function Park(name, address, fee, description, url) {
//   this.name = name;
//   this.description = description;
//   this.address = address;
//   this.fee = fee;
//   this.url = url;
// }