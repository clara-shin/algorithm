/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let N = m + n - 2; // 총 이동 횟수

    let k = Math.min(m-1, n-1); // 조합 공식에서 계산을 최적화

    let result = 1; // 결과 변수를 초기화

    for(let i = 1; i <= k; i++){
        result *= (N - (i -1)); // 분자 부분: n, n-1, n-2, ..., n-k+1
        result /= i; // 분모 부분: k, k-1, k-2, ..., 1
    }
    
    return result;
}