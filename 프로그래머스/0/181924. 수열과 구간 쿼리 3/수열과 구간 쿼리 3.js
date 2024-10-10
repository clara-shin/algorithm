function solution(arr, queries) {

    queries.forEach((item, idx)=>{
        const [from, to] = item;
        let temp = arr[from]
        arr[from] = arr[to]
        arr[to] = temp
    })
    return arr
}

//function solution(arr, queries) {
//   queries.forEach(([a, b]) => {
//     [arr[a], arr[b]] = [arr[b], arr[a]];
//   });
//   return arr;
// }