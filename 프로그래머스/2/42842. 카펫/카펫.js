function solution(brown, yellow) {
    let tot = brown + yellow;
    
    for (let h = 3; h <= Math.sqrt(tot); h++) {
        if (tot % h === 0) {
            let w = tot / h
            
            if ((w - 2) * (h - 2) === yellow) {
                return [w, h];
            }
        } 
    }
    
}