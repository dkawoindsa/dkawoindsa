function solution(n) {
    let a = 1;
    let b = 2;
    
    for (let i = 3; i <= n; i++) {
        let temp = (a + b) % 1234567;
        a = b;
        b = temp;
        
    }
    return n === 1 ? 1 : b;
}




