function solution(l, r) {
    let result = [];
    for(let i = l; i <= r; i++) {
        if (isValidNumber(i)) {
            result.push(i);
        }
    }
    return result.length > 0 ? result : [-1];
}

function isValidNumber(num) {
    if (num % 5 !== 0) {
        return false;
    }
    return [...String(num)].every(digit => digit === '5' || digit === '0');
}

// function solution(l, r) {
//     let result = [];
//     for(let i=l; i<= r; i++){
//         if(i % 5 !== 0){
//            continue;
//         }
//         //i = 5,10,15,20,25....
//         const charI = String(i);
//         if(!([...charI].every(a=> a ==='5' ||a ==='0'))) continue;
//         result.push(i)
//     }
//     return result.length > 0 ? result : [-1];
// }