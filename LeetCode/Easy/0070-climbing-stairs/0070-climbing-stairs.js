/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  // 예외 처리: n이 1 이하인 경우 빨리 1 리턴하고 탈출
  if (n <= 1) {
    return 1;
  }

  // 피보나치 수열 계산을 위한 변수
  let first = 1; // f(0) = 1
  let second = 1; // f(1) = 1
  let result;

  // 피보나치 수열 계산
  for (let i = 2; i <= n; i++) {
    result = first + second;
    first = second;
    second = result;
  }

  return result;
}