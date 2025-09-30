function solution(s) {
    let answer = [];
    let cnt = 0;
    let cntZero = 0;
    
    while(s !== '1') {
        let len = 0;
        for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            len++;
        } else {
            cntZero++;
        }
    }
    s = len.toString(2);
    cnt++
    }
   
    answer.push(cnt, cntZero)
    return answer;
}