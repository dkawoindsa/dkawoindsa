function solution(s) {
    let answer = [];
    let char = [];
    
    for (let i = 0; i < s.length; i++) {
        if (char.includes(s[i])) {
            answer.push(i - char.lastIndexOf(s[i]));
        } else {
            answer.push(-1);
        }
        
        
        char.push(s[i]);
    }
    
    
    return answer;
}