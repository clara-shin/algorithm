const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const data = input[0].trim().split(' ');
const result = (data.length === 1 && data[0] === '') ? 0 : data.length;
console.log(result);