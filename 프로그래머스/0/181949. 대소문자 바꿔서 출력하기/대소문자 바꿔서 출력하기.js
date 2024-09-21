const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [...line];
}).on('close',function(){
    input.forEach((c, idx) => {
       (c === c.toLowerCase()) ? input[idx] = c.toUpperCase() : input[idx] = c.toLowerCase()
    })
    console.log(input.join(""))
});