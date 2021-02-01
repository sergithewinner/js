const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    userList.appendChild(li);
    // clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

// This is a simple one line comment

/* 
This is
a
multi
line
comment
*/

// How to use alert, console
// alert('Hello World');
// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is a warning');

// How to use let and const, var is deprecated(old way);
// let age = 30;
// age = 31;
// console.log(age);
//
// const age = 30;
// age = 31;
// console.log(age);
//
// let score;
// score = 10;
// console.log(score);
//
// let score;
// console.log(score);
//
// const score;
// score = 10;
// console.log(score);
//
// const score;
// console.log(score);
//
// const score = 10;
// console.log(score);

// Data types
//
// Primitive Data Types - directly assigned to the memory without resource:
// Strings, Numbers, Boolean, null, undefined, Symbol
//
// Strings:
// const name = 'John';
// Numbers:
// const age = 30;
// const rating = 4.5;
// Boolean:
// const isCool = true;
// Null:
// const x = null;
// Undefined:
// const y = undefined;
// let z;
// How to test the types
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// Concatenation(old way)
// const name = 'John';
// const age = 30;
// console.log('My name is ' + name + ' and I am ' + age);
//
// Template Strings/Literals
// const name = 'John';
// const age = 30;
// console.log(`My name is ${name} and I am ${age}`);
//
// const name = 'John';
// const age = 30;
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);

// String properties and string methods()
// Properties does not have collumns
// Method is a function that is associated with an object
// const s = 'Hello World!';
// console.log(s.length);
//
// const s = 'Hello World!';
// console.log(s.toUpperCase());
//
// const s = 'Hello World!';
// console.log(s.toLowerCase());
//
// const s = 'Hello World!';
// console.log(s.substring(0, 5));
//
// const s = 'Hello World!';
// console.log(s.substring(0, 5).toLocaleUpperCase());
//
// const s = 'Hello World!';
// console.log(s.split(''));
//
// const s = 'technology, computers, it, code';
// console.log(s.split(', '));

// Arrays
// Arrays - variables that hold a multiple values
//
// const numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers);
//
// const fruits = ['apples', 'oranges', 'pears', 10, true];
// console.log(fruits);
//
// const fruits = ['apples', 'oranges', 'pears', 10, true];
// console.log(fruits[1]);
//
// const fruits = ['apples', 'oranges', 'pears'];
// fruits[3] = 'grapes';
// console.log(fruits);
//
// const fruits = ['apples', 'oranges', 'pears'];
// fruits = [];
// fruits[3] = 'grapes';
// console.log(fruits);
//
// const fruits = ['apples', 'oranges', 'pears'];
// fruits[3] = 'grapes';
// fruits.push('mangos');
// fruits.unshift('strawberries');
// console.log(fruits);
//
// const fruits = ['apples', 'oranges', 'pears'];
// fruits[3] = 'grapes';
// fruits.push('mangos');
// fruits.unshift('strawberries');
// fruits.pop();
// console.log(fruits);
//
// const fruits = ['apples', 'oranges', 'pears'];
// fruits[3] = 'grapes';
// fruits.push('mangos');
// fruits.unshift('strawberries');
// fruits.pop();
// console.log(Array.isArray(fruits));
// console.log(Array.isArray('Hello'));
// console.log(fruits);
//
// const fruits = ['apples', 'oranges', 'pears'];
// fruits[3] = 'grapes';
// fruits.push('mangos');
// fruits.unshift('strawberries');
// fruits.pop();
// console.log(Array.isArray(fruits));
// console.log(Array.isArray('Hello'));
// console.log(fruits.indexOf('oranges'));
// console.log(fruits);

