const fs = require('fs');
let N = fs.readFileSync(0).toString().trim();
let ans = '';

for (let i = 1; i < 6; i++) {
    ans += N * i + ' ';
}

console.log(ans);