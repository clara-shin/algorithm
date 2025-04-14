const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [M, N] = input[0].split(' ').map(Number); // [조카 수, 과자 개수]
const snacks = input[1].split(' ').map(Number); // [각 과자의 길이]

const findMaxSnackLength = (nephews, snacks) => {
    // 가능한 길이 범위 설정 (1부터 최대 과자 길이)
    let left = 1;
    let right = Math.max(...snacks);
    let result = 0;
    
    while(left <= right){
        const mid = Math.floor((left + right) / 2); // 현재 시도해 볼 과자 길이
        let count = 0; // 현재 길이로 만들 수 있는 과자 조각 수
        for(const snack of snacks){
            count += Math.floor(snack / mid); // 각 과자를 mid로 몇 개 만들 수 있는지
        }
        if(count >= nephews){
            
            result = mid; // 현재 과자의 길이 가능하니까 해당 mid를 result에 업데이트
            left = mid + 1; // 더 긴 과자로 시도
        } else {
            right = mid - 1; // 과자 개수가 조카 수보다 적으면, 길이를 줄여야 함
        }
    }
    return result;
};
const answer = findMaxSnackLength(M, snacks);
console.log(answer);