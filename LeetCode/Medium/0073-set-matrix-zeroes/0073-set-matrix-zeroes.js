/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return;

    const m = matrix.length;
    const n = matrix[0].length;

    // 한번의 반복문으로 첫번째 행과 열을 체크
    let firstRowHasZero = false;
    let firstColHasZero = false;

    // 첫번째 행 체크
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            firstRowHasZero = true;
            break;
        }
    }
    // 첫번째 열 체크
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }

    // 첫번째 행과 열을 제외한 나머지 행렬을 순회, 마커 설정
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
        if (matrix[i][j] === 0) {
            matrix[i][0] = 0; // 해당 행의 첫번째 열을 0으로 마킹
            matrix[0][j] = 0; // 해당 열의 첫번째 행을 0으로 마킹
        }
        }
    }
    // 마커를 기반으로 내부 행렬의 요소를 0으로 업데이트
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    // 첫번째 행과 열을 업데이트
    if (firstRowHasZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
    if (firstColHasZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    } 
};