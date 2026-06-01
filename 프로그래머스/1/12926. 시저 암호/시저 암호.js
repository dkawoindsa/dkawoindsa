function solution(s, n) {
    let answer = '';

    for (let i = 0; i < s.length; i++) {

        if (s[i] === ' ') {
            answer += ' ';
            continue;
        }

        if (s[i] >= 'A' && s[i] <= 'Z') {
            answer += String.fromCharCode((s.charCodeAt(i) - 65 + n) % 26 + 65);
        } else if (s[i] >= 'a' && s[i] <= 'z') {
            answer += String.fromCharCode((s.charCodeAt(i) - 97 + n) % 26 + 97);
        }
    }

    return answer;
}
