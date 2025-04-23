const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, A, B] = input[0].split(' ').map(Number);
const restrictedRanges = [];
for (let i = 1; i <= M; i++) {
    const [L, R] = input[i].split(' ').map(Number);
    restrictedRanges.push([L, R]);
}
// 특정 수가 제약 구간에 포함되는지 검사
const isRestricted = (num) => {
    for (const [L, R] of restrictedRanges) {
        if (num >= L && num <= R) {
            return true;
        }
    }
    return false;
}
// 최소 행동 횟수 계산
const findMinActionsByDP = () => {
    if (isRestricted(N)) { // N이 제약 구간에 포함되면 불가능
        return -1;
    }
    // dp[i] = i마리의 강아지를 만들기 위한 최소 행동 횟수
    const dp = new Array(N + 1).fill(Infinity); // Infinity로 초기화 (도달할 수 없음)
    dp[0] = 0;
    for (let i = 0; i <= N; i++) {
        if (dp[i] === Infinity) continue; // 이미 도달할 수 없는 상태면 건너뜀
        const nextA = i + A; // A마리 추가하는 경우
        if (nextA <= N && !isRestricted(nextA)) {
            dp[nextA] = Math.min(dp[nextA], dp[i] + 1);
        }
        const nextB = i + B; // B마리 추가하는 경우
        if (nextB <= N && !isRestricted(nextB)) {
            dp[nextB] = Math.min(dp[nextB], dp[i] + 1);
        }
    }
    return dp[N] === Infinity ? -1 : dp[N]; // N마리에 도달할 수 없으면 -1 반환
}
console.log(findMinActionsByDP());