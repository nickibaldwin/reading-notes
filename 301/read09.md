# Code 301

## Reading 09: Refactoring

## - [Concepts of Functional Programming in Javascript](https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa)


## - [Refactoring JavaScript for Performance and Readability (with Examples!](https://dev.to/healeycodes/refactoring-javascript-for-performance-and-readability-with-examples-1hec)
<br/>

### [Concepts of Functional Programming in Javascript](https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa)
- **Functional Programming** "is a style of buildoing the structure and elements of computer programs. It treats computation as the evaluation of mathmematical functions and avoids chaning-state and mutable data"

- **Pure Functions** 
    - "It returns the same result if given the same arguments (it is also referred as deterministic)"
    - "It does not cause any observable side effects"
Simply- returns the same result IF given the same arguments 

- **Impure Function**:
    BC it uses a global object that was not passed as a parameter
![](/301/assets/2021-02-25-08-34-38.png)

- No function relying on a random number generator is pure.
- No function reading external files is pure as the files content can change.

- Benefits of PURE FUNCTIONS
    - easier to test

- Immutable data cannot be changed after it's created, but you create a new object with the new value.

- **Recursion** to handle mutability in iteration
![](2021-02-25-08-45-45.png)

- "toLowerCase: converts the string to all lower case
- trim: removes whitespace from both ends of a string
- split and join: replaces all instances of match with replacement in a given string
We combine all these 4 functions and we can **"slugify"** our string."


### - [Refactoring JavaScript for Performance and Readability (with Examples!](https://dev.to/healeycodes/refactoring-javascript-for-performance-and-readability-with-examples-1hec)

- Well written code lives between quickly written and well comprehended. 

We should be using .method in our City Explorer instead of for loops ie:

![](2021-02-25-08-51-24.png)

![](2021-02-25-08-52-02.png)

"It's important to get your code right the first time because in many businesses there isn't much value in refactoring. Or at least, it's hard to convince stakeholders that eventually uncared for codebases will grind productivity to a halt."