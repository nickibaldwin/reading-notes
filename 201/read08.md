## HTML/CSS book Chapter 15, "Layout" 

### Positioning Elements:
- Building Blocks pg 362
  - CSS treats HTML elements as if it is in its own box. This box is either a 
  
- **Block-level elements**
  - h1, p, ul, li, div

- **Inline Elements** 
  - img, b, i

- Block level elements can live inside of a parent element aka **containing elemet**.
- It is common to group a number of elements together inside an element like a div

-**Positioning Schemes** 
Use the following to control the positioning of elements (see page 363)
- Normal flow pg 365
  - every block level element sits on top of the next.
  position: static; 
- Relative flow pg 366
  - Moves element in relation to where it would have been in normal flow
  position: relative;
- Absolute positioning pg 367
  - The box is taken out of normal flow and no longer affects the elements on thep page
  position: absolute
- Fixed Position pg 368
  - type of absolute positioning the requires the position property to hvae a value of fixed.
  position: fixed;
- Floating Elements pg 370
  - Take an element in normal flow and place it as far to the left or right of the containing element as possible.
  position: float;
  - You can use float to place elements side-by-side (pg 371)
  - **Clearing Floats** allows you to say that no element within the same containing element should touch the left or right hand sides of a box pg 372
  - **Creating Multi-Column Layouts with Floats** pg 375
-Overlapping Elements pg 369
  - z-index aka stacking content
  - Organize the order in which elements are layered/appear on page

- Box offset tells the browser how far from the top or bottom and left or right the box should be placed.
- Z-index allows you to decide which box is on top when there is overlap.
- 

### Screen Sizes 
page 377
  - iphone4 960x640
  - ipad2 1024x768
  - 13" macbook 1280x800
  - 27" imac 2560x1440

-Typical to create pages around 960-1000 pixels wide


- **Fixed Layouts** do not change size as the user increases or decreases the size of their browser window. Uses pixels. page 381
- **Liquid Layouts** stretch or contract as the user increases or decreases the size of their browser window. Tend to use percentages. page 382

- Layout Grids page 387-394 for examples
- 960.gs.grid is 