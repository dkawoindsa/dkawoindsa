function solution(left, right) {
    let answer = 0;
    let countDiv = 0;
    
    for (let i = left; i <= right; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                countDiv++;
            }
        }
        
    if (countDiv % 2 === 0) {
        answer += i;
    } else {
        answer -= i;
    }
        
    countDiv = 0;
        
    }
    
    return answer;
}