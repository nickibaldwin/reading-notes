JQuery Notes

Solo Learner Tutorial:

# Selectors:

https://www.sololearn.com/learning/1082/2790/6013/1 


$ call JQuery library 

$("#test") // select the element with the id="test"
$(".menu") //selects all elements with class="menu"

$("div.menu")  // all <div> elements with class="menu"

$("p:first")  // the first <p> element

$("h1, p") // all <h1> and all <p> elements

$("div p") // all <p> elements that are descendants of a <div> element

$("*")  // all elements of the DOM

### For HTML
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
        <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
    </head>
    <body>
    </body>
</html>

### JS
$(function() {
   // jQuery code goes here
});

# Attributes and Content

The **attr()** method also allows us to set a value for an attribute by specifying it as the second parameter. This will change the href attribute of the <a> element to the provided value.
$(function() {
  $("a").attr("href", "http://www.jquery.com");
});

You can also remove attributes from HTML elements.
The **removeAttr()** method is used for removing any attribute of an element. In the example below we remove the border and class attributes of the table:
$("table").removeAttr("border");
$("table").removeAttr("class");

The **html()** and **text()** methods can be used for all HTML elements that can contain content. **text()** removes html markups
### HTML
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
        <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
    </head>
    <body>
        <div id="test">
            <p>some text</p>
        </div>
    </body>
</html>

### js
$(function() {
    $("#test").text("hello!");
});
  The code above changes the content of the element with id="test" to "hello!".

  If the content you are setting contains HTML markup, you should use the html() method instead of text().


Another useful method is the **val()** method, which allows us to get and set the values of form fields, such as textboxes, dropdowns, and similar inputs. 

### HTML
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
        <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
    </head>
    <body>
        <input type="text" id="name" value="Your Name">
    </body>
</html>

### js

$(function() {
    alert($("#name").val());
});

**text()** sets or returns the text content of selected elements.
**html()** sets or returns the content of selected elements (including HTML markup).
**val()** sets or returns the value of form fields.
**attr()** sets or returns the value of attributes.
**removeAttr()** removes the specified attribute.

## Adding Content

**append()** inserts content at the end of the selected elements.
**prepend()** inserts content at the beginning of the selected elements.
**after()** inserts content after the selected elements.
**before()** inserts content before the selected elements.

The jQuery after() and before() methods insert content AFTER and BEFORE the selected HTML element. For example:
### HTML
<p id="demo">Hi</p>

### JS
$(function(){
    $("#demo").before("<i>Some Title</i>");
    $("#demo").after("<b>Welcome</b>");
});

The easiest way of creating a new HTML element with jQuery is the following:
### JS

var txt = $("<p></p>").text("Hi"); 

The code above creates a new <p> element, which contains the text Hi and assigns it to a variable called txt.
Now, we can use that variable as a parameter of the above mentioned methods to add it to our HTML, for example:
## HTML
<p id="demo">Hello</p>

### JS

$(function() {
  var txt = $("<p></p>").text("Hi");
  $("#demo").after(txt);
});

The above mentioned syntax for creating elements can be used to create any new HTML element, for example $("<div></div>") creates a new div.

# Manioulating CSS

jQuery has several methods for CSS manipulation.
The **addClass( )** method adds one or more classes to the selected elements.

### HTML
<div>Some text</div>

### CSS 
.header {
  color: blue;
  font-size:x-large;
}

### JS
$("div").addClass("header");

To specify multiple classes within the addClass() method, just separate them using spaces. For example, $("div").addClass("class1 class2 class3").

The **removeClass()** method removes one or more class names from the selected elements.

The **toggleClass()** method toggles between adding/removing classes from the selected elements, meaning that if the specified class exists for the element, it is removed, and if it does not exist, it is added.

### HTML
<p>Some text</p>
<button>Toggle Class</button>

### CSS
.red { 
  color:red; 
  font-weight: bold;
}

### JS
$(function(){
    $("button").click(function(){
        $("p").toggleClass("red");
    });
});

The code above toggles the class name "red" upon clicking the button.



Similar to the html() method, the css() method can be used to get and set CSS property values. 

### HTML
<p>Some text</p>

### CSS 
p {
  background-color:red;
  color: white;
}

### JS
$(function(){
    alert($("p").css('background-color"));
    $("p").css("backgroun-color", "blue");
});
The code above alerts the background-color property of the paragraph and then sets it to blue.

To set multiple CSS properties, the css() method uses JSON syntax, which is:

### JS
css({"property":"value","property":"value",...});

As you can see, the syntax consists of "property":"value" pairs, which are comma separated and enclosed in curly brackets { }.

$("p").css({"color"; "red", "font-size": "200%"});



## Dimensions

The **width() and height()** methods can be used to get and set the width and height of HTML elements.

Let's set both the width and height of a div to 100px, as well as set a background color for it:
$("div").css("backgroun-color", "red");
$("div").width(100);
$("div").height(100);

The width() and height() methods get and set the dimensions without the padding, borders and margins.
The **innerWidth() and innerHeight()**  methods also include the padding.
The **outerWidth() and outerHeight()** methods include the padding and borders. Does not include the margin by default. You need to pass the boolean value true in order for it to include the margin.

Visual Example @ https://www.sololearn.com/learning/1082/2806/5990/1



### HTML

<div></div>

### CSS 

div {
  width: 300px;
  height: 100px;
  padding: 10px;
  margin: 20px;
  border: 3px solid blue;
  background-color: red;
  color: white;
}

### JS

$(function() {
    var txt = "";
    txt += "width" + $("div".width() + " ";
    txt += "height" + $("div".height() + "<br/>";
    txt += "innerWidth" + $("div".innerWidth() + " ";
    txt += "innerHeight" + $("div".innerHeight() + "<br/>";
    txt += "outerWidth" + $("div".outerWidth() + " ";
    txt += "outerHeight" + $("div".outerHeight();

    @("div").html(txt);
});


# The DOM

The DOM represents a document as a tree structure where HTML elements are interrelated nodes in the tree.
Nodes can have child nodes. Nodes on the same tree level are called siblings.
jQuery traversing is the term used to describe the process of moving through the DOM and finding (selecting) HTML elements based on their relation to other elements.

jQuery makes it easy to traverse the DOM and work with HTML elements.


![](2021-02-14-16-09-34.png)

The <html> element is the parent of <body> and an ancestor of everything below it.
The <body> element is the parent of the <h1> and <a> elements.
The <h1> and <a> elements are child elements of the <body> element and descendants of <html>.
The <h1> and <a> elements are siblings (they share the same parent).

Summary
An ancestor is a parent, grandparent, great-grandparent, and so on.
A descendant is a child, grandchild, great-grandchild, and so on.
Siblings share the same parent.
