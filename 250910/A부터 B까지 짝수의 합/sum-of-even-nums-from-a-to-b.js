const fs = require('fs');
let [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let total = 0;

for (let i = A; i <= B; i++) {
    if (i % 2 === 0) {
        total += i;
    }
}

console.log(total);