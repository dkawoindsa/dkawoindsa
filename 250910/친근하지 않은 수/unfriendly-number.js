const fs = require('fs');
let N = fs.readFileSync(0).toString().trim();
let answer = [];

for (let i = 1; i <= N; i++) {
    if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
          answer.push(i);
    } 
}

console.log(answer.length);