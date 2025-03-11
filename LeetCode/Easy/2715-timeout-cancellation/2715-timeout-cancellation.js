/**
 * @param {Function} fn - 실행할 함수
 * @param {Array} args - 함수에 전달할 인자 배열
 * @param {number} t - 함수 실행을 지연시킬 시간(밀리초)
 * @return {Function} - 함수 실행을 취소할 수 있는 취소 함수
 */
var cancellable = function(fn, args, t) {
    // 함수 실행을 예약하기 위한 타이머 ID를 저장할 변수
    let timerId = setTimeout(() => {
        // t 밀리초 후에 fn 함수를 args 인자들과 함께 실행
        fn(...args);
    }, t);
    
    // 취소 함수 반환
    return function cancelFn() {
        // 아직 실행되지 않은 함수 호출을 취소
        clearTimeout(timerId);
    };
};

// 테스트 예제 1
const result1 = [];
const fn1 = (x) => {
    result1.push({"time": Date.now() - startTime, "returned": x * 5});
    return x * 5;
};
const args1 = [2];
const t1 = 20;
const cancelTimeMs1 = 50;

let startTime = Date.now();
const cancelFn1 = cancellable(fn1, args1, t1);
setTimeout(cancelFn1, cancelTimeMs1);

// 결과 확인을 위한 타이머 (실제 코드에서는 필요 없음)
setTimeout(() => {
    console.log("예제 1 결과:", result1);
    // 예상 출력: [{"time": ~20, "returned": 10}]
}, 100);

// 테스트 예제 2
const result2 = [];
const fn2 = (x) => {
    result2.push({"time": Date.now() - startTime, "returned": x**2});
    return x**2;
};
const args2 = [2];
const t2 = 100;
const cancelTimeMs2 = 50;

startTime = Date.now();
const cancelFn2 = cancellable(fn2, args2, t2);
setTimeout(cancelFn2, cancelTimeMs2);

// 결과 확인을 위한 타이머
setTimeout(() => {
    console.log("예제 2 결과:", result2);
    // 예상 출력: [] (함수가 실행되기 전에 취소됨)
}, 150);

// 테스트 예제 3
const result3 = [];
const fn3 = (x1, x2) => {
    result3.push({"time": Date.now() - startTime, "returned": x1 * x2});
    return x1 * x2;
};
const args3 = [2, 4];
const t3 = 30;
const cancelTimeMs3 = 100;

startTime = Date.now();
const cancelFn3 = cancellable(fn3, args3, t3);
setTimeout(cancelFn3, cancelTimeMs3);

// 결과 확인을 위한 타이머
setTimeout(() => {
    console.log("예제 3 결과:", result3);
    // 예상 출력: [{"time": ~30, "returned": 8}]
}, 150);