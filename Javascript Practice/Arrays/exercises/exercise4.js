// function move(array, index, offset) {
//   let position = index + offset;
//   if (position >= numbers.legnth || position < 0)
//     console.error("invalid offset");

//   const output = [...array];
//   let deleted = output.splice(index, 1)[0]; // returned array ki Index:0 value ; [0]
//   output.splice(position, 0, deleted);
//   return output;
// }

const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, -4);

console.log(output);

// function

function move(array, index, offset) {
  let position = index + offset;
  if (position > array.length || position < 0) console.error("invalid offset");

  const output = [...array];
  deleted = output.splice(index, 1)[0];
  output.splice(position, 0, deleted);
  return output;
}
