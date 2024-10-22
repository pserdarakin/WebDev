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

/* function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}
console.log(addNums(5,5));


const addNums = (num1 = 1, num2 = 1) => num1 + num2; // you dont even need to put return for this structure.
// you can put your return and paranthesis back as well
console.log(addNums(5, 5));
*/

// Object Oriented Programing 

/* Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
} */

/* Class // Its basically samething with construstor function but more organised way, and you dont need to deal with prototypes

class Person {
    constructor(firstName, lastName, dob) {    // Just like the constructor function above, Same stuff inside of the paranthesis "properties"
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }                    
    getBirthYear() {// Any method we want to put in 
        return this.dob.getFullYear(); // Functionality
    }
    
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '7/1/1999');
const person2 = new Person('Mary', 'Smith', '6/14/1996');


console.log(person1);
console.log(person2.getFullName()); */

// Document Object Model = Its a tree structure of your whole documents 

/* Element Selectors Selection - Picking up some elements from html, css etc. 

console.log(window); // window object is the parent object of the browser, so its like very top; window.alert(1); == alert(1);

// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1')); // as it is a single element selector, even tho there are more than elements its going to pick the first one

// Multiple Element Selectors
console.log(document.querySelectorAll('.item')); // NodeList == similar like arrays 
console.log(document.getElementsByClassName('item')); // HTMLCollection, you need to manually converted to in an array, stick with the query selector 
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item)); */

/* Manupilating DOM

const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red'; */

/* const btn = document.querySelector('.btn');

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
}); */

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields'; // simple way; alert('Please enter fields');
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(li);

        // Clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }
}