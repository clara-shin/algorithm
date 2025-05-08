/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
     if (nums.length === 0) return 0;

    // tails[i]는 길이가 i+1인 증가 부분 수열의 마지막 원소 중 가장 작은 값
    const tails = [];

    for (let num of nums) {
        // 이진 탐색으로 num이 들어갈 위치 찾기
        let left = 0;
        let right = tails.length;

        while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (tails[mid] < num) {
            left = mid + 1;
        } else {
            right = mid;
        }
        }

        // 찾은 위치에 num 삽입 또는 대체
        if (left === tails.length) {
        tails.push(num); // 새로운 최장 길이 발견
        } else {
        tails[left] = num; // 기존 값 갱신
        }
    }

    // tails 배열의 길이가 LIS의 길이
    return tails.length;
};