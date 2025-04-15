/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * start: 현재 탐색을 시작할 배열의 인덱스
 * target: 남은 목표 합계
 * currCombination: 현재까지 선택한 숫자들의 배열
 */
var combinationSum = function(candidates, target) {
    const result = [];
    const backtrack = (start, target, currCombination) => {
        if(target === 0){
            result.push([...currCombination]);
            return;
        }
        if(target < 0) return;

        for(let i = start; i < candidates.length; i++){
            currCombination.push(candidates[i]);
            backtrack(i, target - candidates[i], currCombination);
            currCombination.pop();
        }
    };
    backtrack(0, target, []);
    return result;
};