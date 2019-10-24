// If statements and comparison operators

const id = 100;

// EQUAL TO
// if (id == 101) {
//  console.log('CORRECT');
// } else {
//   console.log('Incorrect')
// }

// // EQUAL TO VALUE AND TYPE
// if (id === 100) {
//   console.log('CORRECT')
// }

// if (id !== 100) {
//   console.log('CORRECT')
// }


// test type and if undefined
if (typeof id !== 'undefined') {
  console.log(`The ID is ${id}`);
} else {
  console.log('No ID');
}

// TERNARY OPERATOR
console.log(id === 100 ? 'Correct' : 'Incorrect');