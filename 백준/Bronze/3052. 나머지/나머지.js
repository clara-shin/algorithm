const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let remainders = new Set();

for(let i = 0; i < 10 && i < input.length; i++) {
    remainders.add(input[i] % 42);
}

console.log(remainders.size);