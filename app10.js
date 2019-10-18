const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming'

let val;

val = firstName + lastName;

// Concentenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = "That's awesome, I can't wait";
val = 'That\'s awesome, I can\'t wait'; // Use backslash \ as escape char

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0]; // Index 0

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');

// Get last char
val = firstName.charAt(firstName.length - 1);


// substring()
val = firstName.substr(0,4); // index 0 to 4, include 0 exclude 4

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split()
val = str.split(' '); // Split by string in quotes in array
val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jack');

// includes()
val = str.includes('Brad') // Check if str includes the string
val = str.includes('foo') // Check if str includes the string

console.log(val);