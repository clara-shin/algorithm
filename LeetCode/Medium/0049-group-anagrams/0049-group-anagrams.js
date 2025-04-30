/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map();

  for (let str of strs) {
    const count = new Array(26).fill(0); // 알파벳 개수 초기화
    for (let i = 0; i < str.length; i++) {
      const index = str.charCodeAt(i) - 'a'.charCodeAt(0); // 알파벳 인덱스 계산
      count[index]++; // 해당 알파벳 개수 증가
    }
    const key = count.join('#'); // 알파벳 개수를 문자열로 변환하여 키 생성
    if (!map.has(key)) {
      map.set(key, []); // 키가 없으면 새로운 배열 생성
    }
    map.get(key).push(str); // 해당 키에 문자열 추가
  }

  return Array.from(map.values()); // Map의 값들을 배열로 변환하여 반환
};