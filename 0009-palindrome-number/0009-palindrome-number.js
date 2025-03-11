/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     // 음수는 팰린드롬이 될 수 없음 (부호 때문에)
    if (x < 0) {
        return false;
    }
    
    // 0이 아니면서 0으로 끝나는 수는 팰린드롬이 될 수 없음
    // (첫 번째 숫자는 0이 될 수 없기 때문)
    if (x !== 0 && x % 10 === 0) {
        return false;
    }
    
    let original = x;
    let reversed = 0;
    
    // 숫자를 뒤집음
    while (x > 0) {
        // 마지막 자릿수를 가져옴
        const digit = x % 10;
        // 뒤집은 숫자에 자릿수를 추가
        reversed = reversed * 10 + digit;
        // 처리한 자릿수를 제거
        x = Math.floor(x / 10);
    }
    
    // 원래 숫자와 뒤집은 숫자가 같은지 확인
    return original === reversed;
};