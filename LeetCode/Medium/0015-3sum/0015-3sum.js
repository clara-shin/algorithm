/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  const n = nums.length;

  if (n < 3) return result;

  nums.sort((a, b) => a - b); // 오름차순 정렬
  
  if (nums[0] > 0 || nums[n - 1] < 0) return result;

  // 배열을 순회하며 첫 번째 숫자 고정
  for (let i = 0; i < n - 2; i++) {
    // 중복된 값 건너뛰기 (첫 번째 숫자)
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // 첫 번째 숫자가 양수면 for문 탈출
    if (nums[i] > 0) break;

    // 현재 숫자와 가장 작은 두 숫자의 합 > 0 => 탈출
    if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break;

    // 현재 숫자와 가장 큰 두 숫자의 합 < 0 => 건너뛰기
    if (nums[i] + nums[n - 2] + nums[n - 1] < 0) continue;

    // 두 번째, 세 번째 숫자를 찾기 위한 투 포인터
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum < 0) {
        // 합이 0보다 작으면 left 포인터를 오른쪽으로 이동
        left++;
      } else if (sum > 0) {
        // 합이 0보다 크면 right 포인터를 왼쪽으로 이동
        right--;
      } else {
        // 합이 0이면 결과에 추가
        result.push([nums[i], nums[left], nums[right]]);

        // 중복된 값 건너뛰기 (두 번째, 세 번째 숫자)
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        // 다음 조합을 찾기 위해 포인터 이동
        left++;
        right--;
      }
    }
  }

  return result;
};
