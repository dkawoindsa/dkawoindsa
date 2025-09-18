function solution(s) {
    s = s.split(' ');
    let len = s.length;
    s.sort((a, b) => (a - b));

    let answer = []
    answer.push(s[0]);
    answer.push(s[len - 1]);
    
    return answer.join(' ');
}