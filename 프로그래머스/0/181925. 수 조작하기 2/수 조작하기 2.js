function solution(numLog) {
    return numLog.reduce((acc,curr,index) =>{
        const diff = curr - numLog[index-1]
        switch(diff){
            case 1:
                acc += 'w'
                break;
            case -1:
                acc += 's'
                break;
            case 10:
                acc += 'd'
                break;
            case -10:
                acc += 'a'
        }
        return acc
    },'')
}