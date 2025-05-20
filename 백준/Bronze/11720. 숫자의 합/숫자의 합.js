const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]); // 숫자의 갯수
const string = input[1];

let sum = 0;

for (let c of string) {
  sum += Number(c);
}

console.log(sum);