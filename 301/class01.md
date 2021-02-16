# Code 301 
## Class 1

Do not plagiarize!!
Make sure to give proper attribution to sources tyou draw from for your projects
"____ helped with ____"
Add it to your README, or a collab.md doc in your repo

Never copy and paste

If I copy code from an article or anything, link the source to the copy. If I reference mulitple times, add article to README and then reference it in my notes.


### Partner Power Hour
- The people presenting are hiring. 
- Connect with them on LinkedIn (messages save).


### EQ
- High emotional intelligence earns $10-$20k more. It's important


### Bias

#### Implicit Bias
- In group/out group- Favor those who belong to your group
- GroupThink - you let the social dynamics of a group override the best outcomes.
- Biases are the stories we've made up about people before we know who they really are.
        Who is missing in your circle? 
        Diversity is good

![](2021-02-15-09-53-18.png)




Happy Belated to James and Connor!!

Background
Geeky/fun fact - crazy plant lady, into board sports, attempting to get into cycling to do the STP (if it happens this year) - Cool Zach
Tech companies I like- I respect Tesla, Elon Musk is an interesting mind, but am considering looking within the beauty indo first to make the jump. My hair idol posted my dream job last week within her company. That was really motivating to see.


## Setup
**Method** is a function that lives inside of an object

**forEach()** is a method that calls a provided function at each index of an array on the element at that index.
```js
arry.forEach(callback(currentValue[, index[, array]]){
    //executes something
}


// Currying: passing a function to another function. We often currey callback functions.
element.addEventListener('click', function(event){});

const arr = ['a', 'b', 'c'];

arr.forEach(callback)

function callbackPotato(valuePotato, indexPotato){console.log(valuePotato)};
                    //paraments, we can chose them

    //calls callback once for each element
    //console.log 'a', 'b', and also 'c'


arr.forEach(function(v, i, a){
        console.log('value', v);
        console.log('index', i);
        console.log('array', a);
    })

    // same as the following

for(let i =0; i < arr.length; i++) {
    callbackPotato(arr[i], i, arr);
}

    // Both above produce the same thing


const students = ['Drae', 'James', 'Matt', 'Yulia'];

sutdents.forEach(function(name){
    console.log('Hello there, ${name}');
});

// We want clean code because all variables are used.
// Clean code because all variables have good names.


//arrow function
students.forEach((name, indexPosition, arrayItself) => console.log('Hey there ${name} ${indexPosition} ${arrayItself}'));




// Example:
const nums  [5, 6, 7];

nums.forEach(multiplyByIndex);

function multiplyByIndex)number, index){ //number and index are parameters
    console.log(number * index);
}


```

### Code Challenges
- start by marking x at all tests besides #1
- "local" means declared in the function scope
- const is like a variable, but it's constant within the function, I cannot change const, but I can change a var
- put an x on the tests that aren't working when I submit, better practice than submitting it bad. Also make a comment for the TA to give feedback 
- Only spend 60-90 minutes on code challenges, then do lab, and go back to CC if I need to finish still


### New Things

- forEach: a method of arrays that takes in a callback function as a parameter and calls it on eafh element in the array

    -SMACCS
        Scaleable and Modular Architecture for CSS
    - Media Queries
        A statement in CSS that encapsulates CSS rules and only triggers rthe mif the condition is met. IF statement of CSS
        LAYOUT.CSS FILE:
            @media(min-width: 500px){
                body {
                    background-color: black;
                }
                artricle img {
                    width: 50%;
                    float: left;
                }
                article h2 {
                    float: left;
                    width: 50%;
                }
                article {
                    overflow: hidden; //like a float:clear, but easier, deals with float height
                }
                
            }

## SMACSS
!tab (basic html to start)
**reset.css**
**base.css** Is used for all the css we want on every single page that we know will stay constant, it is only for high level things
**layout.css** is used to position elements on the page
**modules.css** deals with how things should look
**theme.css** deal with how things should look in a certain situation or when we want a temporary change. ie like a retailer with a sales site, or xmas site


* {
    box-sizing: border-box;
}
main {
    width: 300px;
}


