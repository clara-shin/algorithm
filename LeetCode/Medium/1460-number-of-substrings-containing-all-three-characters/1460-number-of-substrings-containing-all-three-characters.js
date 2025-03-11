/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
        // 결과 개수
    let count = 0;
    // a, b, c 각 문자의 마지막 등장 위치를 추적하는 배열 (-1로 초기화)
    let lastPos = [-1, -1, -1];
    
    // 문자열을 순회
    for (let i = 0; i < s.length; i++) {
        // 현재 문자에 해당하는 인덱스 업데이트 (a=0, b=1, c=2)
        lastPos[s.charCodeAt(i) - 97] = i;
        
        // 세 문자가 모두 최소 한 번씩 발견되었는지 확인
        if (lastPos[0] !== -1 && lastPos[1] !== -1 && lastPos[2] !== -1) {
            // 세 문자 중 가장 먼저 등장한 문자의 위치 찾기
            const minPos = Math.min(lastPos[0], lastPos[1], lastPos[2]);
            
            // 현재 위치에서 끝나고, minPos+1부터 시작되는 모든 부분 문자열은
            // a, b, c를 모두 포함합니다. 그 개수는 minPos+1개입니다.
            count += minPos + 1;
        }
    }
    
    return count;
};