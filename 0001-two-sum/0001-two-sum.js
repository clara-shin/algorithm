/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 값과 인덱스를 저장할 해시맵
    const numMap = new Map();
    
    // 배열을 한 번 순회
    for (let i = 0; i < nums.length; i++) {
        // 현재 숫자
        const currentNum = nums[i];
        // 목표값에서 현재 숫자를 뺀 값(찾아야 할 보완 숫자)
        const complement = target - currentNum;
        
        // 보완 숫자가 해시맵에 있는지 확인
        if (numMap.has(complement)) {
            // 있다면 현재 인덱스와 보완 숫자의 인덱스를 반환
            return [numMap.get(complement), i];
        }
        
        // 현재 숫자와 그 인덱스를 해시맵에 저장
        numMap.set(currentNum, i);
    }
    
    // 문제의 조건에 의해 항상 해답이 존재하므로 이 부분은 실행되지 않음
    return [];
};