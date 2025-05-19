/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = 0;
    
    for (let i = 0; i < 32; i++) {
        // 결과에 현재 비트를 추가 (비트 OR 연산)
        // 결과를 왼쪽으로 시프트한 후, n의 최하위 비트가 1이면 결과에 1을 더함
        result = (result << 1) | (n & 1);
        
        // n을 오른쪽으로 시프트
        n >>>= 1;
    }
    
    // 부호 없는 정수로 변환
    return result >>> 0;
};