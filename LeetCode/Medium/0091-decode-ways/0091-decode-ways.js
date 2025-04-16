/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {

    if (s.length === 0 || s[0] === '0') return 0;
    
    const dp = new Array(s.length + 1).fill(0);
    
    dp[0] = 1;
    dp[1] = s[0] !== '0' ? 1 : 0;
    
    for (let i = 2; i <= s.length; i++) {
        // 한 자리 숫자로 해독하는 경우 (현재 숫자가 1-9)
        if (s[i-1] !== '0') {
            dp[i] += dp[i-1];
        }
        
        // 두 자리 숫자로 해독하는 경우 (10-26)
        const twoDigit = parseInt(s.substring(i-2, i));
        if (twoDigit >= 10 && twoDigit <= 26) {
            dp[i] += dp[i-2];
        }
    }
    
    return dp[s.length];
};