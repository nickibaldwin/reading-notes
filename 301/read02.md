# Code 301
# Reading 02: jQuery, Events, and The DOM


## jQuery, Events, and The DOM

JavaScript and jQuery book by Jon Duckett pages 293-301, 306-331 and 354-357

**jQuery pffers a simple way to achieve a variety of common JavaScript tasks quickly and consistently, across all major browsers and without any fallback code needed.**

- Select Elements
    Easier to use than DOM and more powerful and flexible. THANK GOD
- Perform Tasks
- Handle Events

## What is jQuery?

1. Find Elements using CSS-Style Selectors

    - Use CSS style selctors to find elements and then do something with them using jQuery methods. (page 296 for examples)



2. Do something with the elements using jQuery Methods
    - The jQuery object has many mwthods that you can use to work with the elements your select. 

![](2021-02-15-21-31-14.png)


Key differenced from the DOM
![](2021-02-16-06-45-10.png)

Basic jQuery example 
![](2021-02-16-06-48-27.png)

### Why Use jQuery?
1. Simple Selectors
2. Common tasks in less code
3. Cross-browser compatability


- Feature detection = better code

## jQuery Selection

![](2021-02-16-06-52-15.png)

### Looping in jQuery
- We do not have to write loops to repeat the same task in jQuery

![](2021-02-16-06-59-47.png)

- Use .each() method to get info from a series of elements

### Chaining 

- To use multiple methods at one time, use "chaining" which seperates the elements using dot notation. ie

![](2021-02-16-07-02-10.png)

## OR
For ease of reading, separate by lines. ie

![](2021-02-16-07-02-40.png)


## **.ready(), .load(), ** method
- Checks that the page is ready for your code to work with. ie from page 312)

![](2021-02-16-07-05-09.png)

SHortcut for .ready() is **$(document)- 

![](2021-02-16-07-07-27.png)

## Four Methods that Update Elements
page 318, also see jQuery Tutorial Notes


![](2021-02-16-07-09-01.png)

## Adding New Elements to the Page 
page 318, or see tut notes

![](2021-02-16-07-11-34.png)

## Getting and Setting Attribute Values
page 320

![](2021-02-16-07-12-44.png)

![](2021-02-16-07-13-18.png)


## **.css()**
- This method lets you retrieve and set the values of CSS

page 322:
![](2021-02-16-07-14-46.png)

- How to **change CSS** rules, however it's better practice to change in the CSS stylesheet than using JS.
page 323

![](2021-02-16-07-16-17.png)

## .each() and this or $(this) 
page 324

![](2021-02-16-07-18-50.png)

### Event Methods .on()
page 326
![](2021-02-16-07-19-57.png)

**jQuery Events**
![](2021-02-16-07-20-30.png)

### Event Objects 
page 329
![](2021-02-16-07-26-25.png)
![](2021-02-16-07-27-05.png)

## &**.on()** method
page 330
- Square brackets inside a method signify the parameter is optional. Leaving out a parameter written in square brackets will not stop the method from working.
![](2021-02-16-07-29-20.png)

## Loading jQuery from a CDN
page 355
-Protocol Relative URL
    - not http:

![](2021-02-16-07-33-48.png)


## Pair Programming 

https://www.codefellows.org/blog/6-reasons-for-pair-programming/

- Work with a partner
1. Greater Efficiency 
1. Engaged Colaboration
1. Learning from fellow students
1. Social skills
1. Job interview readiness
1. Work environment readiness
