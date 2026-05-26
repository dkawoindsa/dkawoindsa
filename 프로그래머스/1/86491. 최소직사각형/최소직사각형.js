function solution(sizes) {
    let answer = 0;
    let big = [];
    let small = [];
    
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][0] >= sizes[i][1]) {
            big.push(sizes[i][0])
            small.push(sizes[i][1])
        } else {
            small.push(sizes[i][0])
            big.push(sizes[i][1])
        }
    }
    
    
    return Math.max(...big) * Math.max(...small);
}