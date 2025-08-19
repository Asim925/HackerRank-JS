const numbers = arrayFromRange(4, 10);
console.log(numbers);

function arrayFromRange(min, max) {
  let output = [];
  for (let i = min; i <= max; i++) {
    output.push(i);
  }
  return output;
}
