const fs = require('fs');
let N = fs.readFileSync(0).toString().trim();
let sum = 0;

for (let i = 1; i <= 100; i++) {
     sum += i;
    if (sum > N) {
        console.log(i);
        break;
    }
}