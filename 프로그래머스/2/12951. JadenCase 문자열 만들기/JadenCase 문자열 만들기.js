function solution(s) {
    let answer = '';
    let isStart = true;
    
    for (let i = 0; i < s.length; i++) {
        
        if (s[i] === ' ') {
           answer += ' ';
           isStart = true;
        } else {
            if (isStart) {
                answer += s[i].toUpperCase();
                isStart = false;
            } else {
                answer += s[i].toLowerCase();
            }
        }
    }
    
    return answer;
}