/* 1) Definition: A JavaScript library for building user interfaces. (A front-end framework)

codesandbox: browser based dev env which allows you to instantly deploy whatever it is you build.

ReactDOM.render(WHAT TO SHOW, WHERE TO SHOW IT);
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root")); root taken from .html => <div id="root"></div>

React works by creating this JSX files, uses compiler to achieve that and that compiler comes from require "react" module, and that module includes something called babel

Babel is a JavaScript compiler, its able to take next-generation JS like ES6, 7, 8 and compile it down to a version of JS that every browser can understand.

ReactDOM.render(<h1>Hello World!</h1><p>ADD PARAGRAPH</p>, document.getElementById("root")); if you will add another element it will crash. Cause render() method can only take a single HTML element.
Rather what we can do is, putting those 2 elements inside of div element.
*/

/* 2) Javascript Expressions in JSX & ES6 Template Literals
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

/* 3) JSX Attributes and Styling
if we will try something like; ReactDOM.render(<div><h1 class="heading">My Favourite Foods</h1>... this, 
it'll work but still Invalid DOM property Error, so its still render down as JavaScript, so we need to use className (its coming from JS)

HTML Global Attributes: https://www.w3schools.com/tags/ref_standardattributes.asp inside of here it is contenteditable(no camel case) but for convention,
we need to use camel case inside of the code line example: <div><h1 class="heading" contentEditable>My Favourite Foods</h1>... 
*/

/* 3a) Inline Styling in JSX

{
    key:value
}
as like JS objects. 
{
    color:"red",
}

for some reasons if you want to change;

const customStyle = {
    color:"red",
    fontSize: "20px", // font-size was the original from css library.
    border: "1px solid black" //has to be string
}

customStyle.color = "blue"; 

... <h1 style= {customStyle}...

*/

/* 4) React Components: Allow us to split up a large file or a complex web structure into smaller components. Also, reusing same functionality.

<Heading /> // for convention if there is no text between the tags.(self-closing tag)
Best practices: https://github.com/airbnb/javascript/tree/master/react

index.js file will be leave at as plain JavaScript file and Heading.jsx will host all the components seperated into individual files with the jsx extension.

*/

/* 6) React Props: Repatitive elements (card example with function), give us a chance to create custom attributes like inside of the html tags.
function

Summary; with Html attributes we have the Html tag and we have a space and we get to use these predetermined fixed name attributes such as id, placeholder or value. Those are depend on the actual element that we are using
example; <input id="" placeholder="" value=""/> and when we use these attributes we can pass in some custom data and can be accessed via document.getElementById("email") etc.

When it comes to React Props what we have is a very similar structure;
    <Card 
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
      tel="+123 456 789" 
      mail="b@beyonce.com"
    />

But these values for each of these props then gets passed along when this Card component is created and when we output this HTML element, we can incorporate those properties into the creation of that element.

    function Card(props){
    return (
        <div>
        <h2>{props.name}</h2>
        <img
            src= {props.img}
            alt="avatar_img"
        />
        <p>{props.tel}</p>
        <p>{props.mail}</p>
        </div>
    );
    }

Simply that you are creating a new JavaScript Object with these key and value pairs, and then the whole object gets sent over as the props object and then you can tap into it using .name, .tel as long as they match up with the names in your component element.

*/

/* 7) React Dev Tools; Custom components to seperate it out. Using for debug. (chrome and firefox only)

*/

/* 8) Mapping Components: mapping each of the component

*/

/* 9) Map/Filter/Reduce Functions

Map; Loop through an array and create a new array by doing something with each item in an array.

    var numbers = [3, 56, 2, 48, 5];
    numbers.map(callbackfunction) // passing function inside of a function.

Filter; Create a new array by keeping the items that return true. (conditions)

    numbers.filter(function(num) {
        return num > 10
    });

Reduce; Accumulate a value by doing something to each item in an array.
*/