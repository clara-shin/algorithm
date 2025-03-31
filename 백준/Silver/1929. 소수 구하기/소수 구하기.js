let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = input[0].split(' ');

let m = Number(line[0]);
let n = Number(line[1]);

findPrimesInRange(m, n);

// 소수인지 판별하는 함수
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true; // 2와 3은 소수입니다
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

// 범위 안에서 소수 찾기
function findPrimesInRange(m, n) {
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}