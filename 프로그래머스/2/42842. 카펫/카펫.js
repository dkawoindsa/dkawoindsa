function solution(brown, yellow) {
    var answer = [];
    
    for (let i = 1; i <= brown + yellow; i++) {
        if ((brown + yellow) % i === 0 && ((i - 2) * ((brown + yellow) / i - 2)) === yellow && i >= (brown + yellow) / i) {
            
            answer.push(i, (brown + yellow) / i)
        }
    }
    
    
    
    return answer;
}