// Object literals
//
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   hobbies: ['music', 'movies', 'sports'],
//   address: {
//     street: '50 main st',
//     city: 'Boston',
//     state: 'MA',
//   },
// };
// console.log(person);
//
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   hobbies: ['music', 'movies', 'sports'],
//   address: {
//     street: '50 main st',
//     city: 'Boston',
//     state: 'MA',
//   },
// };
// alert(person);
//
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   hobbies: ['music', 'movies', 'sports'],
//   address: {
//     street: '50 main st',
//     city: 'Boston',
//     state: 'MA',
//   },
// };
// console.log(person.firstName);
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);
//
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   hobbies: ['music', 'movies', 'sports'],
//   address: {
//     street: '50 main st',
//     city: 'Boston',
//     state: 'MA',
//   },
// };
// const {
//   firstName,
//   lastName,
//   address: { street, city, state },
//   hobbies,
// } = person;
// console.log(firstName);
// console.log(lastName);
// console.log(street);
// console.log(city);
// console.log(state);
// console.log(hobbies);
//
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   hobbies: ['music', 'movies', 'sports'],
//   address: {
//     street: '50 main st',
//     city: 'Boston',
//     state: 'MA',
//   },
// };
// person.email = 'john@gmail.com';
// const { email } = person;
// console.log(email);
// console.log(person.email);
// console.log(person);

// Arrays of Objects
//
// const todos = [
//   {
//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: 'Dentist appt',
//     isCompleted: false,
//   },
// ];
// console.log(todos[1].text);

// Json
//
// Json Converter to send data to the server
// const todos = [
//   {
//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: 'Dentist appt',
//     isCompleted: false,
//   },
// ];
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// Loops
//
// For loop
//
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
//
// for (let i = 0; i <= 10; i++) {
//   console.log(`Foor Loop Number: ${i}`);
// }
//
// While loop
//
// let i = 0;
// while (i < 10) {
//   console.log(`While Loop Number: ${i}`);
//   i++;
// }
//
// Loop through arrays
//
// const todos = [
//   {
//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: 'Dentist appt',
//     isCompleted: false,
//   },
// ];
// for (let i = 0; i < todos.length; i++) {
//   console.log(`Foor Loop Number: ${i}`);
// }
//
// const todos = [
//   {
//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: 'Dentist appt',
//     isCompleted: false,
//   },
// ];
// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }
//
// const todos = [
//   {
//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: 'Dentist appt',
//     isCompleted: false,
//   },
// ];
// for (let todo of todos) {
//   console.log(todo.text);
// }

// High order array methods
//
// forEach - just loops,
// map - create array from an array,
// filter - create an array based on condition
//
// forEach
// const todos = [
//   {
//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: 'Dentist appt',
//     isCompleted: false,
//   },
// ];
// todos.forEach(function (todo) {
//   console.log(todo.text);
// });
//
// Map
// const todos = [
//   {
//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: 'Dentist appt',
//     isCompleted: false,
//   },
// ];
// const todoText = todos.map(function (todo) {
//   return todo.text;
// });
// console.log(todoText);
// filter
// const todos = [
//   {
//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: 'Dentist appt',
//     isCompleted: false,
//   },
// ];
// const todoCompleted = todos.filter(function (todo) {
//   return todo.isCompleted === true;
// });
// console.log(todoCompleted);
//
// Filter with Map
// const todos = [
//   {
//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: 'Dentist appt',
//     isCompleted: false,
//   },
// ];
// const todoCompleted = todos
//   .filter(function (todo) {
//     return todo.isCompleted === true;
//   })
//   .map(function (todo) {
//     return todo.text;
//   });
// console.log(todoCompleted);

// Conditionals
//
// const x = '10';
// if (x == 10) {
//   console.log('x is 10');
// }
//
// const x = 4;
// if (x === 10) {
//   console.log('x is 10');
// } else if (x > 10) {
//   console.log('x is greater than 10');
// } else {
//   console.log('x is less than 10');
// }
//
// const x = 4;
// const y = 11;
// if (x > 5 || y > 10) {
//   console.log('x is more than 5 or y is more than 10');
// }
//
// const x = 4;
// const y = 11;
// if (x > 5 && y > 10) {
//   console.log('x is more than 5 or y is more than 10');
// }
//
// const x = 6;
// const y = 11;
// if (x > 5 && y > 10) {
//   console.log('x is more than 5 or y is more than 10');
// }
//
// const x = 6;
// const y = 11;
// if (x > 5 && y > 10) {
//   console.log('x is more than 5 or y is more than 10');
// }
//
// if (x > 5) {
//   if (y > 10) {
//     console.log('x is more than 5 or y is more than 10');
//   }
// }
//

