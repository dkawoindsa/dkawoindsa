function solution(numbers, target) {
    let answer = 0;
    
    function dfs (idx, current) {
        
         if (idx === numbers.length) {
            if (current === target) answer++;
            return;
        }
        
        dfs(idx + 1, current + numbers[idx]);
        dfs(idx + 1, current - numbers[idx]);
       
    }
    
    dfs(0, 0);
    
    return answer;
}