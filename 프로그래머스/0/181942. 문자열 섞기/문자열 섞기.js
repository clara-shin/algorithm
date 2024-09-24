function solution(str1, str2) {
    return [...str1].reduce((acc,_,index)=>{
        return acc.concat([...str1][index], [...str2][index])
    },[]).join('')   
}