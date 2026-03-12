function solution(n, words) {
    let set = new Set();
    
    for (let i = 0; i < words.length; i++) {
        
        if (set.has(words[i]) || i > 0 && words[i - 1].slice(-1) !== words[i][0]) {
           return [i % n + 1, Math.floor(i / n) + 1];
        }
        set.add(words[i]);
    }
    return [0, 0];
}