function solution(array, commands) {
    let answer = [];
    let cmdArr = [];
    
    for (let i = 0; i < commands.length; i++) {
        cmdArr.push(array.slice(commands[i][0] - 1, commands[i][1]));
    }
    
     for (let i = 0; i < cmdArr.length; i++) {
        cmdArr[i].sort((a, b) => a - b);
        answer.push(cmdArr[i][commands[i][2] - 1]);
    }
    
    return answer;
}