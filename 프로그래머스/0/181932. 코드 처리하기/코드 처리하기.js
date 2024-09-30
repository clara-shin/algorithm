function solution(code) {
    let mode = 0;
    
    const ret = [...code].reduce((acc, curr, idx) => {
        if (curr === "1") {
            mode = 1 - mode; // 모드 전환
        } else if ((mode === 0 && idx % 2 === 0) || (mode === 1 && idx % 2 === 1)) {
            acc += curr;
        }
        return acc;
    }, '');

    return ret || 'EMPTY';
}