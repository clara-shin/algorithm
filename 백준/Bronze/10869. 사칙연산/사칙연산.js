let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0].split(' ')[0]);
let b = Number(input[0].split(' ')[1]);

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(parseInt(a/b)); // 몫을 구하기 위해 parseInt() 사용
console.log(a%b);