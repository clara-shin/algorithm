const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, A, B] = input[0].split(' ').map(Number);
const restrictedRanges = [];
for (let i = 1; i <= M; i++) {
    const [L, R] = input[i].split(' ').map(Number);
    restrictedRanges.push([L, R]);
}
const isRestricted = (num) => {
    for (const [L, R] of restrictedRanges) {
        if (num >= L && num <= R) {
            return true;
        }
    }
    return false;
}
const findMinActionsByDP = () => {
    if (isRestricted(N)) { return -1; }
    const dp = new Array(N + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i <= N; i++) {
        if (dp[i] === Infinity) continue;
        const nextA = i + A;
        if (nextA <= N && !isRestricted(nextA)) {
            dp[nextA] = Math.min(dp[nextA], dp[i] + 1);
        }
        const nextB = i + B;
        if (nextB <= N && !isRestricted(nextB)) {
            dp[nextB] = Math.min(dp[nextB], dp[i] + 1);
        }
    }
    return dp[N] === Infinity ? -1 : dp[N];
}
console.log(findMinActionsByDP());