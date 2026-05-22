function solution(s) {
    let answer = []; 
    s = s.split(' ');
    
    for (let i = 0; i < s.length; i++) {
        let word = '';
        for (let j = 0; j < s[i].length; j++) {
            if (j % 2 === 0) {
                word += s[i][j].toUpperCase();
            } else {
                word += s[i][j].toLowerCase();
            }
        }
        answer.push(word);
    }
    
    return answer.join(' ');
}