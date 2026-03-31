function solution(s){
    let neededClosingCount = 0;
    let isCorrect = false;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            neededClosingCount++;
        } else {
                neededClosingCount--;
        }
        if (neededClosingCount < 0) {
            return false;
        }
    }
    


    return neededClosingCount === 0 ? true : false;
}