/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
        let left = 0;
    let right = height.length - 1;
    let maxWater = 0;
    
    while (left < right) {
        // 현재 두 선으로 만들 수 있는 물의 양 계산
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        const water = width * minHeight;
        
        // 최대값 업데이트
        maxWater = Math.max(maxWater, water);
        
        // 더 작은 높이를 가진 쪽의 포인터를 이동시킴
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxWater;
};