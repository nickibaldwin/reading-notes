# Code 301
## Class 12: Components and Forms

/ stands for root

- **.get** goes to get data and read it
- **.post** creating a new set of data (a new array of books) and showing it to the user
- **.render**
- switch/ case takes a complicated if statement and makes it easier
![](2021-03-02-09-55-54.png)
basically a fancy if statement
![](2021-03-02-09-56-21.png)

WRRC for lab:
![](2021-03-02-10-30-05.png)

Study for exam: watch front row 3/2 at 10:30am-ish 

npm install 

![](2021-03-02-10-44-04.png)

![](2021-03-02-10-44-42.png)

Start NODEMON to see if it's running

set up my functions to get server running: localhost:3000/tasks (specifically tasks, not singular)

![](2021-03-02-10-53-43.png)

ADD TASK:

from server.js
![](2021-03-02-11-26-32.png)

show-tasks.ejs
- EDIT p tag in li *due_date*

![](2021-03-02-11-30-20.png)


go to server.js and console.log to look for form data

![](2021-03-02-11-31-30.png)

returned undefined: so the url isn't working? 11:30am

add name to input 
- change text name to =due_date

![](2021-03-02-11-37-59.png)

EDIT ADDTASK:
res.send bc we are using res.redirect. Cannot use both....

![](2021-03-02-11-40-12.png)

CONNECTING TO SQL @11:42am
BoilerPlate connecting 

1. app.get to create routes

![](2021-03-02-12-01-02.png)

2. .env 
DATABASE_URL=localhost whatever 

3. in terminal CREATE DATABASE tasks_____

4. touch task_schema.sql (creates table)
5. touch task_seed.sql ()
6. task_schema.sql: 

books.sql-
psql -f books.sql -f books_app

![](/301/assets/2021-03-02-11-46-14.png)

![](2021-03-02-11-54-47.png)

7. task_seed.sql

![](2021-03-02-11-54-56.png)

(TEST psql -f task_schema.sql )

![](2021-03-02-11-49-00.png)

to get sql to work, we remove allTasks

console.log(results.rows) in sql always

go into server.js and update from code break

![](2021-03-02-11-58-03.png)

SQL should be good to go after this.

But, we want to make our routes dynamic:

use same tags (ie h2 and p tags) in single task.ejs and show-tasks.ejs:

![](2021-03-02-12-11-27.png)

![](2021-03-02-12-15-46.png)


How to get data - 3 ways:
pretty universal across all API's

![](2021-03-02-12-18-44.png)


DO THIS:
Change task/

![](2021-03-02-12-26-46.png)

line 118: VALUES (!1, $2) [add] RETURNING id;
could be id or name or whatever I want to see

![](2021-03-02-12-30-11.png)

