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

Find; Find the first item that matches from an array.

FindIndex; Find the index of the first item that matches.
*/

/* 9a) Arrow Functions

const newNumbers = numbers.map( function(x) {
    return x*x;
}) // This version will tell us there is function inside of function and that functions is a anonymous function

const newNumbers = numbers.map( (x) => {
    return x*x;
}) // Arrow functions let us make it more simple without function name just using arrow (fat arrow)

*/

/* 10) Conditional Rendering; Each component should be single responsibility => Single responsibility principle; 
converting statement to expression, so that can be used inside of the jsx => 
    Ternary Operator;
    CONDITION ? DO IF TRUE : DO IF FALSE 
    (condition; we define)
    ?; After ? we say do this if true
    Do if false if the condition is false 

    example; 
    isCloudy === true ? bringUmbrella() : bringSunscreen()
    if its cloudy probably gonna rain, so ternary operator in your brain will say;
    if isCloudy is true, then bringUmbrella, otherwise bringSunscreen

Thats how you will end up with ... ? .... : .... 3 expression and the whole thing is become expression.

    && in JS

    (EXPRESSION && EXPRESSION)
    var x=5;
    (x > 3 && x < 7) => true && true = true
    if x = 1 => false (1st expression) its going to be false its just checking the first one
    so JS using this as leverage to do; 
    CONDITION && EXPRESSION
    TRUE && EXPRESSION => You can put your condition in first one rather than ternary operator.
    they are not trying to check if the both side are true the purpose is to render something

*/

/* 11) State in React 
UI = f(State); Ice = f(-10C) && Water = f(60C)

function App() {

    var isDone = false; // State variable

    const strikeThrough = {textDecoration: "line-through"};

    return <p style={isDone ? strikeThrough : null}>Buy milk</p>;

}

This kind of programming is Declarative Programming, how user interace look under different conditions, depended upon state. 

The other version would be Imperative Programming, when we say document.getElementById("root").stlye.textDecoration = "line-through";

*/

/* 12) useState Hook; functions that allow us hooking the state and read or modify it
UI = f(State) -Hooks-> UI = f()
*/


// var count = 0; {/* 2) */}
// function increase(){
//     count ++; {/* 5) behind its increasing the number, however it is not "rendering" and we are not seeing in the UI. you can recall reactom.render again again but its not efficent. 
//         So, for this case we can use useState hooks but  you need to implement via function*/}
// } {/* 4) */}

// ReactDom.render(
//     <div className="container">
//         <h1>{count}</h1>
//         <button onClick={increase} >+</button>  {/*1) How can we get this button to triger upgrade the number*/} {/* 3) on-click action we can assign a function */}
//     </div>,
//     document.getElementById("root")
// )


/* const state = useState(STARTING STATE)

so you can hold that value via state[0] its because its an array (const state), but its hard to follow so;

Destructring; Allows us to destructure a complex structure. Complex things in JS are objects and arrays

**    const rgb = [9, 132, 227] // Destructure array => const [red, green, blue] = [9, 132, 227] => Each element will be mapped with in order.

So, we can change as follow to;
    const [count] = useState(34)
    so you can use as console.log(count)

For the function part which is second part of the useState;
    const [count, setCount] = useState(0);

    function increase(){
        setCount(count + 1)
    }
    
    
*/

/* 17) Spread Operator; 

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Banana", "Coconut"]

main goal is to trying to put citrus array into fruits array, Lime to Coconut etc. 
spread operator will be used as; const fruits = ["Apple", "Banana", "Coconut", ...citrus]; or const fruits = ["Apple", ...citrus, "Banana", "Coconut"];
basically expanded(spreaded) fruits array with citrus array 

const fullName = {
    fName: "James",
    lName: "Bond"
}

const user = {
    ...fullName,
    id: 1,
    username: "jamesbond007"
}

JS set object key by variable
You need to make the object first, then use [] to set it. Otherwise, it will see as string rather than key variable.

function handleChange(event) {
    
    const {name,value} = event.target;

    setContact(prevValue => {
        return {
            ...prevValue,
            [name] : value
        };
        })
}

you can make that code shorter to = > 

    setContact(prevValue => ({...prevValue, [name]: value}));



*/

/* 18) Managing a Component Tree 

seperate the components; heading area, div area with input button, li items seperate

before when we take it out and use props those were stateless cause it wasnt affecting the state.


*/
