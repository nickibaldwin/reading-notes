## Reading 10: Debugging

### JavaScript book Chapter 10, Error handling and debugging

#### Execution Contexts
Every statement of script lives in one of these:
- Global Context - covers entire pare
- Function Context - each funtion has its own function context
- Each time a script enters a new execution context, there are two phases of activity:
  1. Prepare- the new scope is created; variables, functions, and arguments are created
  1. Execute- Now it can assign values to variables; reference functions and run their code; execute statements.
### Variable Scope
The first two execution contexts correspond with the notion of scope
- Global Scope - If a variable is declared outside a function, it can be used anywhere because it has global scope. If you do not use the var keyword when creating a variable, it is placed in global scope.
- Function-Level Scope - When a variable is declared within a function, it can only be used within that function. This is bc it has function-level scope.

### The Stack 
-diagram pg 454

- Hoisting- calling a function before it has been declared. Assign a value to a variable that has not been declared.

- Functions in Javascript are said to have a lexical scope. They are linked to the object they were defined within. So for each execution context, the scope is the current execution context's variables object, plus the variables object for each parent execution context. pg 457

- Exception-handling code informs users when there is a problem. 

- You can use a set of statements to **handle** the error. pg 480

- Error objects can help you find where your mistakes are and browsers have tools to help you read them. 

### What to do with errors
1. Debug the scrpit to fix the errors
1. Handle errors gracefully 

### Debugging Workflow
- Where is the problem?
- What exactly is the problem? 

Console.log examples pg 471/472
console.group for grouping messages together pg 473
console.table for outputting a table
console.assert test if a condition is met pg 475

- Breakpoints- you can pause the execution of a script on any line using breakpoints. Then you can check the values stored in variables at that point in time.

Stepping through the code example pg 477

-Create a breakpoint in your code using debugger keyword. pg 479

**Try, Catch, Finally**
If you know your code might fail
pg 480 code example

Debugging tips and common errors pg 484-485