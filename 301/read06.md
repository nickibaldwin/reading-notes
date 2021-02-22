# Code 301
## Reading 06: Node.js

-[NODE.js](https://www.sitepoint.com/an-introduction-to-node-js/)

## What is Node.js?
> "Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine." 

> "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google’s V8 JavaScript engine and libuv library." According to Stack Overflow

- "Node Is Built on Google Chrome’s V8 JavaScript Engine"

    - The V8 engine is open-source Javascript engine that runs Chrome.

- Node.js is a Javascript runtime.

- node -v ->console.log('Hello, world') -> node hello.js

- "Node.js Has Excellent Support for Modern JavaScript"

- "In addition to being the package manager for JavaScript, npm is also the world’s largest software registry. There are over 1,000,000 packages of JavaScript code available to download, with billions of downloads per week."

- Installing via npm, running via Node

- "They can be used for anything from bundling your JavaScript files and dependencies into static assets, to running tests, or automatic code linting and style checking."

- Need to know these for future of using Javascript framework ie React or Angular.
"This isn’t because you need a Node back end to run these frameworks. You don’t. Rather, it’s because these frameworks (and many, many related packages) are all available via npm and rely on Node to create a sensible development environment in which they can run."

- Node.js Lets Us Run JavaScript on the Server

- **Node.js is event-driven**, which means that everything that happens in Node is in reaction to an event.

    - "For example, when a new request comes in (one kind of event) the server will start processing it. If it then encounters a blocking I/O operation, instead of waiting for this to complete, it will register a callback before continuing to process the next event. When the I/O operation has finished (another kind of event), the server will execute the callback and continue working on the original request. Under the hood, Node uses the libuv library to implement this asynchronous (that is, non-blocking) behavior."

- Node's execution model causes the server little overhead and in turn can handle a large number of simultaneous connections. 

![](301/assets/2021-02-22-08-11-01.png)

- Node runs in single thread, so there are limitations- "blocking I/O calls should be avoided, CPU-intensive ops should be handed off to a worker thread, and errors should always be handled correctly for fear of crashing the entire process." 

- "Hello World" - Server Version
![](301/assets/2021-02-22-08-15-24.png)


- Node is suited for applications that require some form of real-time interaction or collaboration ie chat sites or CodeShare (you watch a document be edited live by someone else.)

- "Another of Node’s big pluses is that it speaks JSON. JSON is probably the most important data exchange format on the Web, and the lingua franca for interacting with object databases (such as MongoDB)."

- **"Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google’s V8 JavaScript engine and libuv library."**