/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     // 빈 문자열이나 홀수 길이는 유효하지 않음
    if (s.length === 0 || s.length % 2 !== 0) return false;
    
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (char === '(') {
            stack.push(')');
        } else if (char === '{') {
            stack.push('}');
        } else if (char === '[') {
            stack.push(']');
        } else if (stack.length === 0 || stack.pop() !== char) {
            // 닫는 괄호를 만났을 때, 스택이 비어있거나 짝이 맞지 않음
            return false;
        }
    }
    
    return stack.length === 0;
};