const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]); // 단어 갯수 N

let summary = 0;

for (let i = 1; i <= n; i++) {
  let data = input[i];
  if (check(data)) {
    summary += 1;
  }
}
console.log(summary);

// 그룹문자인지 판별
// 1. 현재 문자와 그 다음에 올 문자가 달라야 한다
// 2. 현재문자가 또 있는지 중복검사

function check(data) {
  let setData = new Set(data[0]);
  for (let i = 0; i < data.length - 1; i++) {
    // 오른쪽 단어와 다르다면
    if (data[i] != data[i + 1]) {
      // 이미 등장한 적 있는 알파벳이라면
      if (setData.has(data[i + 1])) {
        return false;
      } else {
        setData.add(data[i + 1]);
      }
    }
  }
  return true;
}
