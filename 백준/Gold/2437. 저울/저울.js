const fs = require('fs');
const [n, weights] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 저울추 무게 배열을 오름차순으로 정렬
const weightArr = weights.split(' ').map(Number).sort((a, b) => a - b);

// 현재까지 만들 수 있는 최대 무게 (1부터 target-1까지 모든 무게를 만들 수 있다고 가정)
let target = 1;

// 각 저울추를 순회하며 확인
for (let i = 0; i < weightArr.length; i++) {
  // 현재 저울추의 무게가 target보다 크면, target이 만들 수 없는 최소 무게
  if (weightArr[i] > target) {
    break;
  }
  
  // 현재 저울추를 사용해 target을 업데이트
  // target + weightArr[i]까지의 모든 무게를 만들 수 있게 됨
  target += weightArr[i];
}

console.log(target);