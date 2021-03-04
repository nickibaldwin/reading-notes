# Code 301

## Reading 12: EJS Partials

## [EJS Partials](https://medium.com/@henslejoseph/ejs-partials-f6f102cb7433)

- "Partials come in handy when you want to reuse the same HTML across multiple views.
- Think of partials as functions, they make large websites easier to maintain as you don’t have to go and change a piece of text in every page it appears in. Instead, you define that reusable bundle of code in a file andinclude it wherever you need it."
- IE great for headers/logos/footers, that you want to appear the same from page to page.

![](/301/assets/2021-03-02-08-04-41.png)
- Now defined, they may be used on the home.ejs or the post.ejs templates.
- Use <% %> delimiters.
- "Including a partial in EJS is quite straightforward. You use <%- include( PARTIAL_FILE ) %> where the partial file is relative to the template you use it in."

- views/homes.ejs nav bar and footer (below):
![](/301/assets/2021-03-02-08-08-39.png)

![](/301/assets/2021-03-02-08-09-45.png)



## [EJS Video](https://www.youtube.com/watch?v=3_xEEH4fTEk&t=0s&index=7&list=PL7sCSgsRZ-slYARh3YJIqPGZqtGVqZRGt)

Partials - native to EJS
    - use cases: nav bar, footer, other info that stays static.

- layout.ejs ->
  - <%- include ('partials/onepartial') %> ->
  - new folder (onepartial) path-> views/partials/onpartial.ejs (views is NOT POTATO, must be "views" with S)
  - nodemon
  - should be able to see on localhost
