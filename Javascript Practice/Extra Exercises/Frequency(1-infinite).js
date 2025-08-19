// ========================++++++++++++ ARRAY METHOD ++++++++++++=========================//
/* function countNumbers(numbers) {
  let frequencies = [];

  for (let i = 0; i < numbers.length; i++) {
    let found = false;

    for (let j = 0; j < frequencies.length; j++) {
      if (frequencies[j][0] === numbers[i]) {
        frequencies[j][1]++;
        found = true;
        break;
      }
    }
    if (found === false) frequencies.push([numbers[i], 1]);
  }
  return frequencies;
}

let numbers = [1, 2, 3, 4, 7, 7, 7, 7, 7, 7, 7, 7, 3, 7, 7, 7];
let frequencies = countNumbers(numbers);
console.log(frequencies);
 */

// ========================++++++++++++ OBJECT METHOD ++++++++++++=========================//
function countNumbers(numbers) {
  let obj = {};
  let maxCount = 0;
  let mostCommonNum = 0;
  for (let number of numbers) {
    obj[number] = (obj[number] || 0) + 1;

    if (
      obj[number] > maxCount ||
      (obj[number] === maxCount && number < mostCommonNum)
    ) {
      maxCount = obj[number];
      mostCommonNum = number;
    }
  }
  return mostCommonNum;
}

let numbers = [1, 2, 12, 1, 2, 3, 3];
let frequencies = countNumbers(numbers);

console.log(frequencies);
