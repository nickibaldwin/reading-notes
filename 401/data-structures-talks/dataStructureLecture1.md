# Code 401

## Data Structures and Algorithms Lecture #1 Linked Lists

- Array is a data structure to hold data.

- Primitive data type: number, string, boolean, null

- Algorithm: Series of instructions to build a thing. Steps to get from point A to point Z.

- Big O Complexity: Describes the complexity of the algo

![](assets/2021-04-23-14-11-20.png)

[Big-O Complexity Chart and article](http://biercoff.com/big-o-complexity-cool-cheat-sheet/)

![](assets/2021-04-23-14-16-12.png)

logarithimc time -> BST Binary Search Tree -> "divide and conquer" algorithm.

for loops = O(n)
nested for loops = O(n^2) which is super inefficient.

![](assets/2021-04-23-14-30-35.png)

- Head: beginning

- Tail: contains a next: null;

```javascript
if(next === null)
return 'end of linked list'; 
//something to that effect
```

- SLL : Singly Linked List

"Determine is a something is circular"?  

"can you tell me the size of the linked list?" To ask interviewer 

![](assets/2021-04-23-14-34-07.png)

##  [Swift Algorithm Club - Github](https://github.com/raywenderlich/swift-algorithm-club)

## Make a LL

![](assets/2021-04-23-14-43-14.png)

Also need to make TESTS


EXAMPLE OF HOW THE DATA(node) LOOKS:
![](assets/2021-04-23-14-44-54.png)

Node Constructor:

![](assets/2021-04-23-14-45-54.png)

![](assets/2021-04-23-14-47-31.png)

We don't need to know what the tail is in a LL bc it's null.

next, add(append) a value to the node - adding a single item to the first node below

![](assets/2021-04-23-14-49-31.png)

To traverse a LL memorize below:

![](assets/2021-04-23-14-54-18.png)
![](assets/2021-04-23-14-55-31.png)

KNOW current.next -> I'm moving down the list, reset current.next

return this;
![](assets/2021-04-23-14-56-14.png)

## index.js

![](assets/2021-04-23-14-58-13.png)

in terminal: 
![](assets/2021-04-23-14-58-00.png)


ll.appends(assets/20);
console.log()
![](assets/2021-04-23-14-58-50.png)

## tests

![](assets/2021-04-23-15-03-33.png)

npm init -y

npm i -D jest (-D applies as a developer dependency, it's just a dev tool. Then it doesn't push the package up to heroku which is unnecessary bc apps run without it. Jest is just for dev testing)

![](assets/2021-04-23-15-05-48.png)

PASSED

![](assets/2021-04-23-15-06-48.png)

Coverage Report:

![](assets/2021-04-23-15-07-15.png)

Apps are expected to pass tests at 90-95%. (Industry typical)

Write JS in Chrome Console to play with code 

![](assets/2021-04-23-15-11-49.png)

![](assets/2021-04-23-15-14-40.png)

![](assets/2021-04-23-15-20-02.png)

## MERN stack -> mongo express react node (only Javascript! You can build anything with JS)

## LAMP stack -> linux apache mysql php (old stack, arcitecture, arcitecture, arcitecture, language)

