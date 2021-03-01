# Code 301
## Reading 04: CSS Flexbox and Grid

-[Grid Garden CSS Tutorial](https://cssgridgarden.com/)


-[Common Responsive Layouts with CSS Grid (and some without!](https://medium.com/samsung-internet-dev/common-responsive-layouts-with-css-grid-and-some-without-245a862f48df)

-[RegExr Cheatsheet](https://regexr.com/)

-[A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)


### [Common Responsive Layouts with CSS Grid (and some without!](https://medium.com/samsung-internet-dev/common-responsive-layouts-with-css-grid-and-some-without-245a862f48df)

To learn CSS layouts try copying other CSS layouts and adjust for my own liking, until I better understand and can do off the cufff.

"grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

The **repeat()** function takes two arguments, the first will define the number of column tracks and the second, what width the tracks should be."

**object-fit: cover**
To stop the images from stretching out of proportion

**grid-gap** property
"Defines the size and space between the row/column."

**Article Examples:**

Full Page Image Gallery

"https://cat-grid.glitch.me/ — Example
https://glitch.com/edit/#!/cat-grid — Code"

Card Layout

"https://card-layout.glitch.me/ — Example
https://glitch.com/edit/#!/card-layout — Code"

Holy Grail Layout 

"https://grid-grail.glitch.me/ — Example
https://glitch.com/edit/#!/grid-grail — Code"

### [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

display: grid (block level)
display: inline-grid (inline)

Properties for the Children (**Grid Items**):
"Note:
float, display: inline-block, display: table-cell, vertical-align and column-* properties have no effect on a grid item."


Grid: 
![](/301/assets/2021-02-18-12-13-40.png)


Flexbox:
![](/301/assets/2021-02-18-12-30-10.png)


Footer goes in body? 

To make the nav bar stick:
nav {
    position: fixed;

}

main {
    top: 100px;
}

![](/301/assets/2021-02-18-12-35-10.png)