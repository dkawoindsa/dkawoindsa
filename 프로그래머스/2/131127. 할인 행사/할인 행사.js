function solution(want, number, discount) {
    let answer = 0;
    
    let wantObj = {};
    for (let i = 0; i < want.length; i++) {
        wantObj[want[i]] = number[i];
    }

    for (let i = 0; i <= discount.length - 10; i++) {
        
        let discountObj = {};
        
        for (let j = i; j < i + 10; j++) {
            let item = discount[j];
            discountObj[item] = (discountObj[item] || 0) + 1;
        }
        
        let isSame = true;
        
        for (let key in wantObj) {
            if (discountObj[key] !== wantObj[key]) {
                isSame = false;
                break;
            }
        }
        
        if (isSame) answer++;
    }

    return answer;
}