const fs = require('fs');
let str = fs.readFileSync(0).toString().trim();
let answer = '';

for (let i = 0; i < 8; i++) {
    answer += str;
}

console.log(answer);