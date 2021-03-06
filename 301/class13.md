# Code 301
## Class 13 Update and Delete


## Warm-Up React

[React - Github](https://github.com/codefellows/seattle-301d71/blob/main/class-13/warm-up/warm-up.md)

"endpoint and route are synonymous"

CRUD - create, read, update, delete
        post, get

HTML ONLY KNOWS GET/PUT AND POST/DELETE ie forms can only use GET or POST (also, need method override to change to POST)

![](/301/assets/2021-03-03-10-41-48.png)

[CRUD/REST](https://nordicapis.com/crud-vs-rest-whats-the-difference/)

![](/301/assets/2021-03-03-10-46-18.png)

![](/301/assets/2021-03-03-10-58-35.png)


## POSTMAN:
use express server to get postman and VS code to commuicate

CANNOT DELETE /task 1 
delete route is not defined, or task 1 is not defined

- get is triggered whenever you visit that particular URL.
- forms DO NOT KNOW what DELETE is

``` javascript
app.delete('/tasks/:task_id'), (req, res) => {
    res.send()
}

function deleteTask (req, res) {
    // const task_id = req.params.task_id;
    let sqlSting = 'DELETE FROM task WHERE id=$1;';
    let sqlArray = [task_id];
    
    return client.query(sqlString, sqlArray)
    .then(res.send('/tasks');
    }).catch(err => handleError(err, res)); //good practice to always have a catch
}
```

![](/301/assets/2021-03-03-11-04-35.png)

DELETE BUTTON:

![](/301/assets/2021-03-03-11-43-39.png)

npm install method-override 

use in middleware section (method below is potato, and line 9 is fat finger, should be override) 

middleware is like the middleman

![](/301/assets/2021-03-03-11-47-37.png)

![](/301/assets/2021-03-03-12-01-33.png)


RENDER takes in and ejs file and sends to the browser

REDIRECT just sends a URL to the browser

![](/301/assets/2021-03-03-12-24-08.png)

![](/301/assets/2021-03-03-12-31-20.png)


![](/301/assets/2021-03-03-13-39-37.png)

[PAULO IS A CHAMP and makde another graph of server things](https://drive.google.com/file/d/10s8k0Ru7YM4zpg4RQEa8Jhm8JHzVKJG_/view)
