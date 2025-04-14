/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    
    while (n !== 0) {
        // n & (n-1)은 n의 마지막 1 비트를 제거
        n = n & (n-1);
        count++;
    }
    
    return count;
};