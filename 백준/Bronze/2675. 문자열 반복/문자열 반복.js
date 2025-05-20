// 첫째 줄에 테스트케이스 갯수 T
// 각 테스트케이스 반복횟수 R
// 문자열 S가 공백으로 구분되어 주어짐

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = Number(input[0]); // 테스트케이스 개수

// 두번째 입력줄 부터 테스트 케이스 순회
for (let i = 1; i <= t; i++) {
  let p = ''; // 각 케이스마다 p 초기화 ✨
  const testCase = input[i].split(' '); // [3, ABC]
  const r = Number(testCase[0]); // 3
  const str = testCase[1]; // ABC

  for (let c of str) {
    p += c.repeat(r);
  }
  console.log(p);
}

// 문제점: 원래 코드에서는 p 변수를 루프 밖에서 한 번만 선언하고 초기화했기 때문에, 첫 번째 테스트 케이스의 결과가 p에 담긴 채로 두 번째 테스트 케이스를 처리하게 된거다.

// 각 테스트 케이스마다 독립적인 결과를 출력해야 하므로, 반복문 내부에서 p 변수를 초기화해야 한다.
