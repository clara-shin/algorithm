const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function findMaxTemperatureSum(N, K, temperatures) {
  // 처음 K일 동안의 온도 합 계산
  let currentSum = 0;
  for (let i = 0; i < K; i++) {
    currentSum += temperatures[i];
  }
  
  // 최대값을 현재 합으로 초기화
  let maxSum = currentSum;
  
  // 슬라이딩 윈도우 적용
  for (let i = K; i < N; i++) {
    // 윈도우 이동: 왼쪽 끝 요소 제거하고 오른쪽 새 요소 추가
    currentSum = currentSum - temperatures[i - K] + temperatures[i];
    
    // 최대값 갱신
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}

// 입력 처리
function solution(input) {
  const lines = input.trim().split('\n');
  const [N, K] = lines[0].split(' ').map(Number);
  const temperatures = lines[1].split(' ').map(Number);
  
  return findMaxTemperatureSum(N, K, temperatures);
}

console.log(solution(input));