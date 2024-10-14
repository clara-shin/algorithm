function solution(arr, queries) {
    return queries.reduce((acc, cur)=>{
        const [to, from, val] = cur;
        const range = arr.slice(to, from + 1); //✨
        const biggerThan = range.filter(a => a > val);
        if(!biggerThan.length) return [...acc, -1]
        
        return [...acc, Math.min(...biggerThan)]
    },[])
}

/**
function solution(arr, queries) {
    return queries.map(([s, e, k]) => 
         arr.slice(s, e + 1)
            .filter((n) => n > k)
            .sort((a, b) => a - b)[0] || -1);
}
*/