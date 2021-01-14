# HTML Text, CSS, and Basic JavaScript

## HTML
* Use different tags for different things- ie <h1></h1> heading
* <p></p> seperates paragraphs
* <sup> to make something squared
* <sub> to make it small, the 2 in H20
* <strong> </strong> / <em> </em>
  STRONG / EMPHASIS
* <blockquote> </blockquote>
  Did you ever stop to think, and forget to start again?

* <abbr> </abbr>
  Used for abbreviations and acronyms.
* <cite> </cite>
 Used for referencing a piece of work such as book, film or research paper.
* <dfn> </dfn
  Used to indicate the defining instance of a new term.
* <address> </address>
  Used to contain contact details for the author of the page.
* <ins> <ins> & <del> </del>
  best & worst
* <s> </s>
  Indicates something something that is no longer acuurate or relevant (but that should not be deleted)

## CSS
* remember the boxes
* Blocke elements- h1-h6 p, div
* Inline elements- b, i, img, em, span
* <style> usually sits in the <head>
* When building a site with more than one page, you should you an external CSS style sheet 

## Basic JavaScript 
* * A script is a series of instructions that a computer can follow one-by-one. Each step is known as a statement, it's green.
* **Code Block** pink curly braces indicate start/end of a code block.
* JavaScript is case sensitive.
* Statements are instructions and each one starts on a new line.
* Statemetns can be organized into **code blocks**. Some statements are surrounded by curly braces.
* Write comments to explain what my code deos!!!
* Multi-line comments start with /* and end with */ anything between the characters isn't processed by JavaScript. They are pink in color.
* Sinlge-line comments are anything that follows //. They are gray in color.
* var quantity; var = **variable keyword**, quantity = variable name
* quantity = 3; quantity = variable name, 3 = variable value
* You should write comments to explain what your code does.
/* this is javascript comment*/ for multi line comment
// this is javascript comment for single line comment

#### Data Types
* Numeric- decimals and whole numbers
* String Data- Letters and characters
* Boolean Data- true or false values only
* JavaScript variable examples pg 63-68

#### Rules for naming variables
1. Name must begin with a letter, dollar sign or underscore, **NOT A NUMBER**
1. Name may contain letters, numbers, $, or ____.
1. Cannot use keywords or reserved words. Keywords tell the interpreter what to do, ie var is a keyword. Reserved words are words that may be used in future versions of JavaScript.
1. CASE SENSITIVE
1. Use a similar name to what it's storing. ie firstName might be used to store a person's first name. lastName for last name.
1. If the variable is more than one word, use capitals for first letter of following words. ie myNameIsNicki. 
* all lower case is considered camel case. mynameisnicki. Do not use for variables.

## Operators and Loops

## Comparison Operators:
 == equals
 != not equal to
 <'>/<'> 
 === strict equal to
 !== strict not equal to
 >= greater than or equal to
 <= less than or equal to
* comparison operators usually return single values of true or false. 

## Logical Operators:
* Logical operators allow you to compare the results of more than one comparison operator.

**Comparison Operator** ie (5 < 2)

**Logical Operators** ((5 < 2) && (2 >= 3))
**&&** is logical operator; tests more than one condition. If **both** expressions evaluate to true, then it returns true. If just one is false, then it returns false.

**||** logical or; this operator tests at least one condition. If either expression return true, then the expression returns true. If **both** return false, then the expression is false. 

**!** logical not; this operator takes a single Boolean value and inverts it. !(2 < 1) returns true. 2 is greater than 1, but the ! makes this true.


**Loops**
* While Loops: We don't know how many times the could should run, you can use a while loop. 
* For Loop: You know how many time you're going to execute code.
 i = i + 1 is the same as i++ 
 i = i - 1 is the same as i--
* loops generally start at 0, industry standard

**Data Types**
* int - integer only numbers, not special characters at all. ie 93
* string - uses other characters. ie '93' is considered string
* boolean - true or false only
