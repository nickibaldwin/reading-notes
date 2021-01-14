# HTML and JavaScript:

## HTML

* 'cd folder1' 
* 'touch folder1/folder_1_file1.html' creates the file at the specific path
* 'rm -rf folder_name' removes a folder from our current terminal folder / directory
* get away from cd and better using a path

## Code Review

* 'document.write ()'
* DO NOT USE 'location' as a variable name, does not work
* inline style tag


## More Git and Github
* Github is a server/cloud
* git add | 
* git commit 
* git push
* git status | see what git has tracked or saved. Green is being tracked and ready to be commited. Red won't commit
* git clone | pulls a directory from remote and puts on my local machine
* git pull | from local computer, go to remote directory and see if there's anything else to bring down to local computer

For labs we need to do this:
1. Create a repo for a project on github
  * This creates in the cloud a folder that we eventually will add files to our machine.
1. Clonde from github to our machine the repo we just made
  * 'git clone <urlToLinkToLocal.git>'
1. cd into project directory, and do our work
1. When we are ready to save our work
  * 'git add'
  * 'git commit'
  * 'git push'

* We still do this starting from 
  1. Create a folder for project files/git directory 
    - 'mkdir project_name'
    - 'cd project_name'
  1. Initialize your current directory as a git repository 
  - 'git init' 
  1. Create a repo on Github
    - copy the url from github
  1. Add that repo as a remote
    - 'git remote add origin urlRepoName.git'
  1. Now we an push our code to the github repo we created.

## JavaScript Data Types

 ```javascript


* There are 5 immuatble (basic, unable to be modified data, basic data) data types 
  * Strings
    * 'var string = 'Here are words''
    * 'var anotherString = 'More words''
  * Numbers
    * var number = 10
    * var decimal = 10.2
    * var decimal = 1/2
         * parseInt('10') | number and string data, inverse 
  * Booleans
    * True or False
    * 'var isBoolean = true' 
    * 'var isNotBoolean = false'
 
    
    * nulls | we don't use
    * undefined 

## Conditional Statements

- if/else/if else
- flow control
  - what lines of code are going to be run in our js engine


  > use console log to check data type for javascript

  // these statements always evaluate to a boolean
  if(true) {
    console.log('This statement will run')
  } else {
    console.log('this statement will not run')
  }

// == this is a way to evaluate 2 sides of a statement 

var aBigNumber = 1000

if (0 == 1){
  console.log('This will never be true');
  }

if (aBigNumber == 1000){
  console.log('this should run just fine')
}

typeof(UserNumber) // return as a string of whatever is in the quotes

var UsersNumber = promt('Guess a number');

if (UsersNumber == 1000){
  console.log('You guess correctly');
} else {
  console.log('not quite');
}

// guessing 
if (UsersNumber !== 1000) {
  console.log('not quite');
}

// There is a weak and strong evaluation
if (UserName === 1000){
  console.log('You guessed corretctly');
}

* evaluations
- '===' strong evaluation, use mostly 1000===1000 
- '==' is about equal to, 1000 == one thousand


// switch statements
// lets you define a large amount of conditions to evaluate

var NumofGuesses = 12;

var UsersGuess = prompt();

switch (NumOfGuesses) {

  case 10:
    console.log('the number is 10');
    //if we don't want cases below the catched case to execute, we need a break
    break;
  case 11:
    console.log('the number is 11');
    break;
  case 12:
    console.log('the number is 12');
    break;
  default:
    console.log('number didnt equal anyt number above');
}
```

* **Arrays** 
- Let you store more than one piece of data in the same spot.
- `arrayOfNumbers.length` .length tells of how many spots there are, below is 6


`var arrayOfNumbers = [2,4,6,8,9,10]`

  - We reference the discreet items in the array with an index number
      - `arrayOfNumbers[0] =>2` //referencing the first (0) space, which is 2
      - `arrayOfNumbers[5] => 10` // move to 5th position which is 10
      - `arrayofNumbers.length ` =6




   