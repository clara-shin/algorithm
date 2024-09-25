function solution(n) {
    let sum = 0;
    if(n%2 === 1){
        for(let i=0; i < n/2; i++){
            sum += n - i * 2
        }
    } else {
        for(let i=0; i < n/2; i++){
            sum += (n - i * 2) ** 2
        }
    }
    return sum;
}