// Ternary Operator
//
// Assign variables based on condition
//
// const x = 11;
// const color = x > 10 ? 'red' : 'blue';
// console.log(color);

// Switches
// const x = 9;
// const color = x > 10 ? 'red' : 'blue';
// switch (color) {
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break;
//   default:
//     console.log('color is NOT red or blue');
//     break;
// }
//
// const x = 9;
// const color = 'green';
// switch (color) {
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break;
//   default:
//     console.log('color is NOT red or blue');
//     break;
// }

// Functions
//
// function addNums(num1, num2) {
//   console.log(num1 + num2);
// }
// addNums();
//
// function addNums(num1 = 1, num2 = 1) {
//   console.log(num1 + num2);
// }
// addNums();
//
// function addNums(num1 = 1, num2 = 1) {
//   return num1 + num2;
// }
// console.log(addNums());
//
// Arrow functions
//
// const addNums = (num1 = 1, num2 = 1) => {
//   return num1 + num2;
// };
// console.log(addNums());
//
// const addNums = (num1 = 1, num2 = 1) => console.log(num1 + num2);
// addNums(5,5);
//
// const addNums = (num1 = 1, num2 = 1) => num1 + num2;
// console.log(addNums(5, 5));
//
// const addNums = (num1 = 1, num2 = 1) => {
//   return num1 + num2;
// };
// console.log(addNums(5, 5));
//
// const addNums = (num1) => num1 + 5;
// console.log(addNums(5));
//
// const todos = [
//   {
//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: 'Dentist appt',
//     isCompleted: false,
//   },
// ];
// todos.forEach((todo) => console.log(todo));

// OOP
//
// 'Construction Functions' with prototypes & classes (including 'this' and 'Instatiate objects')
//
// // Construction Function
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = dob;
// }
// // Instatiate objects
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-6-1970');
// console.log(person1);
// console.log(person2.firstName);
//
// // Construction Function
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
// }
// // Instatiate objects
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-6-1970');
// console.log(person2.dob);
// console.log(person2.dob.getFullYear());
//
// // Construction Function
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
//   this.getBirthYear = function () {
//     return this.dob.getFullYear();
//   };
//   this.getFullName = function () {
//     return this.firstName + ' ' + this.lastName;
//   };
// }
// // Instatiate objects
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-6-1970');
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
//
// // Construction Function
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
//   this.getBirthYear = function () {
//     return this.dob.getFullYear();
//   };
//   this.getFullName = function () {
//     // return this.firstName + ' ' + this.lastName;
//     return `${this.firstName} ${this.lastName}`;
//   };
// }
// // Instatiate objects
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-6-1970');
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
//
// // Construction Function
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
//   // this.getBirthYear = function () {
//   //       return this.dob.getFullYear();
//   //     };
//   // this.getFullName = function () {
//   //   // return this.firstName + ' ' + this.lastName;
//   //   return `${this.firstName} ${this.lastName}`;
//   // };
// }
// Person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// };
// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };
// // Instatiate objects
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-6-1970');
// console.log(person2.getFullName());
// console.log(person1.getBirthYear());
// console.log(person1);
//
//
// // Class
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }
//   getBirthYear() {
//     return this.dob.getFullYear();
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// // Instatiate objects
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-6-1970');
// console.log(person2.getFullName());
// console.log(person1.getBirthYear());
// console.log(person1);

