function solution(n) {
    const countOne = (num) => num.toString(2).split('').filter(v => v === '1').length;
    const targetCount = countOne(n);
    
    let next = n + 1;
    
    while (true) {
        if (countOne(next) === targetCount) {
            return next;
        } 
        next++;
    }
    
    return next;
}