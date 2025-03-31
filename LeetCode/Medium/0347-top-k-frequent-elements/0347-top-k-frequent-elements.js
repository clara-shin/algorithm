/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const frequencyMap = new Map();
    
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    const buckets = Array(nums.length + 1).fill().map(() => []);

    for (const [num, freq] of frequencyMap) {
        buckets[freq].push(num);
    }
    
    const result = [];
    
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i].length > 0) {
            result.push(...buckets[i].slice(0, k - result.length));
        }
    }   
    
    return result;
}