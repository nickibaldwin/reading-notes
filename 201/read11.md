## Reading 11: Audio, Video, Images


### HTML Book Chapter 16: Images, pages 406-427
- When using a consistent size across a site, use a CSS page to call the size of photos, instead of inline on the HTML.
- CSS: display: block turns into block level element so text doesn't flow around it.
- Background images are last to load and can slow the system.
```CSS
 /* Background for entire site pg413  */
body {
  background-image:url("images/pattern.gif");}

/* Background image for paragraph only */
p{  
  background-image:url("images/pattern.gif");}
 
```
Background Images- repeating: page 414
repeat - image is repeated horizontally an vertically 
repeat-x- images is repeated horizontally
repeat-y - same but vertical
no-repeat - image shown once
fixed - background image stays in the same position on the page
scroll - moves up and down with the scroll

- Background position examples page 415

- CSS3 allows for gradient backgrounds, but not all browsers suuport that, so be sure to use an alt. page 419

- **Example IMG CODE** page 423



### Chapter 19: Practical Information page 476-492
- **SEO** 
  - Used to improve sites visability/near top of search
  -Often split into two areas- on-page techniques and off-page techniques 

- Off-Page Techniques:
  - SEO's look at how many other sites link to your page, which also boosts your page
  - 
- On-Page Techniques:
  - Methods used to improve ratings in search engines
  - Finding good keywords to use that people will search 
  - There are 7 essential places where you want your keywords to appear
  1. Page Title: lives inside the head
  1. URL/Web Address: Where possible use keywords in the file name
  1. Headings: headings in <hn> element then a search engine will know that this page is all about that subhect and give it greater weight than other text. 
  1. Text: Repeat keywords in main body of text 2-3 times, but do not over use, text must be easy for a human to read.
  1. Link Text: use keywords in the text to create links between pages, rather than saying "click here"
  1. Image Alt Text: provide accurate description of images 
  1. Page Descriptions: lives inside the head, and is specified under a <meta> tag. Should be a sentence that describes the content of the page. These are not shown in the browser window but they may be displayed in the results pages of search engines.

  Don't try to fool an SEO, they will penalize you.

  **How to identify keywords and phrases** page 481
  1. Brainstorm
  1. Organize
  1. Research - adwords.google.co.uk/select/KeywordToolExternal, wordtracker.com, keyworddiscovery.com
  1. Compare
  1. Refine
  1. Map

**Analytics** page 483- 486
- Google Analtyics is free and good!


### MDN Article, audio/video 
```HTML 
<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs">MDN Articles, A/V</a>
```
- HTML5 has <video> and <audio>
- Uses JavaScript 
- 
(FROM WEBSITE)
**Implementing the JavaScript** 
We've got a fairly complete HTML and CSS interface already; now we just need to wire up all the buttons to get the controls working.

Create a new JavaScript file in the same directory level as your index.html file. Call it custom-player.js.

At the top of this file, insert the following code:

const media = document.querySelector('video');
const controls = document.querySelector('.controls');

const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const rwd = document.querySelector('.rwd');
const fwd = document.querySelector('.fwd');

const timerWrapper = document.querySelector('.timer');
const timer = document.querySelector('.timer span');
const timerBar = document.querySelector('.timer div');
Here we are creating constants to hold references to all the objects we want to manipulate. We have three groups:

The <video> element, and the controls bar.
The play/pause, stop, rewind, and fast forward buttons.
The outer timer wrapper <div>, the digital timer readout <span>, and the inner <div> that gets wider as the time elapses.
Next, insert the following at the bottom of your code:

media.removeAttribute('controls');
controls.style.visibility = 'visible';
These two lines remove the default browser controls from the video, and make the custom controls visible.

