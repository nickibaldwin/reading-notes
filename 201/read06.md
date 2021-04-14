## Reading 06: JS Object Literals; The DOM

### [Understanding The Program Domain Is The Hardest Part of Programming](https://simpleprogrammer.com/understanding-the-problem-domain-is-the-hardest-part-of-programming)

- Learning the problem domain is the hardest part of learning to code.
- Repetition!!!! and familiarity 
- It's easier to produce something based off of something you've already done.
- It's harder to learn more than one thing at a time. 
- Identify the problem clearly and on a smaller scale for an easier solution. Basically break down the probelm into smaller problems to tackle.
- As programmers, we also are often not given complete information about the problem domain, so we don’t even have the information we need to understand it.
- "I was essentially given the entire problem domain in the form of a spec that was clear and unambiguous.  I was easily able to learn that problem domain and because of it, I was able to write the code very easily as well."
- **Careful** "I’ve spent days trying to implement a feature only to finally go back and talk to a product owner and hash out completely how something should work and why it should work in a particular way, only to go back to my desk and crank out the code in a matter of hours."
- **Solution** 
  1. Make the problem domain easier
  1. Get better at understanding the problem domain

## JS Book Chapter 3 "Object Literals" (page 100-105)
- Objects group together a set of variables and functions to create a model of something you would recognize from the real world. In an object, variables and functions take on new names.
- In an object varibles become known as properties.
- And functions become known as methods.
- Objects use curly braces and store it within a variable.
- Literal notation- 

## JS Book Chapter 5 "Document Object Model" (page 183-242) 
<!-- **Will be updating this afternoon** -->
- DOM Document Object Model, specifiies how browsers should create a model of an HTML page and how JavaScript can access and update the contents of a web page while it is in the browser window.
- 4 types of nodes: document nodes, elements nodes, attribute nodes, and text nodes.
- Select element nodes by their id or class, attributes, tag name, or using CSS Selector.
- **NodeList** a method can return more than one node, called a NodeList, which is a collection of nodes.
**Methods that return single element:** page 192
  - getElementById('id')
  - querySelector('css selector') page 202
**Methods that return one or more elements (NodeList):** page 192
  - getElementsByClassName('class')
  - getElementsByTagName('tagName')
  - querySelectorAll('css selector')

**NodeLists** page 197
- getElementsByTagName('h1')
  -even though this query only returns one element, it still returns a NodeList because of potential for returning more than one element.
- getElementByTagName('li') page 201
  - returns four elements, one for each of the <li> elements on the page. They appreat in the same order as they do in the HTML page
- getElementByClassName('hot') page 200
  - NodeList contains only three of the <li> elements because we are searching for elements by the value of their class attribute, not tag name.
- querySelectorAll('li[id]')
  - this method returns four elements, one for each of the <li> elements on the page that have an id attribute

-There are two ways to select an item from a NodeList page 198
  - item() method
    - returns individual node from the NodeList
  - array syntax
    - preferred over item() method because it's faster!
    - if you repeatedly used the NodeList, store it as a variable. 


