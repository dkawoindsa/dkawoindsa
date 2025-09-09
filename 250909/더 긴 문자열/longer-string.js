const fs = require('fs');
let [A, B] = fs.readFileSync(0).toString().trim().split(' ');

if (A.length > B.length) {
    console.log(A, A.length);
} else if (A.length < B.length) {
   console.log(B, B.length);
} else {
    console.log('same');
}