function solution(n) {
    let answer = '';
    
    for (let i = 0; i < Math.ceil(n / 2); i++) {
        answer += '수박'
    }
    
    return n % 2 === 0 ? answer : answer.slice(0, -1);
}