const fs = require('fs');
let N = fs.readFileSync(0).toString().trim();
let sum = 0;
for (let i = 0; i <= 100; i++) {
    if (sum >= N) {
        console.log(i - 1);
        break;
    }
    sum += i;
}