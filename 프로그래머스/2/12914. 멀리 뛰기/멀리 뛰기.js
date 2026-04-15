function solution(n) {

    let first = 1;
    let second = 2;
    
    
    for (let i = 3; i <= n; i++) {
        let temp = (first + second) % 1234567
        first = second;
        second = temp;
    }
    
    return n === 1 ? 1 : second;
}