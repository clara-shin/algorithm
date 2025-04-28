/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0]; // 최저 가격 초기화 (첫 날 가격)
    let maxProfit = 0; // 최대 이익 초기화 (아직 이익 없음)

    // 두 번째 날부터
    for (let i = 1; i < prices.length; i++) {
        // 현재 가격이 최저 가격보다 낮으면 최저 가격 업데이트
        if (prices[i] < minPrice) {
        minPrice = prices[i];
        }
        // 현재 가능한 이익 계산 (현재 가격 - 최저 가격)
        const currentProfit = prices[i] - minPrice;

        // 최대 이익 업데이트
        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }
    }

    return maxProfit;
};