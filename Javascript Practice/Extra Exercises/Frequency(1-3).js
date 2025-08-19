let array = [1, 2, 2, 3, 1, 1];

function frequency(array) {
  let one = 0;
  let two = 0;
  let three = 0;

  for (let i = 0; i <= array.length; i++) {
    if (array[i] === 1) one++;
    if (array[i] === 2) two++;
    if (array[i] === 3) three++;
  }
  console.log("frequency of one ==> " + one);
  console.log("frequency of two ==> " + two);
  console.log("frequency of three ==> " + three);
  let max = Math.max(one, two, three);
  let min = Math.min(one, two, three);

  console.log("the maximum frequency is : " + max);
  console.log("the minimum frequency is : " + min);
}

frequency(array);
