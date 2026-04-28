function solution(s){
    let answer = true;
    let countP = 0;
    let countY = 0;
    
    s = s.toUpperCase();
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'P') {
            countP++;
        } else if (s[i] === 'Y') {
            countY++;
        }
    }
    
    
    return countP === countY ? true : false;
}