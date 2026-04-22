function solution(x) {
    let sum = 0;
    let numX = x.toString().split('').map(Number);
    
    for (let i = 0; i < numX.length; i++) {
        sum += numX[i];
    }
    
    
    
    return x % sum === 0 ? true : false;
}