const fs = require('fs');
let nums = fs.readFileSync(0).toString().trim().split('\n');
let N = nums[0];
let count = nums[1].split(' ');
let answer = [];

for (let i = 0; i < N; i++) {
    if (count[i] % 2 === 0) {
        answer.push(count[i]);
    }
}

console.log(answer.reverse().join(' '));