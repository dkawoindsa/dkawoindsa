function solution(priorities, location) {
    let answer = 0;
    let queue = priorities.map((p, i) => [p, i]);
    
    while (true) {
        let current = queue.shift();
        
        if (queue.some(item => item[0] > current[0])) {
            queue.push(current);
        } else {
            answer++
            
            if (location === current[1]) {
                return answer;
            }
        }
    }
    
}