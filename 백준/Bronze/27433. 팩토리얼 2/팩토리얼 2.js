const fs = require('fs');
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());
const answer  = input;

const factorial = num => {
  if(num <= 1) {
    return 1;
  };
  return num * factorial(num-1);
}
console.log(factorial(answer));