/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
      // 빈 배열이 주어진 경우
    if (strs.length === 0) {
        return "";
    }
    
    // 첫 번째 문자열을 기준으로 사용
    let prefix = strs[0];
    
    // 나머지 문자열들과 비교
    for (let i = 1; i < strs.length; i++) {
        // 현재 문자열에서 prefix가 발견되지 않으면 prefix를 줄임
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            // prefix가 빈 문자열이 되면 공통 접두사가 없음
            if (prefix === "") {
                return "";
            }
        }
    }
    
    return prefix;
};