/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // 길이가 다르면 애너그램이 될 수 없음 (빠른 리턴)
  if (s.length !== t.length) {
    return false;
  }

  const charMap = new Map();

  // 첫 번째 문자열의 각 문자 카운트 증가
  for (let char of s) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  // 두 번째 문자열의 각 문자 카운트 감소
  for (let char of t) {
    const count = charMap.get(char);

    // 해당 문자가 없거나 카운트가 0이면 애너그램이 아님
    if (!count) {
      return false;
    }

    charMap.set(char, count - 1);
  }

  // 모든 카운트가 0인지 확인
  for (let count of charMap.values()) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
};