function solution(num_list) {
    const lastItem = num_list[num_list.length-1]
    const lastItemBefore = num_list[num_list.length-2]
    let result = []

    if(lastItem > lastItemBefore ){
        result.push(lastItem - lastItemBefore)
    } else {
         result.push(lastItem * 2)
    }

    return [...num_list, ...result]
}