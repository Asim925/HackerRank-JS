const numbers = [1, 2, 3, 1];

let output = except(numbers, [1]);

console.log(output);

function except(array, excluded) {
  let output = [];
  for (let element of array)
    if (!excluded.includes(element)) output.push(element);
  return output;
}

// is khrab dimagh kabhi nahi hoaaaaaaaa
