function solution(n) {
    let answer = 0;
    let bin = n.toString(2);
    let nCount = 0;
    let count = 0;
    let find = true;
    
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] === '1') {
            nCount++;
        }
    }

    while (count !== nCount) {
        n += 1;
        count = 0;
        for (let i = 0; i < n.toString(2).length; i++) {
            if (n.toString(2)[i] === '1') {
                count++;
            }
        }
    }
    
    return n;
}