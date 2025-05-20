const fs = require('fs');
const arr = fs.readFileSync('/dev/stdin').toString().split(' ');

let reversedArr = [];

for (let i = 0; i < arr.length; i++) {
  let reversedStr = arr[i].split('').reverse().join('');
  reversedArr.push(reversedStr);
}
console.log(Math.max(...reversedArr));