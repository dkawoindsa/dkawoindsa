const fs = require('fs');
let nums = fs.readFileSync(0).toString().trim().split('\n');

console.log((Math.round(nums[0] * 1000) / 1000).toFixed(3))
console.log((Math.round(nums[1] * 1000) / 1000).toFixed(3))
console.log((Math.round(nums[2] * 1000) / 1000).toFixed(3))