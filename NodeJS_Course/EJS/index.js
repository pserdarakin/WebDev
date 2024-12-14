/* EJS (Embedded JavaScript templates) Tags
<%= variable %>  var name = "angela" => angela so its interperet js with output // JS Output
<% console.log("hello") %> inside of html you can run JS codes // JS Execute but this will not give an output
<%- <h1>Hello</h1> %> its going to be render as html // Render HTML
<%%  %%> escaping from ejs tags 
<%# This is a comment %>  // Stop Execution
<%- include("header.js") %> // Insert another EJS file, instead of writing header and footer each time you can just implement 
*/

/* EJS & Passing Data: Passing data from server to client and client to server
reminder; Server -> EJS, we were using res.render("index.ejs") and any sort of data to be rendered, data has property value which can be picked up by ejs tags inside the .ejs file
format; res.render("index.ejs", data)
-What if there is no Data? => ejs not workins as traditional programming language mentality by mean that is it is not going to look for the variable instead it will try to use directly and the outcome will be just crash.
-What can be done => inside the .ejs file `locals` property can be use to assure to access all the rendered .js file

EJS -> Server (to store it or smth)
form -> server 

 */