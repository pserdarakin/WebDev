/* Definition: A JavaScript library for building user interfaces. (A front-end framework)

codesandbox: browser based dev env which allows you to instantly deploy whatever it is you build.

ReactDOM.render(WHAT TO SHOW, WHERE TO SHOW IT);
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root")); root taken from .html => <div id="root"></div>

React works by creating this JSX files, uses compiler to achieve that and that compiler comes from require "react" module, and that module includes something called babel

Babel is a JavaScript compiler, its able to take next-generation JS like ES6, 7, 8 and compile it down to a version of JS that every browser can understand.

ReactDOM.render(<h1>Hello World!</h1><p>ADD PARAGRAPH</p>, document.getElementById("root")); if you will add another element it will crash. Cause render() method can only take a single HTML element.
Rather what we can do is, putting those 2 elements inside of div element.
*/

/* Javascript Expressions in JSX & ES6 Template Literals
- via JSX, we are able to implement HTML inside of the JS (example; ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));)

- also, we can implement JS -> HTML -> JS (inside of html we can also implement another JS) => you can do simply opening {} inside of the html elements and put the expressions inside.
except we can not write statements(ex. if/else) via curly braces.
explanation of expression vs statement;
const x = 5;
const y = getAnswer(); 
    expression; is a piece of code resolves to a value. In other words, becomes a value. 
    5 is already a value but for language interpreter its an expression. So it is resolves to the value 5. or 2+3 again resolves to the value 5.
    getAnswer(); also an expression cause it is going to give you the value.

    statement; is an instruction, an action.
    if-else, while loops, for loops, they just perform actions but they are not becoming value.

    Overall, you cannot put statement where its expected expression.

ES6 Template Literals; injection strings into a piece of JavaScript.

*/

/* JSX Attributes and Styling
if we will try something like; ReactDOM.render(<div><h1 class="heading">My Favourite Foods</h1>... this, it'll work but still Invalid DOM property Error, so its still render down as JavaScript, so we need to use className (its coming from JS)

*/