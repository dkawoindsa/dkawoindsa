const fs = require('fs');
let nums = fs.readFileSync(0).toString().trim().split(' ');

console.log(nums[0], nums[1], Number(nums[0]) + Number(nums[1]));