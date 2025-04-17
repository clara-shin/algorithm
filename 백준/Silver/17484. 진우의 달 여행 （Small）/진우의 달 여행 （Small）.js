const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);  // N: 행, M: 열
const space = [];  // 연료 소비량을 저장할 2차원 배열
for (let i = 1; i <= N; i++) {
    space.push(input[i].split(' ').map(Number));
}

const LEFT_DOWN = 0;   // 왼쪽 아래 ↙️
const DOWN = 1;        // 아래 ⬇️
const RIGHT_DOWN = 2;  // 오른쪽 아래 ↘️

// DP 배열 초기화: dp[row][col][dir]
// - row, col: 현재 위치 (0부터 시작)
// - dir: 이전에 움직인 방향 (0: 왼쪽 아래, 1: 아래, 2: 오른쪽 아래)
// - 초기값은 무한대(도달할 수 없음)로 설정
const dp = Array(N).fill().map(() => 
    Array(M).fill().map(() => 
        Array(3).fill(Infinity)
    )
);

// 첫 번째 행(지구)의 모든 위치에서 시작 가능
// 첫 번째 행에서는 이전 방향이 없으므로 모든 방향에서 해당 위치의 연료만큼 초기화
for (let j = 0; j < M; j++) {
    // 첫 행의 각 위치에 도달하는 초기 비용은 그 위치의 연료 소비량과 동일
    dp[0][j][LEFT_DOWN] = space[0][j];
    dp[0][j][DOWN] = space[0][j];
    dp[0][j][RIGHT_DOWN] = space[0][j];
}

// 두 번째 행부터 시작
for (let i = 1; i < N; i++) {
    for (let j = 0; j < M; j++) {
        
        // 1. 왼쪽 아래로 오는 경우
        if (j < M - 1) { // j+1이 배열 범위 내에 있어야 함 (오른쪽 끝 열이 아닌 경우)
            // 이전 위치 (i-1, j+1)에서 아래(1) 또는 오른쪽 아래(2) 방향으로 왔을 때의 최소값
            // 같은 방향(왼쪽 아래=0)으로 연속 이동할 수 없으므로 제외
            dp[i][j][LEFT_DOWN] = Math.min(
                dp[i-1][j+1][DOWN],       // 이전에 아래로 움직였던 경우
                dp[i-1][j+1][RIGHT_DOWN]  // 이전에 오른쪽 아래로 움직였던 경우
            ) + space[i][j];  
        }
        
        // 2. 아래로 오는 경우
        // 이전 위치 (i-1, j)에서 왼쪽 아래(0) 또는 오른쪽 아래(2) 방향으로 왔을 때의 최소값
        // 같은 방향(아래=1)으로 연속 이동할 수 없으므로 제외
        dp[i][j][DOWN] = Math.min(
            dp[i-1][j][LEFT_DOWN],    // 이전에 왼쪽 아래로 움직였던 경우
            dp[i-1][j][RIGHT_DOWN]    // 이전에 오른쪽 아래로 움직였던 경우
        ) + space[i][j];  
        
        // 3. 오른쪽 아래로 오는 경우
        if (j > 0) { // j-1이 배열 범위 내에 있어야 함 (왼쪽 끝 열이 아닌 경우)
            // 이전 위치 (i-1, j-1)에서 왼쪽 아래(0) 또는 아래(1) 방향으로 왔을 때의 최소값
            // 같은 방향(오른쪽 아래=2)으로 연속 이동할 수 없으므로 제외
            dp[i][j][RIGHT_DOWN] = Math.min(
                dp[i-1][j-1][LEFT_DOWN], // 이전에 왼쪽 아래로 움직였던 경우
                dp[i-1][j-1][DOWN]       // 이전에 아래로 움직였던 경우
            ) + space[i][j]; 
        }
    }
}

// 마지막 행(달)에 도착했을 때 최소 연료(minFuel) 계산
// 어느 위치든 도착할 수 있으므로 마지막 행의 모든 열에 대해 최소값 찾기
let minFuel = Infinity;
for (let j = 0; j < M; j++) {
    // 세 가지 가능한 방향 중 최소값 찾기
    minFuel = Math.min(
        minFuel,
        dp[N-1][j][LEFT_DOWN],   // 왼쪽 아래로 마지막에 도착한 경우
        dp[N-1][j][DOWN],        // 아래로 마지막에 도착한 경우
        dp[N-1][j][RIGHT_DOWN]   // 오른쪽 아래로 마지막에 도착한 경우
    );
}
console.log(minFuel);