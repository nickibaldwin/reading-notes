# Javascript Cheatsheet 

## Javascript array.prototype.methods:

```javascript
.join() //joins all elements of an array into a string

    const joinArray = (arr) => { 
        return arr.join(' '); //arr.join([separator])
    };
        // expect(joinArray(['hello', '301', 'students'])).toStrictEqual('hello 301 students');

.concat() //used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
```

![](assets/2021-04-06-15-07-14.png)

```javascript

.filter() //takes in an array, generartes new array of arbitrary length.

.map() // takes in an array, generates a new array of the same length. It calls a provided callback function once for each element in the array, in order, and construts a new array from the results.

.reduce() //executes a reducer function (that you provide) on each element of the array, resulting in single output value. Use to reshape data (like API's) **left-to-right reduction

//See ShredTalk https://www.youtube.com/watch?v=_uICFozlNYE&list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k&index=9&t=487s
```
![](assets/2021-04-06-14-22-41.png)
![](assets/2021-04-06-14-27-22.png)
```javascript

.reduceRight() //applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value. 

```
![](assets/2021-04-06-15-01-38.png)
```javascript

.includes() //determines whether an array includes a certain value among its entries, returning true or false as appropriate.
```
![](assets/2021-04-06-13-21-59.png)

```javascript
.sort() //sorts an array

.split() //splits a String object into an array of string by separating the string into sub strings 

.splice() //method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
let arrDeletedItems = arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```
![](assets/2021-04-06-13-41-22.png)
```javascript

    function returnTen(str) {
    // Solution code here...
    return str.split('').splice(-10);
    }//see Code Challenge 08 #1

.slice() //returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
    slice()
    slice(start)
    slice(start, end)
```
![](assets/2021-04-06-13-52-12.png)
```javascript
.reverse() //reverses an array

.forEach() //loops over each value in the input array
.push() - //like i++, we push the results of the number and add 1

    const addOne = (arr) => {
      const result = [];
      arr.forEach(function(number) {
        result.push(number +1);
      });
      return result; 
    };

.length() //The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.

.indexOf() //returns the first index at which a given element can be found in the array, or -1 if it is not present. (see MDN if example is needed)

.find() //returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
```
![](assets/2021-04-06-15-09-26.png)
```javascript

.every() //tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

//RegEx:
.match() //method retrieves the result of matching a string against a RegEx.
    const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
    const regex = /[A-Z]/g;
    const found = paragraph.match(regex);

    console.log(found);
    // expected output: Array ["T", "I"]
.test() // method executes a search for a match between a RegEx and a specified string. Returns true or false.
    const containsW = (str) => {
    // Solution code here...
    const regTest = /w/gm;
    const outputTest = regTest.test(str);
    if (outputTest) {
        return true;
    } else {
        return false;
    }
};

.replace()//The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.
```
![](assets/2021-04-06-14-10-28.png)

## Javascript string.prototype.methods:

```javascript

.toUpperCase() //method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

.toLowerCase() //makes the array all lower case

.replace()//The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.
```
![](assets/2021-04-06-14-10-28.png)
```javascript

.length //The length property of a String object contains the length of the string, in UTF-16 code units. length is a read-only data property of string instances. See Code Challenge 06 #1
```

![](assets/2021-04-06-13-59-33.png)

## Random:
```javascript
Math.pow(7, 3) // returns the base (7) to the 3rd power. 

Math.max() // returns the largest number

//Template Literals:
//Write a function that appends ' The end.' to a string, and returns the modified string. The original source string should not be modified.
const appendTheEnd = (str) => {
  // Solution code here...
  const str1 = `${str} The end.`;
  return str1;
}; //uses template literals (aka template strings) to append 'the end' to the string 


//Easy REVERSE array function:
const sortBackwards = (arr) => { //inverse of #3
    // Solution code here...
    arr.sort((a, b) => { return b - a; }); 
    return arr;
};
```


References:
MDN Web Docs: https://developer.mozilla.org/en-US/

freeCodeCamp.org: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/