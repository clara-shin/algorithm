const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const lines = input.split('\n');
const n = parseInt(lines[0]);
const pattern = lines[1];

// 패턴을 '*'를 기준으로 앞부분과 뒷부분으로 분리
const parts = pattern.split('*');
const prefix = parts[0];
const suffix = parts[1];

const results = [];

// 각 파일 이름에 대해 패턴 일치 여부 확인
for (let i = 0; i < n; i++) {
  const filename = lines[i + 2];
  
  // 파일 이름 길이가 prefix + suffix보다 짧으면 패턴과 일치 불가능
  if (filename.length < prefix.length + suffix.length) {
    results.push("NE");
    continue;
  }
  
  // 파일 이름이 패턴의 앞부분으로 시작하는지 확인
  if (!filename.startsWith(prefix)) {
    results.push("NE");
    continue;
  }
  
  // 파일 이름이 패턴의 뒷부분으로 끝나는지 확인
  if (!filename.endsWith(suffix)) {
    results.push("NE");
    continue;
  }
  
  // 모든 조건을 만족하면 패턴과 일치
  results.push("DA");
}

console.log(results.join('\n'));