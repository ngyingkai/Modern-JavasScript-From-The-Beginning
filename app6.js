// // var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $ for naming variables
// // Can not start with a number

// // Multi word vars, Naming conventions
// var firstName = 'John'; // Camel case, Recommended
// var first_name = 'Sara' // Underscore
// var FirstName = 'Tom'; // Pascal case, recommended for OO programming
// var firstname; // Not recommended

// // LET
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST, cannot be changed and reassigned
// const name = 'John';
// console.log(name);
// Can not be reassigned
// name = 'Sara';
// Have to be assigned a value
// const greeting; Cannot be initialised

// person object
const person = {
  name: 'John',
  age: 30
}

// Can change person inside but cannot change the object?
person.name = 'Sara'

console.log(person)

const numbers = [1,2,3,4,5];
numbers.push(6); // Can mutate

// numbers = [1,2,3]; // Cannot reassign const numbers

console.log(numbers);

// Use const to show that value should not be reassigned