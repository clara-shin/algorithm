/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
     // 로마 숫자와 그 값을 매핑하는 객체 생성
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let result = 0;
    
    // 문자열을 순회하면서 값을 더함
    for (let i = 0; i < s.length; i++) {
        // 현재 문자의 값
        const currentValue = romanValues[s[i]];
        
        // 다음 문자가 존재하는지 확인하고, 그 값을 가져옴
        const nextValue = i + 1 < s.length ? romanValues[s[i + 1]] : 0;
        
        // 현재 값이 다음 값보다 작으면 빼고, 그렇지 않으면 더함
        if (currentValue < nextValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
    }
    
    return result;
};