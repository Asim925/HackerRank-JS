const numbers = [1, 1, 1, 2, 3, 3, 4];

let count = countOccurences(numbers, 1);

console.log(count);

// function 1

// function countOccurences(array, searchElement) {
//   let output = [];
//   if (!array.includes(searchElement)) return "invalid number";

//   for (let element of array) {
//     if (element === searchElement) output.push(element);
//   }
//   return `The number you gave has repeated : "${output.length}" times`;
// }

// function 2

// function countOccurences(array, searchElement) {
//   let count = 0;
//   for (let element of array) if (element === searchElement) count++;
//   return count;
// }

// function 3

// function countOccurences(array, searchElement) {
//   return array.reduce((accumulator, current) => {
//     const occurence = current === searchElement ? 1 : 0;
//     // check working
//     // console.log(accumulator, current, searchElement);
//     return accumulator + occurence;
//   }, 0);
// }
