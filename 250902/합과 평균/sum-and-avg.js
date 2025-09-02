const fs = require('fs');
let nums = fs.readFileSync(0).toString().trim().split(' ');

let A = Number(nums[0]);
let B = Number(nums[1]);

console.log( A + B, ((A + B) / 2).toFixed(1))