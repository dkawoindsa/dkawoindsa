function solution(phone_number) {
    let answer = '';
    let starLen = phone_number.length - 4;
    
    for (let i = 0; i < starLen; i++) {
        answer += '*';
    }
    
    answer += phone_number.slice(-4);
    
    return answer;
}