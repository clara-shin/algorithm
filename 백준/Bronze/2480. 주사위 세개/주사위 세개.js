let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b, c] = input[0].split(' ').map(Number);

// 세 수가 모두 같은 경우
if (a === b && b === c) {
    console.log(10000 + a * 1000);
} 
// 두 수만 같은 경우를 한 번에 처리
else if (a === b || a === c || b === c) {
    // 같은 두 눈 찾기
    let sameEye = a;
    if (b === c) sameEye = b;
    
    console.log(1000 + sameEye * 100);
} 
// 세 수가 모두 다른 경우
else {
    console.log(Math.max(a, b, c) * 100);
}