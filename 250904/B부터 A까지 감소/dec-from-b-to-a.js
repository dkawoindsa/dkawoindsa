const fs = require('fs');
let [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let ans = '';

for (let i = B; i >= A; i--) {
    ans += i + ' ';
}

console.log(ans);