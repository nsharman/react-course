'use strict';

// function square(x) {
//     return x * x;
// }

// const squareArrow = (x) => {
//     return x * x;
// }

// const squareArrow = (x) => x * x;

// console.log(squareArrow(8));

// const getFirstName = (firstName) => {
//     return firstName.split(' ')[0];
// }

var getFirstName = function getFirstName(firstName) {
  return firstName.split(' ')[0];
};

console.log(getFirstName('Andrew Mead'));
