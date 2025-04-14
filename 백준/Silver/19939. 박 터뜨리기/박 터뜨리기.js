const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solve(N, K) {
    // 서로 다른 값을 가진 K개의 바구니 최소 필요 공 개수: 1+2+...+K
    const minRequired = (K * (K + 1)) / 2;
    
    // 공의 개수가 부족하면 분배 불가능
    if (N < minRequired) return -1;
    
    // 남은 공 개수
    const remaining = N - minRequired;
    
    // 각 바구니에 균등하게a 추가할 공 개수
    const add = Math.floor(remaining / K);
    
    // 가장 큰 바구니가 하나 더 많이 받을지 여부
    const hasExtra = remaining % K > 0;
    
    // 최소값: 1(가장 작은 바구니 초기값) + add
    // 최대값: K(가장 큰 바구니 초기값) + add + (남은 공이 있으면 1)
    return (K + add + (hasExtra ? 1 : 0)) - (1 + add);
}

console.log(solve(N, K));