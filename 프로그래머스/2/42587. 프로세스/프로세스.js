function solution(priorities, location) {
    let queue = priorities.map((p, i) => [p, i]);
    let count = 0;
    
    while (true) {
        let current = queue.shift();
        
        if (queue.some(item => item[0] > current[0])) {
            queue.push(current);
        } else {
            count++;
            
            if (current[1] === location) {
                return count;
            }
        }
    }

}