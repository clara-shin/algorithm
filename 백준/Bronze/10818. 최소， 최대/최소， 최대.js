const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const data = input[1].split(' ').map(x => Number(x));

let minVal = data.reduce((a,b) => Math.min(a,b));
let maxVal = data.reduce((a,b) => Math.max(a,b));

console.log(minVal, maxVal);