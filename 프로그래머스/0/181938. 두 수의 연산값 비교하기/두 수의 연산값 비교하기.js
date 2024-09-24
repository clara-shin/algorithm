function solution(a, b) {
    if(Number(`${a}${b}`)===2*a*b) return Number(`${a}${b}`);
    return Math.max(Number(`${a}${b}`), Number(2*a*b))
}