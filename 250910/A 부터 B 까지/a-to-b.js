const fs = require('fs');
let [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let ans = [];

while (A <= B) {
     ans.push(A);
    if (A % 2 === 1) {
        A = A * 2;    
    } else  {
        A += 3;
    }
   
}

console.log(ans.join(' '))