/* 모듈패턴을 사용한 외부함수 분리
 * 단일 책임 원칙(SRP)
 */

// 비트 유틸리티 모듈
const BitUtils = (function () {
  // 프라이빗 캐시 테이블
  const byteReverseCache = initByteReverseCache();

  function initByteReverseCache() {
    const cache = new Array(256);
    // 캐시 초기화 로직...
    for (let i = 0; i < 256; i++) {
      let reversed = 0;
      let temp = i;

      for (let j = 0; j < 8; j++) {
        reversed = (reversed << 1) | (temp & 1);
        temp >>>= 1;
      }

      cache[i] = reversed;
    }
    return cache;
  }

  // 퍼블릭 API
  return {
    reverseBits: function (n) {
      // 비트 반전 로직...
      let byte1 = n & 0xff;
      let byte2 = (n >>> 8) & 0xff;
      let byte3 = (n >>> 16) & 0xff;
      let byte4 = (n >>> 24) & 0xff;

      let result =
        (byteReverseCache[byte1] << 24) |
        (byteReverseCache[byte2] << 16) |
        (byteReverseCache[byte3] << 8) |
        byteReverseCache[byte4];

      return result >>> 0;
    },
  };
})();

// 사용 방법
var reverseBits = BitUtils.reverseBits;
