function solution(ingredient) {
    let stack = [];
    let hambuger = 0;
    
    for (let i of ingredient) {
        stack.push(i);
        
        if (
            stack.length >= 4 &&
            stack[stack.length - 4] === 1 &&
            stack[stack.length - 3] === 2 &&
            stack[stack.length - 2] === 3 &&
            stack[stack.length - 1] === 1
        )
            {
                stack.splice(stack.length - 4, 4)
                hambuger += 1;
            }
        
    }
    return hambuger;
}