// DOM
//
// console.log(window);
// alert(1);
// // Single Element Selectors
// // console.log(document.getElementById('my-form'));
// const form = document.getElementById('my-form');
// console.log(form);
// // Multiple Element Selectors
//
// // Single Element Selectors
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1'));
// const form = document.getElementById('my-form');
// console.log(form);
// // Multiple Element Selectors
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));
//
// const items = document.querySelectorAll('.item');
// items.forEach((item) => {
//   console.log(item);
// });
//
// const ul = document.querySelector('.items');
// ul.remove();
//
// const ul = document.querySelector('.items');
// ul.lastElementChild.remove();
//
// innerHTML outerHTML innerText outerText textContent
//
// functional difference
// console.log(document.querySelector('.items').innerHTML);
// console.log(document.querySelector('.items').outerHTML);
// console.log(document.querySelector('.items').innerText);
// console.log(document.querySelector('.items').outerText);
// console.log(document.querySelector('.items').textContent);
//
// visual difference
//
// const ul = document.querySelector('.items');
// ul.firstElementChild.innerHTML =
//   '<h4>innerHTML Nothing will<br>break &copy</h4>';
// ul.children[1].innerText = '<h4>innerText Only HTML will<br>break &copy</h4>';
// ul.children[2].textContent =
//   '<h4>textContent also<br>only HTML will<br>break &copy</h4>';
// ul.children[3].outerHTML = '<h4>outerHTML Only CSS will<br>break &copy</h4>';
// ul.children[4].outerText =
//   '<h4>outerText everything will<br>break including html and css &copy</h4>';
//
// const btn = document.querySelector('.btn');
// btn.style = 'background:red';
//
// const btn = document.querySelector('.btn');
// btn.style.background = 'blue';
//
// const btn = document.querySelector('.btn');
// btn.style.background = 'blue';

// Events
// check commented lines one by one to feel the difference
//
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   // // console.log('click');
//   // // console.log(e);
//   // // console.log(e.target);
//   // // console.log(e.target.className);
//   // // console.log(e.target.id);
//   document.querySelector('#my-form').style.background = '#ccc';
// });
// document.querySelector('body').classList.add('bg-dark');
// document.querySelector('.items').lastElementChild.innerHTML =
//   '<h1 style="color:blue">Welcome</h1>';
//
// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseover', (e) => {
//   e.preventDefault();
//   // // console.log('click');
//   // // console.log(e);
//   // // console.log(e.target);
//   // // console.log(e.target.className);
//   // // console.log(e.target.id);
//   document.querySelector('#my-form').style.background = '#ccc';
// });
// document.querySelector('body').classList.add('bg-dark');
// document.querySelector('.items').lastElementChild.innerHTML =
//   '<h1 style="color:blue">Welcome</h1>';
//
// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseout', (e) => {
//   e.preventDefault();
//   // // console.log('click');
//   // // console.log(e);
//   // // console.log(e.target);
//   // // console.log(e.target.className);
//   // // console.log(e.target.id);
//   document.querySelector('#my-form').style.background = '#ccc';
// });
// document.querySelector('body').classList.add('bg-dark');
// document.querySelector('.items').lastElementChild.innerHTML =
//   '<h1 style="color:blue">Welcome</h1>';

// Form Script
//
// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// myForm.addEventListener('submit', onSubmit);
// function onSubmit(e) {
//   e.preventDefault();
//   console.log(nameInput.value);
//   console.log(emailInput.value);
// }
//
// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const userList = document.querySelector('#users');
// myForm.addEventListener('submit', onSubmit);
// function onSubmit(e) {
//   e.preventDefault();

//   if (nameInput.value === '' || emailInput.value === '') {
//     alert('Please enter fields');
//   } else {
//     console.log('success');
//   }
// }
//
// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// myForm.addEventListener('submit', onSubmit);
// function onSubmit(e) {
//   e.preventDefault();
//   if (nameInput.value === '' || emailInput.value === '') {
//     msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';
//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     console.log('success');
//   }
// }
//
// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');
// myForm.addEventListener('submit', onSubmit);
// function onSubmit(e) {
//   e.preventDefault();
//   if (nameInput.value === '' || emailInput.value === '') {
//     msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';
//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     const li = document.createElement('li');
//     li.appendChild(
//       document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
//     );
//     userList.appendChild(li);
//     // clear fields
//     nameInput.value = '';
//     emailInput.value = '';
//   }
// }
