const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const board = [];

for (let i = 1; i <= N; i++) {
  board.push(input[i].split(' '));
}

function findMinMaxValues() {
  let maxVal = -Infinity;
  let minVal = Infinity;
  
  // DFS를 통해 모든 가능한 경로를 탐색
  function dfs(r, c, values = []) {
    // 현재 위치의 값 추가
    const currentValue = board[r][c];
    const newValues = [...values, currentValue];
    
    // 학교에 도착한 경우 결과 계산
    if (r === N - 1 && c === N - 1) {
      // 표현식 계산
      let result = calculate(newValues);
      
      maxVal = Math.max(maxVal, result);
      minVal = Math.min(minVal, result);
      return;
    }
    
    // 오른쪽으로 이동
    if (c + 1 < N) {
      dfs(r, c + 1, newValues);
    }
    
    // 아래쪽으로 이동
    if (r + 1 < N) {
      dfs(r + 1, c, newValues);
    }
  }
  
  // 표현식 계산 함수
  function calculate(values) {
    let result = parseInt(values[0]); // 첫 번째 값은 항상 숫자
    
    for (let i = 1; i < values.length; i += 2) {
      if (i + 1 < values.length) {
        const op = values[i];
        const num = parseInt(values[i + 1]);
        
        switch (op) {
          case '+': result += num; break;
          case '-': result -= num; break;
          case '*': result *= num; break;
        }
      }
    }
    
    return result;
  }
  
  // DFS 시작
  dfs(0, 0);
  
  return { maxVal, minVal };
}

const result = findMinMaxValues();
console.log(`${result.maxVal} ${result.minVal}`);