/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b !== 0) {
        // XOR: 자리올림 없는 덧셈
        let sum = a ^ b;
        
        // AND + 시프트: 자리올림 계산
        let carry = (a & b) << 1;
        
        // 다음 반복을 위해 값 업데이트
        a = sum;
        b = carry;
    }
    
    return a;
};