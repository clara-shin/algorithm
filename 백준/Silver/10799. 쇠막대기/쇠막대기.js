const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(arrangement) {
    let answer = 0;
    let stack = [];
    let prevChar = '';
    
    for (let char of arrangement) {
        if (char === '(') {
            stack.push(char);
        } else { // 닫는 괄호인 경우
            stack.pop();
            
            if (prevChar === '(') {
                // 레이저인 경우
                answer += stack.length;
            } else {
                // 막대기 끝인 경우
                answer += 1;
            }
        }
        prevChar = char;
    }
    
    return answer;
}

console.log(solution(input));