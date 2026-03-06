function solution(arr) {
    
    function gcb(a, b) {
        while (b !== 0) {
            let temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }
    
    function lcb(a, b) {
        return (a * b) / gcb(a, b);    
    }
    
    let answer = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        answer = lcb(answer, arr[i]);
    }
    
    return answer;
}