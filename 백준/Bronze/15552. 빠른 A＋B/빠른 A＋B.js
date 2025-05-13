const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let testCase = Number(input[0]);
let answer= '';

for(let t = 1; t <= testCase; t++){
	let data = input[t].split(' '); // 해당 라인을 읽어들어 data에 담음
	let a = Number(data[0]);
	let b = Number(data[1]);
	answer += a+b + '\n'; // 숫자 + 문자열 => 문자열이 됨
}

console.log(answer);