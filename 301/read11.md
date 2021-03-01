# Code 301

## Reading 11: EJS Videos


[EJS Youbtube Videos 1-5](https://www.youtube.com/watch?v=IqpfBGsALqc&list=PL7sCSgsRZ-slYARh3YJIqPGZqtGVqZRGt&index=1)



Set-up: 

1. npm init -y
2. npm install --save 

```javascript
express body-parser cors ejs

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors);
var pthat = require('path');

var app = express();

app.use(bodyParser());
app.use(cors());

app.set('views', path.join(__dirname, 'views')); //concatinate current working directory and folder called views.
app.set('view ewngine', 'ejs');


//Make new folder called views, and index.ejs

app.get('/', function(erq,res) {
    res.render('index');
    foo: 'bar'
});

app.listen(8000, function() {
    console.log("heard on 8000");
});


```

You can injecting values into the views


For Loops and Arrays


If/else statements, different syntax, write in index.ejs

