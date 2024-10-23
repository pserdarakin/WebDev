/* methods on string (by default its a primivite)
const s1 = 'Hello'
console.log(typeof s1); */

/* can create string as object
const s2 = new String('Hello');
console.log(typeof s2); */

/* DOM object
console.log(window);
window.alert(1);
console.log(navigator.appVersion); */

/* Object Literal
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(book1.getSummary());
console.log(Object.values(book2));
console.log(Object.keys(book2)); */

/* Writing 2 same functions for different objects were pain in the ass 
So, you need CONSTRUCTOR for that
*/

// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Instatiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Dpe', '2015');

console.log(book1);
