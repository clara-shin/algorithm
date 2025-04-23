/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0; // 검색범위의 시작 인덱스
    let right = nums.length - 1; // 검색범위의 끝 인덱스

    // 이진 탐색
    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        // 중간 값이 오른쪽 끝 값보다 크면, 최소값은 오른쪽에 있음
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        }
        // 중간 값이 오른쪽 끝 값보다 작거나 같으면, 최소값은 왼쪽에 있음 (중간 포함)
        else {
            right = mid;
        }
    }

    // 반복이 끝나면 left와 right는 같은 인덱스을 가리키고, 
    //이 인덱스의 값(피봇포인트) = 최소값의 위치
    return nums[left];
};