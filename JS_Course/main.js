// console.log("Hello World");
// console.error("Error");
// console.warn("This is Warn");


/// let (reassigned values) ,const

// const age = 30;
// age = 31;

// console.log(age);

/* String, Numbers, Boolean, null, undefined, Symbol(IS6)

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof x);
*/

/* Concatenation (birbirine baglama)
console.log('My name is' + name + 'and I am' + age);
/// Template String
const hello = (`My name is ${name} and I am ${age}`);

console.log(hello);
*/

/* const s = 'Hello World';

console.log(s.length); // if has paranthesis its a method it means, executes the methdos and allows passing arguments or capturing the return value, without parantheses method name becomes and expression that evaluates to the method object.
console.log(s.toUpperCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));
console.log(s.split(', ')); */


/* Arrays - variables that hold multiple values

// const numbers = new Array(1,2,3,4,5);

// const fruits = ['apples', 'oranges', 'pears'];

// console.log(fruits[1]); */


/* const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city)

const {firstName, lastName, address: {city} } = person; // rather than assigning, its actually pulling out 

console.log(city);

person.email = '@gmail.com';

console.log(person); */

/* const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting w boss',
        isCompleted: true
    },
    {
        id: 1,
        text: 'Dentist appt',
        isCompleted: false
    }
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON); */


/* For (until it get true its gonna run)

for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for(let todo of todos) {
    console.log(todo.text);
} */

/* While (set the variable outside of the loop)
let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
} */

/* forEach, map, filter

todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {   // Maps is returning an array
    return todo.text;
});

console.log(todoText); 

const todoCompleted = todos.filter(function(todo) {   // Filter, lets say there are just completed ones (true)
    return todo.isCompleted == true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted);

// Those were functional programming */

/* === has to be equal data type and the value for == the value equality is enough
const x = 4;
const y = 11;

if(x > 5 || y > 10) {
    console.log('x is more than 5 or y is moren than 10');
} else if(x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}

// || = or, && = and */

/* ternary operator (?) 'if its true' : 'if its not true'
const x = 10; 

const color = 'green';

console.log(color);

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
} */


        
