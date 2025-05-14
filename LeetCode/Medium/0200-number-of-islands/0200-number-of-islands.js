/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }
    
    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;
    
    // 방문 배열 생성
    const visited = Array(rows).fill().map(() => Array(cols).fill(false));
    
    // 방향 배열 (상, 하, 좌, 우)
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    function bfs(startRow, startCol) {
        const queue = [[startRow, startCol]];
        visited[startRow][startCol] = true; // 시작점 방문 처리
        
        while (queue.length > 0) {
            const [row, col] = queue.shift();
            
            // 4방향 탐색
            for (const [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;
                
                // 범위 안에서, 방문하지 않은 땅('1')이면 탐색
                if (
                    newRow >= 0 && newRow < rows && 
                    newCol >= 0 && newCol < cols && 
                    grid[newRow][newCol] === '1' &&
                    !visited[newRow][newCol]
                ) {
                    queue.push([newRow, newCol]);
                    visited[newRow][newCol] = true; // 방문 처리
                }
            }
        }
    }
    
    // 그리드 전체 순회
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // 땅('1')을 발견하고 아직 방문하지 않았으면 BFS 시작 및 섬 카운트 증가
            if (grid[i][j] === '1' && !visited[i][j]) {
                islandCount++;
                bfs(i, j);
            }
        }
    }
    
    return islandCount;
};