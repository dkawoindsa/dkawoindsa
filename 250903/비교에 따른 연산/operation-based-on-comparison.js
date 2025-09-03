const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

a > b ? console.log(a * b) : console.log(Math.floor(b / a))