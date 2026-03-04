function solution(k, tangerine) {
    let answer = 0;
    let count = 0;
    let countArray = [];
    let cnt = 0;
    tangerine.sort((a, b) => a - b);
    for (let i = 0; i < tangerine.length; i++) {
        if(tangerine[i] === tangerine[i + 1]) {
            count++;
        } else {
            countArray.push(count + 1);
            count = 0;
        }
    }
    countArray.sort((a, b) => b - a);
    
    while(k > 0) {
        k = k - countArray[cnt];
        cnt++;
        answer++;
    }
        
    
    
    return answer;
}