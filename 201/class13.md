## Class 13 1/27/2021


### Review/Warm-Up:
- In HTML the stuff within tags should be of type string, and parseInt tries to convert anything into an integer.



## Data Persistence

- Data i

- The way we are going to persist data is through LocalStorage

## Local Storage
- An API (application programming interacing), just like the DOM, but this API is used to store data and allow it to persis within our file system.
  - Deep in the programming files of our browser, lives a little directory that stores our localStorage data
    - often stores tokens, ie saving passwords for facebook, gmail, etc. Stored within the browsers program files.
    - only accessible via a web browser
  - Each URL has is own little spot in our localStorage files.
  - Each URL has a limit of 5mg 
  - The data is always key-value pairs (just like an object), both the key and the value are strings.
  - The data goes away if the browser tells it to, or you as the developer clears it using the API.


## localStorage
- the API is accessible through the localStorage object within out runtime.
  - localStorage.setItem('') method for placing something in localStorage, passes a key and a value to store.

ie: 
localStorage.setItem('number', 0); 
displays in dev tools applications?

localStorage.getItem('key') returns 0 from the setItem above

localStorage.clear('key') method for clearing all values in localStorage.

localStorage.removeItem('key') method for removing a single item stored, by the key that's passed in.


JSON object, which is another js api, for manipluating objects
  - 'JSON.stringify' turns a javascript object or array, into a string
  - 'JSON.parse' turns a string that contains javascript object notation and converts it back into javascript object. 

event.preventDefault(); 
