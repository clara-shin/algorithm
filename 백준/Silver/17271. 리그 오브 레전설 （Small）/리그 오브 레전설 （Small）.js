const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const dp = Array(N + 1).fill(0);
const MOD = 1000000007;

dp[0] = 1; // 0초일 때는 아무 스킬도 사용하지 않는 한 가지 경우

for (let i = 1; i <= N; i++) {
    // A 스킬을 사용하는 경우 (1초 전의 상태에서 가능한 조합 수)
    if (i >= 1) {
        dp[i] = (dp[i] + dp[i - 1]) % MOD;
    }
    // B 스킬을 사용하는 경우 (M초 전의 상태에서 가능한 조합 수)
    if (i >= M) {
        dp[i] = (dp[i] + dp[i - M]) % MOD;
    }
}
console.log(dp[N]);