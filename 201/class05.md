# Class 5: Concept Review Git Branching

### Example of for loop from warm up
- Create a function that uses 2 paramenters, the first parameter is an array of numbers, the first parameter is an array of numbers, and the second is a single integer number. 
- The function returns that same array, but adds that second parameter to each number within the array. 

## JS TO STUDY: parameters, arrays, return, if(), for(), console.log, push, function vs property, method, object
- the function typeof returns string data, which can be a number still or other data types, and then it returns the data back in a string form.
- use break for ending loops, return stops running the function and gets out to the bigger function

```javascript

var arrayOfNumbers = [1, 10, 15, 20]
var number = 5;

// parameters: variables that we define within the paranthesis of the functions signature or declare 
//parameter 1 is an array of integers
//parameter 2 is an integer
function sumThisUp(arrayThatWeWantToAddTo, numberWeWantToAddTo){

//If this 
  if (typeof(arrayThatWeWantToAddTo) !== 'number'){
    console.log('Please give me an integer as parameter 2');
    return;
  }

  for(var i = 0; i < arrayWeWantToAddTo.length; i++){
    console.log(arrayThatWeWantToAddTo[i] + numberWeWantToAdd);
    results.push(arrayThatWeWantToAddTo[i])
  }
  return results;
}
//we call (aka invoke) the function here
var newArray = sumThisUp([1,10,15,20], 5)
```

## Javascript Fundamentals
```javascript
'var nums = new Array(10).fill('');' => 'var nums = ['','','','','','','','','','']'
```

## CSS
```css
input[type='text'] {
  background-color: red;
}

div:hover {
  background-color: pink;
}

```
CSS to try- 
- img 
  - overflow:
  - background-image: url("URLHERE")
-font-family: 
- font-weight: (makes the letters heavier, kind of bolding)
-caniuse.com to see what browsers support what I'm using
- rgb (0,0,255) all black. 

### *CSS to google*
- "font styles" ie serif, cursive, etc
- Google Fonts
- 


## Git Branching

- ACP has up until now all gone to 'main'
- 'git checkout -b feature-1' this create and switches out terminal to the new branch 'feature-1'.
  - Takes the code rfom out local, from the current branch we are on.
  - GH will not be aware of this new branch at this time.
- We can work until we finish the goal of our feature.
  - We push to the feature branch 'git push origin feature-1'
  - We can now if we choose move catch 'main' up with a Pull Request.
  - If we want to work on anoher feature, we can run 'git checkout -b feature-2'
- Once we are completely finished we want to make our PR.


git checkout (move general)
git checkout -b thenameofbranchhere (switch to this branch, if it's not there then create new branch and switch)
git checkout main (takes you back to main branch) 
git branch (shows your current branch)
git branch -d localBranchName (deletes the branch)
git merge brandName

PUSH and MERGE


1. CLONE
1. git checkout
1. do work
1. push to github main?
1. 
1. git push origin multiply
1. go to github 

LAB:
Step 1: fork a repo from Jackob's lab
Step 2: clone this fork to your local machine
Step 3 use git checkout -b to create a new branch, also known as a feature on your local machine
step 4 in the new branch/feature solve the first problem.
step 5 from that feature, git checkout -b to make a new branch.
step 6 in that new branch, solve the next problem.
step 7 do this until your final brach in this chain of branches, has all of the problems solved.
step 8 merge the final branch with your main local copy of Jacob's repo.
step 9 in GitHub submit a pull request to Jacob to merge your main copy of his repo with his main. that will submit the assignment.

CODE FROM LYDIA:
  var result = [];

  var sum = a + b;

  result[0] = a + b;
  result[1] = "The sum of " + a + " and " + b + " is " + sum + ".";
  return result;

  function sum(a, b) { //eslint-disable-line
  var result = [];

  var sum = a + b;

  result[0] = a + b;
  result[1] = "The sum of " + a + " and " + b + " is " + sum + ".";
  return result;
}


PR #1 https://github.com/nickibaldwin/lab-a/pull/1