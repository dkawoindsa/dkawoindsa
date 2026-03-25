function solution(clothes) {
    let answer = 1;
    let clothesObj = {};
    
    for (let [name, category] of clothes) {
        clothesObj[category] = (clothesObj[category] || 0) + 1;
    }
    
    for (let category in clothesObj) {
        answer *= (clothesObj[category] + 1)
    }
    
    return answer - 1;
}