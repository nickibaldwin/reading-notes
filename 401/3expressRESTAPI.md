# Code 401: Advanced Software Development in Full-Stack Javascript

## Reading 03: Express REST API

1. Name 3 real world use cases where you’d want to change the request with custom middleware
    
    1. Change user name or password
    1. Store user name/password
    1. Encrypt passwords, credit card information, etc.
    [Stack Overflow](https://stackoverflow.com/questions/58925276/what-is-the-difference-between-a-route-handler-and-middleware-function-in-expres#:~:text=They%20are%20not%20middleware%20functions,they%20are%20only%20handler%20functions.)

1. True or false: The route handler is middleware?

    True but with a caveat - they are handler functions not middleware, unless they do include the use of next(), then they would be considered both. [Medium](https://medium.com/@selvaganesh93/how-node-js-middleware-works-d8e02a936113)

1. In what ways can a middleware function end the process and send data to the browser?

    next() ends the process


1. At what point in the request lifecycle can you “inject” middleware?

    After client, when it's working through the middleware stack within the server.

1. What can cause express to error with “Request headers sent twice, cannot start a second response”

    1. "Calling res.writeHead to early

    1. Calling res.redirect then setting more data

    1. Calling next after response has been returned"
    [End Your If](https://www.endyourif.com/cant-set-headers-after-they-are-sent/)


## Vocabulary Terms:

- Middleware: Middleware is a software that acts as an intermediary between two applications or services to facilitate their communication. [FreeCodeCamp](https://www.freecodecamp.org/news/what-is-middleware-with-example-use-cases/)

- Request Object: The request object is the main entry point for an application to issue a request to the Library - all operations on a URL must use a Request object. [W3 Schools](https://www.w3.org/Library/User/Using/Request.html#:~:text=The%20request%20object%20is%20the,must%20use%20a%20Request%20object.&text=A%20request%20object%20is%20registered,PUT%2C%20POST%2C%20or%20DELETE.)

- Response Object: An object defining the body for the response. [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response)

- Application Middleware: Gives you access to the req and res in the apps WRRC. [Medium](https://medium.com/@jamischarles/what-is-middleware-a-simple-explanation-bb22d6b41d01)

- Routing Middleware: Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router(). [Express](https://expressjs.com/en/guide/using-middleware.html#middleware.router)

- Test Driven Development: 
    1. Before you write implementation code, write some code that proves that the implementation works or fails. Watch the test fail before moving to the next step (this is how we know that a passing test is not a false positive — how we test our tests).
    1. Write the implementation code and watch the test pass.
    1. Refactor if needed. You should feel confident refactoring your code now that you have a test to tell you if you’ve broken something. [Medium](https://medium.com/javascript-scene/tdd-changed-my-life-5af0ce099f80)

- Behavioral Testing: In software engineering, behavior-driven development (BDD) is an Agile software development process that encourages collaboration among developers, QA, and non-technical or business participants in a software project. (Wiki)[https://en.wikipedia.org/wiki/Behavior-driven_development]