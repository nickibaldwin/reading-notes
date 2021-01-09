# Final Review

* Check javascript code in console, right click on website, "inspect" -> console. Copy and paste code to check it. 
* Check data type on console, typeof('93') will output data

## For Loop:
 for (let i= 0; i< 10; i=i+5>){
    console.log(i);
    }

 let i = 0 is the definitive statement
 Counter Starts: let i= 0
 Where the counter goes: to i<10
 How the counter executes i=i+5


* break the code
 for (let i= 0; i< 10; i=i+5>){
  if(i<5>){
      console.log('We are less than 5')
  } else if(i>9){
      break;
  }
 }
  

## Functions:
Page 86+ in HTML book
function thisIsAFunction(name){
    console.log(name);
}
    
thisIsAFunction('Roger')
thisIsAFunction('Nicki')
thisIsAFunction('Matt')

*Check the function in console on browser*

Immediately Invoke a Function: 

let getName = function (){
    console.log('Hello');                  
}

getName() **** this invokes the function

*Return operator: What happens in a function stays in a function, unless I ask for a return. If you want to get home from vegas, you gotta use a return to get out.


## Operators:

answer = 7;

if(answer > 5 && answer < 10){
    pass
}

&& "and operator" both must be true statements

|| "or operator", only one statement has to be true

= assignment operator
== comparison operator
=== strictly comparative operator

'93' == 93 is true
(string data in '')
'93' === 93 is false
(5 == 'five') is false, JavaScript can't figure out that 'five' is 5.

(true && false) this is false bc they aren't both true, && requires both to be the true
(false && false) this is false
( true || false) this is true, but it's either or are true


## HTML
* body; content on your webpage 
* to start .html use <!DOCTYPE html> tells the browser that I'm using HTML
* html bare minimum:
<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
    <body>
    <p></p>
</body>
</html>

anchor tags: <a></a> used to link external sites to page

* inline elements- only takes the space it needs
img, script, a 'anchor tag', button

* block level elements (easy to google)- takes up as much space as it can
section, nav, main, li

## CSS:
Selectors in CSS: 
target things with element 

.class Can be used anywhere on a page, any element within HTML 
#id can only be used once on a page

