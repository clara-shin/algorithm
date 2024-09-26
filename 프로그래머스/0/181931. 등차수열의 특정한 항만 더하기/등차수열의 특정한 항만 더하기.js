function solution(a, d, included) {
    let answer = 0;
    for(let i=0;i < included.length;i++){
        included[i] ? answer += a+d*i : answer += 0
    }

    return answer;
}