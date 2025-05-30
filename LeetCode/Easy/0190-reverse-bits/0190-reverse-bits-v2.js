/**
 * 바이트 단위 캐싱
 * 32비트 숫자를 8비트씩 4개의 바이트로 나누어 각 바이트에 대한 결과를 캐싱
 * → 더 세분화된 메모이제이션(다양한 입력값에서 부분적인 재사용 가능, 효율성 ⬆)
 */

/**
 * 바이트(8비트) 단위 캐싱을 이용한 최적화된 비트 반전 함수
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = (function () {
  // 8비트(바이트) 단위 반전을 위한 캐시 테이블
  // 0~255 범위의 모든 바이트 값에 대한 비트 반전 결과를 미리 계산해 테이블에 저장
  const cache = new Array(256);

  // 캐시 테이블 초기화
  for (let i = 0; i < 256; i++) {
    let reversed = 0;
    let temp = i;

    // 8비트 반전
    for (let j = 0; j < 8; j++) {
      reversed = (reversed << 1) | (temp & 1);
      temp >>>= 1;
    }

    cache[i] = reversed;
  }

  return function (n) {
    // 32비트 정수를 8비트씩 4부분으로 나누어 처리(각각 캐시 테이블 활용)
    // 입력값이 다르더라도 동일한 바이트 패턴이 포함되어 있으면 캐시를 재사용할 수 있어 더 효율적
    let byte1 = n & 0xff; // 첫 번째 바이트 (최하위)
    let byte2 = (n >>> 8) & 0xff; // 두 번째 바이트
    let byte3 = (n >>> 16) & 0xff; // 세 번째 바이트
    let byte4 = (n >>> 24) & 0xff; // 네 번째 바이트 (최상위)

    // 각 바이트의 비트를 반전하고, 새 위치에 배치
    // 위치도 반전되어 처리됨 (최하위 바이트가 최상위로)
    let result = (cache[byte1] << 24) | (cache[byte2] << 16) | (cache[byte3] << 8) | cache[byte4];

    return result >>> 0; // 부호 없는 정수로 변환
  };
})();
/**
 *
 * 시간복잡도: O(1)
 * 초기화 단계는 한 번만 실행되며 256개 항목에 대해 8번씩 반복하므로 O(1)
 * 실제 비트 반전 함수는 입력 크기와 상관없이 비트 마스킹과 시프트 연산만 사용하여 상수 시간에 실행
 * 캐시된 값을 조회하는 것은 O(1) 시간 소요
 *
 * 공간복잡도: O(1)
 * 캐시 테이블이 256개의 항목을 저장하므로 O(256) = O(1)
 * 입력 크기와 관계없이 항상 동일한 크기의 메모리만 사용
 * 캐시 크기는 상수이므로 공간복잡도는 O(1)
 */

/**
 * 즉시 실행함수 표현식(IIFE) 방식
 * 장점:
 * 캐시 테이블을 클로저로 관리하여 내부 구현을 캡슐화함
 * 외부에서 캐시 테이블에 직접 접근할 수 없어 캐시 무결성 보장
 * 함수와 캐시가 하나의 단위로 묶여 있어 관련 코드가 한 곳에 모여있음
 * 단점:
 * 코드 구조가 중첩되어 복잡해 보일 수 있음
 * 초기화 로직과 실제 기능 로직이 같은 범위 내에 있어 분리가 명확하지 않음
 */
