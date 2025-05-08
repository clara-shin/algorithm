/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // 빈 행렬 체크: 행 또는 열이 0인 경우 빈 배열 반환
    if (!matrix.length || !matrix[0].length) return [];
    
    // 결과를 저장할 배열 초기화
    const result = [];
    
    // 행렬의 경계를 정의
    // top: 현재 처리 중인 가장 위쪽 행의 인덱스
    let top = 0;
    // bottom: 현재 처리 중인 가장 아래쪽 행의 인덱스
    let bottom = matrix.length - 1;
    // left: 현재 처리 중인 가장 왼쪽 열의 인덱스
    let left = 0;
    // right: 현재 처리 중인 가장 오른쪽 열의 인덱스
    let right = matrix[0].length - 1;
    
    // 아직 처리할 요소가 남아있는 동안 계속 순회
    // top > bottom 또는 left > right가 되면 모든 요소를 방문한 것
    while (top <= bottom && left <= right) {
        // 1. 위쪽 행: 왼쪽에서 오른쪽으로 이동
        // 현재 top 행에서 left부터 right까지의 모든 요소를 순회
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        // 위쪽 행을 처리했으므로 top 인덱스를 1 증가
        top++;
        
        // 2. 오른쪽 열: 위에서 아래로 이동
        // 현재 right 열에서 top부터 bottom까지의 모든 요소를 순회
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        // 오른쪽 열을 처리했으므로 right 인덱스를 1 감소
        right--;
        
        // 3. 아래쪽 행: 오른쪽에서 왼쪽으로 이동
        // 중요: 이미 top이 bottom을 초과한 경우, 아래쪽 행이 존재하지 않으므로 처리하지 않음
        if (top <= bottom) {
            // 현재 bottom 행에서 right부터 left까지의 모든 요소를 역순으로 순회
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            // 아래쪽 행을 처리했으므로 bottom 인덱스를 1 감소
            bottom--;
        }
        
        // 4. 왼쪽 열: 아래에서 위로 이동
        // 중요: 이미 left가 right를 초과한 경우, 왼쪽 열이 존재하지 않으므로 처리하지 않음
        if (left <= right) {
            // 현재 left 열에서 bottom부터 top까지의 모든 요소를 역순으로 순회
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            // 왼쪽 열을 처리했으므로 left 인덱스를 1 증가
            left++;
        }
        
        // 반복: 경계가 서로 교차하지 않는 한 계속해서 안쪽으로 이동하며 순회
    }
    
    // 모든 요소를 나선형 순서로 방문한 결과 반환
    return result;
};