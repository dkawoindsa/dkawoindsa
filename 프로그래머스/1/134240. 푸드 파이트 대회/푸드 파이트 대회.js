function solution(food) {
    let answer = '';
    
    for (let i = 0; i < food.length; i++) {
        for (let j = 0; j < Math.floor(food[i] / 2); j++) {
            answer += i;
        }     
    }
    
    let reverseStr = answer.split('').reverse().join('');
    
    for (let i = 0; i < food[0]; i++) {
        answer += 0;
    }
    
    answer += reverseStr;
    
    
    return answer;
}