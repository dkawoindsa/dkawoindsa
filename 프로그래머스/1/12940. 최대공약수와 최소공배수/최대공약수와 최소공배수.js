function solution(n, m) {
    let maxDiv = 1;
    let leastMul = n * m;
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && m % i === 0) {
            maxDiv = i;
        } 
    }
    
    for (let i = m; i <= n * m; i++) {
        if (i % n === 0 && i % m === 0) {
            leastMul = i;
            break;
        } 
    }
    
    
    return [maxDiv, leastMul];
}