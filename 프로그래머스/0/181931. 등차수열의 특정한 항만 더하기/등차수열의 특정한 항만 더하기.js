function solution(a, d, included) {
   return included.reduce((acc,_,i) => {
       return included[i] ? acc += a + d * i : acc += 0 
   }, 0)
}