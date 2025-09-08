const fs = require('fs');
let [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let answer = [A, B];



for (let i = 0; i < 8; i++) {
    answer.push((answer[i] + answer[i + 1]) % 10);
}
console.log(answer.join(' '))