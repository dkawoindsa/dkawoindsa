function solution(s) {
    let answer = 0;
    
    for (let i = 0; i < s.length; i++) {
    let array = s.slice(i) + s.slice(0, i);
    let stack = [];
    let isValid = true;
        
    for (let ch of array) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else {
            let top = stack.pop();
            
            if (ch === ')' && top !== '(' || ch === '}' && top !== '{' || ch === ']' && top !== '[') {
                isValid = false;
                break;
            }
        }
    }
        if (stack.length !== 0) isValid = false;
        
        if (isValid) answer++
    }
    
    return answer;
}