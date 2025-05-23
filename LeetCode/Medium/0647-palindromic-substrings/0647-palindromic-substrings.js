/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    if (!s || s.length === 0) return 0; // 빈 배열이면 빠른 리턴

    let count = 0;
    const n = s.length;

    // 중심 확장 함수
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < n && s[left] === s[right]) {
        count++;
        left--;
        right++;
        }
    }

    for (let i = 0; i < n; i++) {
        // 홀수 길이 팰린드롬
        expandAroundCenter(i, i);
        // 짝수 길이 팰린드롬
        expandAroundCenter(i, i + 1);
    }

    return count;
};