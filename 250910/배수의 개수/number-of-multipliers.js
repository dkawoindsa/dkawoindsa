const fs = require('fs');
let nums = fs.readFileSync(0).toString().trim().split('\n');
let three = [];
let five = [];

for (let i = 0; i < 10; i++) {
    if (nums[i] % 3 === 0) {
        three.push(i);
    }
    if (nums[i] % 5 === 0) {
         five.push(i);
    }
}

console.log(three.length, five.length);