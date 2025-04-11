const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution(N, M) {
    if (N === 1 || M === 1) {
        return 1;
    }

    if (N > 1 && M === 1) {
        return 1;
    }

    if (N === 2) {
        return Math.min(4, Math.floor((M + 1) / 2));
    }

    if (M < 7) {
        return Math.min(4, M);
    }
    return M - 2;
}

console.log(solution(N, M));