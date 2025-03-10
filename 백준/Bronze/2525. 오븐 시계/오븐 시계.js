let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a,b] = input[0].split(' ').map(Number); // 배열원소에 Number함수를 적용해 리턴(메소드체이닝)
let c = Number(input[1]);

let totalMinute = a * 60 + b + c; // 분의 형태로 바꾸기

totalMinute = totalMinute % 1440; // 하루를 분으로 고친 값(1440)으로 나눈다. 하루를 넘길 수 있다.✅
let hour = parseInt(totalMinute / 60);
let minute = totalMinute % 60;

console.log(hour + " " + minute);