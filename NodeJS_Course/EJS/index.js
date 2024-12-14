/* EJS (Embedded JavaScript templates) Tags
<%= variable %>  var name = "angela" => angela so its interperet js with output // JS Output
<% console.log("hello") %> inside of html you can run JS codes // JS Execute but this will not give an output
<%- <h1>Hello</h1> %> its going to be render as html // Render HTML
<%%  %%> escaping from ejs tags 
<%# This is a comment %>  // Stop Execution
<%- include("header.js") %> // Insert another EJS file, instead of writing header and footer each time you can just implement 
*/