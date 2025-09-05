const fs = require('fs');
let [A, B, C] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let nums = [A, B, C];

nums.sort((a, b) => a - b);

console.log(nums[1]);