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

/* Node Read Eval Print Loop (REPL)
 is a computer environment where user inputs are read and evaluated, and then the results are returned to the user.
to initiate type `node` 

console.log("Hello from Node!"); */ 

/* Native Modules
 FileSystem module

const fs = require("fs");

fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});

fs.readFile("./message.txt", 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

*/

/* Node Package Manager (NPM)
`npm init` => package.json => a way of representing our data, the JS object notation
`npm install <package>` (npm i <package>) npmjs.com


var generateName = require("sillyname");
var sillyname = generateName();

console.log(`I am identify myself as ${sillyname}.`);

// CJS (CommonJS) : 
- This is the older module system used in Node.js.
- You use `require` to import modules

// ESM (ECMAScript Modules) : 
- This is the modern module system introduced in ES6 (2015).
- It uses `import` and `export` syntax, which is consistent with how JavaScript modules are handled in browsers

// ESM is consistent between frontend (e.g., browsers) and backend (Node.js), making your code cleaner and easier to maintain.

// To use ESM (import/export) in Node.js, you need to configure the "type" field in your package.json file. Here’s how:

1. Add "type": "module" to package.json

- Open your package.json file and add the "type": "module" field

2. Impact of "type": "module"

- When "type": "module" is set:
- All .js files will be treated as ESM by default.
- You must use import/export in your code.
- require won’t work anymore unless the file has a .cjs extension.

3. Switching Back to CommonJS

- If you prefer to use CommonJS (require/module.exports), set "type": "commonjs" or remove the "type" field entirely. This is the default behavior for Node.js.

import generateName from "sillyname";
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

----------------------------

import {randomSuperhero} from 'superheroes';

const name = randomSuperhero();

console.log(`${name}`); */

// Default export module, first we created utils.js and some function in it then using module.exports for function and in the index use the require object to initiate 

// import getPosts, { getPostsLength } from "./postController.js";

// console.log(getPosts());

// console.log(`Posts Length: ${getPostsLength()}`);

// const {generateRandomNumber, celciusToFahrenheit} = require('./utils');

// console.log(`Random Number: ${generateRandomNumber()}`);

// console.log(`Celcius to fahrenhiet: ${celciusToFahrenheit(0)} `);

/* Postman 
Client to make requests
If you are creating API this is how you are testing your route without having any frontend

*/



