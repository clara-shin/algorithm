let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let n = Number(input);

// 피보나치 비스무리한 수열 계산
function fibonacciLike(n) {
    // 기본 케이스: f(1) = f(2) = f(3) = 1
    let dp = new Array(n+1);
    dp[1] = dp[2] = dp[3] = 1n; // BigInt 리터럴 사용
    
    // n이 3 이하면 바로 결과 반환
    if (n <= 3) {
        return dp[n];
    }
    
    // n이 4 이상이면 수열 계산
    for (let i = 4; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-3];
    }
    
    return dp[n];
}

console.log(fibonacciLike(n).toString()); // BigInt를 문자열로 변환하여 출력