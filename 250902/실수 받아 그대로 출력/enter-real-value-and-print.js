const fs = require('fs');
let N = Number(fs.readFileSync(0).toString().trim());

console.log(Math.round(N * 100) / 100);