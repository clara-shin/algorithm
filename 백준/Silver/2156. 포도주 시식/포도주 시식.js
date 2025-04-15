const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]); 
const wines = [0];  

for (let i = 1; i <= n; i++) {
    wines.push(parseInt(input[i]));
}

const dp = Array.from({ length: n + 1 }, () => Array(3).fill(0));

dp[1][0] = 0;
dp[1][1] = wines[1];

for (let i = 2; i <= n; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1], dp[i-1][2]);
    dp[i][1] = dp[i-1][0] + wines[i];
    dp[i][2] = dp[i-1][1] + wines[i];
}
const maxAmount = Math.max(dp[n][0], dp[n][1], dp[n][2]);
console.log(maxAmount);