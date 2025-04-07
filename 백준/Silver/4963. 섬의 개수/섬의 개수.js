const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let lineIndex = 0;
const results = [];

while (lineIndex < input.length) {
    
  const [w, h] = input[lineIndex++].split(' ').map(Number);
  
  if (w === 0 && h === 0) break;
  
  const map = [];
  for (let i = 0; i < h; i++) {
    map.push(input[lineIndex++].split(' ').map(Number));
  }
  
  const visited = Array(h).fill().map(() => Array(w).fill(false));
  
  let islandCount = 0;
  
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (map[i][j] === 1 && !visited[i][j]) {
        dfs(map, visited, i, j, h, w);
        islandCount++;
      }
    }
  }
  
  results.push(islandCount);
}

function dfs(map, visited, i, j, h, w) {

  if (i < 0 || i >= h || j < 0 || j >= w) return;
  
  if (visited[i][j] || map[i][j] === 0) return;
  
  visited[i][j] = true;
  
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1]
  ];
  
  for (const [dx, dy] of directions) {
    dfs(map, visited, i + dx, j + dy, h, w);
  }
}

console.log(results.join('\n'));