function handshake(n) {
  // Write your code here
  let count = 0;
  for (let i = n - 1; i > 0; i--) count += i;
  return count;
}

console.log(handshake(5));
