const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const testCase = Number(input[0]);
for(let i = 1; i <= testCase; i++){
	const numbers = input[i].split(' ').map(Number);
	const n = numbers[0]; // 학생 수
	const scores = numbers.slice(1); // 점수들 (인덱스 1부터 마지막인덱스까지를 새로운 배열로 리턴, 원본 훼손 X)
	const sum = scores.reduce((acc, curr) => acc + curr, 0); // 총 합
	const avg = sum / n; // 평균
	const aboveAvg = scores.filter(score => score > avg).length; //평균을 넘는 학생 수
	const ratio = (aboveAvg / n * 100).toFixed(3); // 평균을 넘는 학생 수 비율 (소수점 셋째 자리까지)
	console.log(`${ratio}%`);
}