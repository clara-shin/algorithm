const fs = require('fs'); 
const [N, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number); 
const MOD = 1000000007; 
const dp = Array(N + 1).fill(0); 
dp[0] = 1; // 0초일 때는 아무 스킬도 사용하지 않는 한 가지 경우 

for (let i = 1; i <= N; i++) { 
	dp[i] = (dp[i] + dp[i - 1]) % MOD; 
	if (i >= M) { 
		dp[i] = (dp[i] + dp[i - M]) % MOD; 
	} 
} 
console.log(dp[N]);