// console.log("Hello World");
// console.error("Error");
// console.warn("This is Warn");


/// let (reassigned values) ,const

// const age = 30;
// age = 31;

// console.log(age);

/*
// String, Numbers, Boolean, null, undefined, Symbol(IS6)

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof x);
*/

/*
/// Concatenation (birbirine baglama)
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


// Arrays - variables that hold multiple values

// const numbers = new Array(1,2,3,4,5);

// const fruits = ['apples', 'oranges', 'pears'];

// console.log(fruits[1]);

const person = {
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

console.log(person);



