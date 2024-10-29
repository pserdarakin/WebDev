/* What is Node.js
- Node.js is an open-source JS runtime (runtime; program or an enviroment that runs other programs)
- server-side & networking apps/apis (like python, php) */

/* How Node.js Works
- Node is built on top of the V8 JS Engine, it takes your JS code and converts it into machine code, so that your computer can udnerstand
and node has taken this engine and extended it to work on the server side. 
- Non-Blocking; It doesnt wait around for I/O (input/output) operations i.e. Network calls, file system operations, database operations, 
Instead of blocking the execution of code while waiting for these things to happen or to complete, nodejs uses events and callbacks and this allows to handle 1000 of connections at the same time, thats why its fast and efficient
- Single Threaded (Thread; set of instructions that your computer executes)
- Event Loop; Allowing to perform non-blocking IO operations 
Example; Event Loop; Giant Door, Task or Operations: Person, => Person walks into the building thats initiating a task instead of waiting for them to complete their business inside the mall we'll call the task execution, nodejs keeps the revolving door spining signifying the event loop.

// Use For
- APIs, Server-rendered apps, Real-time applications, microservices, command line tools, bots, web scraping, web servers
- Start with npm -init => package.json file createation 
*/

// Default export module, first we created utils.js and some function in it then using module.exports for function and in the index use the require object to initiate 

import getPosts, { getPostsLength } from "./postController.js";

console.log(getPosts());

console.log(`Posts Length: ${getPostsLength()}`);

// const {generateRandomNumber, celciusToFahrenheit} = require('./utils');

// console.log(`Random Number: ${generateRandomNumber()}`);

// console.log(`Celcius to fahrenhiet: ${celciusToFahrenheit(0)} `);

/* Postman 
Client to make requests
If you are creating API this is how you are testing your route without having any frontend
*/



