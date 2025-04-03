const fs = require("fs");
// 백준 제출용 코드
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 입력 처리
const N = parseInt(input[0]);
const heights = [];

for (let i = 1; i <= N; i++) {
  heights.push(input[i].split(' ').map(Number));
}

// 방향 배열 (상, 하, 좌, 우)
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// DFS 함수
function dfs(x, y, height, visited) {
  visited[x][y] = true;
  
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    
    // 범위 체크, 방문 여부 체크, 높이 체크
    if (nx >= 0 && nx < N && ny >= 0 && ny < N 
        && !visited[nx][ny] && heights[nx][ny] > height) {
      dfs(nx, ny, height, visited);
    }
  }
}

// 문제 해결 함수
function solution() {
  let maxSafeAreas = 1; // 비가 오지 않는 경우(모든 지역이 안전)
  let minHeight = 101; // 최소 높이 (문제 조건: 높이는 1이상 100이하)
  let maxHeight = 0;  // 최대 높이
  
  // 최소/최대 높이 찾기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      minHeight = Math.min(minHeight, heights[i][j]);
      maxHeight = Math.max(maxHeight, heights[i][j]);
    }
  }
  
  // 가능한 모든 높이에 대해 안전 영역 개수 계산
  // 비가 minHeight-1 높이까지 왔을 때: 모든 지역 안전
  // 비가 maxHeight 높이까지 왔을 때: 모든 지역 물에 잠김
  for (let height = minHeight - 1; height < maxHeight; height++) {
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    let safeAreas = 0;
    
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        // 아직 방문하지 않았고 물에 잠기지 않는 지역이면 DFS 수행
        if (!visited[i][j] && heights[i][j] > height) {
          dfs(i, j, height, visited);
          safeAreas++;
        }
      }
    }
    
    // 최대 안전 영역 개수 갱신
    maxSafeAreas = Math.max(maxSafeAreas, safeAreas);
  }
  
  return maxSafeAreas;
}

// 결과 출력
console.log(solution());