function solution(n) {
    // n의 약수 중 홀수의 개수를 구하는 문제
    let answer = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && i % 2 === 1) {
            answer++;
        }
    }
    
    
    return answer;
}