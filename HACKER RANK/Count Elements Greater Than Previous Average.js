function countResponseTimeRegressions(responseTimes) {
  // Write your code here

  let avg = responseTimes[0];
  let count = 0;
  for (let i = 1; i < responseTimes.length; i++) {
    if (avg < responseTimes[i]) count++;
    avg = responseTimes.slice(0, i + 1).reduce((a, b) => a + b) / (i + 1);
  }
  return count;
}

console.log(countResponseTimeRegressions([100, 200, 150, 300]));
