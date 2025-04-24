const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

// N: 목표 계단 번호, K: 최대 동작 횟수
const [N, K] = input;

// dp[i]: i번 계단에 도달하는 데 필요한 최소 동작 수
// 처음엔 모두 도달할 수 없다고 가정하고 Infinity로 초기화
const dp = new Array(N + 1).fill(Infinity);

// 시작점인 0번 계단은 동작 수 0으로 설정
dp[0] = 0;

// 0번부터 N번까지 모든 계단을 탐색
for (let i = 0; i <= N; i++) {
  // 한 칸 올라가는 경우: i -> i + 1
  if (i + 1 <= N) {
    dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1);
  }

  // 지팡이 두드리기: i -> i + floor(i / 2)
  const jump = i + Math.floor(i / 2);
  if (jump <= N) {
    dp[jump] = Math.min(dp[jump], dp[i] + 1);
  }
}

// N번 계단에 도달하는 데 필요한 최소 동작 수가 K 이하면 성공
console.log(dp[N] <= K ? 'minigimbob' : 'water');