/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let result = nums.length; // n으로 초기화
    
    // 인덱스 i와 nums[i]를 모두 XOR
    // 결국 빠진 숫자만 홀수 번 나타나서 결과로 남음
    for (let i = 0; i < nums.length; i++) {
        result ^= i ^ nums[i];
    }
    
    return result;
};