const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().split('\n')[0]);

for(let i = 1; i < 10; i ++){
	console.log(`${n} * ${i} = ${n * i}`);
}