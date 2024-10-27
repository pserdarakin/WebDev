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

/* Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;    
    }
}

// Instatiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Dpe', '2015');

console.log(book1); */

/* Prototype (for function instead of putting constructor we can use prototype)

// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

// getAge
Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};

// Revise / Change Year
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
};

// Instatiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Dpe', '2015');

console.log(book2);
book2.revise('2018');
console.log(book2);
*/

/* Inheritance 

// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Magazine Constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1.getSummary()); // if you ll do just that you cannot inherit the prototype so add the above line

// Object of Protos
const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

// Create Object
const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'John DOne';
book1.year = '2013';

const book2 = Object.create(bookProtos, {
    title: { value: 'Book One'},
    author: { value: 'John One'},
    year: { value: '2013'},
}); */

/* Classes

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    // If we wanted add method in our class;

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    // Static method; having a method in your class without instatiating object like we did below (if you are using something spesific to that instant you would not use the static method)
    static topBookStore() {
        return 'Barnes & Noble';
    }
}

// Instantiate Object
const book1 = new Book('Book One', 'John Doe', '2013');


// console.log(book1);
// book1.revise('2019');
// console.log(book1);

// book1.topBookStore(); // You need to run in an actual class
console.log(Book.topBookStore()); */

// Subclasses

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    // If we wanted add method in our class;

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Magazine Subclass
class Magazine extends Book {
    constructor(title, author, year, month) {
        // in order to call the parent constructor write 'super()', and pass the original parameters
        super(title, author, year);
        this.month = month;
    }
}

// Instantiate Magazine
const mag1 = new Magazine('Mag One', 'John Doe', '2024', 'Jan');

console.log(mag1.getSummary());