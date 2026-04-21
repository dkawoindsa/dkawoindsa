function solution(n) {
    let answer = 0;
    if(Math.sqrt(n) === Math.floor(Math.sqrt(n))) {
        return Math.pow(Math.sqrt(n) + 1, 2);
    }
    
    return -1;
}