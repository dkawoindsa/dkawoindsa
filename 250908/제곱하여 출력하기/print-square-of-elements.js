const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split('\n');

let nums = arr[1].split(' ');

console.log(nums.map(num => num * num).join(' '));