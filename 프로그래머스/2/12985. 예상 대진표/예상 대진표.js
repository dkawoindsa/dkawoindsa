function solution(n,a,b)
{
    let answer = 0;   

    for (let i = 0; i < n; i++) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
        
        if (a === b) {
            return answer;
        }
    }
    
}