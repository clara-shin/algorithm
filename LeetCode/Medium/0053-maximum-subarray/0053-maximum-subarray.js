/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) return 0;
    
    let maxSum = nums[0]; // 최대 부분합을 저장
    let currentSum = nums[0]; // 현재 위치까지의 부분합
    
    // 배열의 두 번째 요소부터 순회
    for (let i = 1; i < nums.length; i++) {
        // 현재 요소를 포함한 부분합과 현재 요소만 선택하는 것 중 큰 값을 선택
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        // 전체 최대 부분합 업뎃
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
};