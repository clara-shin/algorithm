function solution(num_list) {
    const sum = num_list.reduce((acc, curr)=>{
        acc += curr
        return acc
    }, 0)
    const multiple = num_list.reduce((acc, curr)=>{
        acc *= curr
        return acc
    }, 1)
    
    return multiple < sum**2 ? 1 : 0; 
}