const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
// 바구니(팀)의 개수

// 함수: N개의 공을 K개의 바구니에 나눠 담을 수 있는지 확인하고,
// 가능하다면 가장 많은 공과 가장 적은 공의 개수 차이를 반환
function distributeBalls(N, K) {
    // 모든 바구니가 서로 다른 수의 공을 가져야 하므로
    // 최소한 1, 2, 3, ..., K개의 공이 필요함
    const minRequired = (K * (K + 1)) / 2;
    
    // 공의 개수가 최소 요구량보다 적으면 분배 불가능
    if (N < minRequired) {
        return -1;
    }
    
    // 차이를 최소화하려면 모든 바구니에 균등하게 공을 추가해야 함
    // 처음에는 바구니에 1, 2, ..., K개의 공이 있다고 가정
    
    // 남은 공의 개수
    let remaining = N - minRequired;
    
    // 각 바구니에 추가할 공의 개수
    const add = Math.floor(remaining / K);
    
    // 남은 나머지 공
    remaining %= K;
    
    // 가장 작은 바구니 = 1 + add
    let min = 1 + add;
    
    // 가장 큰 바구니 = K + add + (남은 공이 있다면 1)
    let max = K + add;
    if (remaining > 0) {
        max += 1;
    }
    
    return max - min;
}

console.log(distributeBalls(N, K));