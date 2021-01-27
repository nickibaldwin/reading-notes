## Reading 13: Local Storage 
```html
<a href="http://diveinto.html5doctor.com/storage.html">Article Here</a>
```

### Local Storage
- Cookies slow down application and only store about 4KB of data. Not a great option.
- What we really want is
  - a lot of storage space
  - on the client
  - that persists beyond a page refresh
  - and isn’t transmitted to the server
> prior to HTML5 all attempts to achieve this were ultimately unsatisfactory in different ways.

### Local Storage Pre HTML5
- Internet Explorer is the og browser, Microsoft
- userData allows web pages to store up to 64 KB of data per domain.
- Trusted domains, such as intranet sites, can store 10 times that amount.


### HTML5 Storage
- Certain browser vendors also refer to it as “Local Storage” or “DOM Storage.”
- "So what is HTML5 Storage? Simply put, it’s a way for web pages to store named key/value pairs locally, within the client web browser. Like cookies, this data persists even after you navigate away from the web site, close your browser tab, exit your browser, or what have you. Unlike cookies, this data is never transmitted to the remote web server (unless you go out of your way to send it manually). Unlike all previous attempts at providing persistent local storage, it is implemented natively in web browsers, so it is available even when third-party browser plugins are not." 
- The latest versions of basically every browser support HTML5 Storage.
- Based on key-value pairs, you store data based on named key, then you can retrieve that data with the same key (stored as a string). 
- "If you are storing and retrieving anything other than strings, you will need to use functions like parseInt() or parseFloat() to coerce your retrieved data into the expected JavaScript datatype."

- Check for HTML5 Storage

```javascript
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
// Instead of writing this function yourself, you can use Modernizr to detect support for HTML5 Storage.

if (Modernizr.localstorage) {
  // window.localStorage is available!
} else {
  // no native support for HTML5 storage :(
  // maybe try dojox.storage or a third-party solution
}


// Use HTML5 Storage
interface Storage {
  getter any getItem(in DOMString key);
  setter creator void setItem(in DOMString key, in any data);
};

```

- "If you want to keep track programmatically of when the storage area changes, you can trap the storage event. The storage event is fired on the window object whenever setItem(), removeItem(), or clear() is called and actually changes something. For example, if you set an item to its existing value or call clear() when there are no named keys, the storage event will not fire, because nothing actually changed in the storage area.

The storage event is supported everywhere the localStorage object is supported, which includes Internet Explorer 8. IE 8 does not support the W3C standard addEventListener (although that will finally be added in IE 9). Therefore, to hook the storage event, you’ll need to check which event mechanism the browser supports. (If you’ve done this before with other events, you can skip to the end of this section. Trapping the storage event works the same as every other event you’ve ever trapped. If you prefer to use jQuery or some other JavaScript library to register your event handlers, you can do that with the storage event, too.)"

```javascript
if (window.addEventListener) {
  window.addEventListener("storage", handle_storage, false);
} else {
  window.attachEvent("onstorage", handle_storage);
};

The handle_storage callback function will be called with a StorageEvent object, except in Internet Explorer where the event object is stored in window.event.

function handle_storage(e) {
  if (!e) { e = window.event; }
}
``` 
At this point, the variable  will be a StorageEvent object, which has the following useful properties.