function solution(d, budget) {
    let answer = 0;
    d.sort((a, b) => a - b);
    let i = 0;
    
    while (budget >= 0) {
        budget = budget - d[i];
        i++;
        answer++
    }
    
    return answer - 1;
}