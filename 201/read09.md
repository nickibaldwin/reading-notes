## Reading 09: Forms and JS Events

## Forms 
### HTML Book Chapter 7, page 144-175
- Collect information from user
- Google search bar is example
- There are several types of **form controls**
  - Adding text
    - text-input (single line), password input, text area (multi line)
  - Making Choices
    - radio buttons, checkboxes, drop-down boxes
  - Submitting Forms
    -Submit buttons, image buttons, file upload


## Lists, Tables & Forms 
### HTML Book Chapter 14, page 330-357


## Events
### JS Book Chapter 6, page 243-292

- When you browse the web, your browser registers different types of events. Your script then responds to these events.
1. Interactions Create Events
  - clicks, hover, swipe, etc
1. Events Trigger Code
  - When an event occurs, different ode can be triggered when users interact with different parts of the page.
1. Code Responds to Users
  - The events can trigger the kinds of changes the DOM is capable of.
**Different Event Types** examples page 246

-**Fired or raised** when an event has occured it is said to be fired or raised.
- Events are said to **trigger** a function or script. 

- How events trigger Javascript aka **event handling**
1. Select the elemnt nodes you want the script to respond to.
1. Indicate whcih event on the selected nodes will trigger the response. AKA **binding** the element to the DOM.
1. State the code you want to run when the event occurs.


Bind an event to an element
- DO NOT USE HTML Event Handlers, bad practice, but may see old code.
- Traditional DOM Event Handlers 
  - DOM event handlers were introduced in the original specifications for the DOM. 
- DOM level 2 event listeners
  - Favored way of handling events! 
  - One event can trigger multiple functions, as a result, less likely to have conflicts between scripts on one page.

Event handlers example syntax (pg 252)
```javascript
//element.event = code
element.onevent = functionName;
```

**Event Listeners** page 254
```javascript
//element. event                  , code      , event flow;
        // METHOD- adds an event listener to the DOM element nodes
element.addEventListener('event', functionName[, Boolean]);

```

- You cannot have parentheses after the function names in event handlers or listeners, passing arguments requires a workaround.
- **Anonymous Function** wraps a function to be called at a later date. Sort of a workaroud bc we can't use the () in an event. page 256

**Event Flow** page 260 
- Event Bubbling - flows outwards, a > li > ul > body > html > document
- Event Capturing - flows inwards, document > html > body > ul > li > a

- Flow of events only really matters when your code has event handlers on an element and one of its ancestor or descendant elements. 

- The Event Object - page 262
  - When an event object occurs, the event object tells you information about the event, and the element it happened upon.

-Event Delegtion- page 266, chart on 268
  - Creating event listeners for a lot of elements can slow down a page, but event flow allows you to listen for an event on a parent element. 

**Diffferent Types of Events** page 271-292
- W3C DOM Events
- HTML5 Events
- BOM Events
- UI Events pg 272
  -load
  -unload
  -error
  -resize
  -scroll
  -focus or blur events pg 274
-Mouse Events pg 276
  -click, pg 277
  -dblclick, 
  -mousedown
  -mouseuo
  -mouseover
  -mouseout
  -mousemove
- Keyboard Events pg 280
  -input
  -keydown
  -keypress
  -keyup

Form Events pg 282
- Two events commonly used with forms- focus and blur, and validation

**Example EVENTS** page 290


