function solution(n) {
    let prev = 0;
    let prev2 = 1;
    
    for (let i = 2; i <= n; i++) {
        const next = (prev + prev2) % 1234567;
        prev = prev2;
        prev2 = next;
    }
    return prev2;
}