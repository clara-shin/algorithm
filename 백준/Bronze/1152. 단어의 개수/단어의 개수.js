const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const data = input[0].trim().split(' ');
const result = data != '' ? data.length : 0;
console.log(result);