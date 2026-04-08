function solution(n) {
    let prv = 0;
    let prv2 = 1;
    
    for (let i = 2; i <= n; i++) {
        let next = (prv + prv2) % 1234567;
        prv = prv2;
        prv2 = next;
    }
    
    return prv2;
}