// function getMax(array) {
//   let max = array[0];
//   for (let i = 1; i <= array.length; i++) if (max < array[i]) max = array[i];
//   return max;
// }

// 2nd way |===>
const numbers = [1, 2, 3];

console.log(getMax(numbers));

function getMax(array) {
  return array.reduce((a, b) => (a < b ? b : a));
}
// console.log(accumulator, current); // check to understand

// a is accumulator
// b is current value
