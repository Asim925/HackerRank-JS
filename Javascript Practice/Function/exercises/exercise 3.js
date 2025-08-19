try {
  let n = [1, 2, 3, 2];
  let count = countOccurences(null, 1);
  console.log(count);
} catch (holder) {
  console.log(holder);
}

function countOccurences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("not an array");

  let count = 0;
  for (let element of array) if (element === searchElement) count++;
  return count;
}
