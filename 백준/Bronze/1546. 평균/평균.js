const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]); // 3
const scores = input[1].split(' ').map(Number); // [40, 80, 60]

const M = Math.max(...scores); // 80
const newScores = scores.map((score) => (score / M) * 100);

const newAvg =
  newScores.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0) / N;

console.log(newAvg);