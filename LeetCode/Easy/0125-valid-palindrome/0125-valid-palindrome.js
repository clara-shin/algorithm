/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase();

  let str = ''; // 영숫자만 남길 문자열
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // 알파벳이거나 숫자면 str에 추가
    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
      str += char;
    }
  }

  // 문자열 뒤집기
  let reversedStr = str.split('').reverse().join('');

  return str === reversedStr;
};