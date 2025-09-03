const fs = require('fs');
let [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

A >= B ? console.log(1) : console.log(0);
A > B ? console.log(1) : console.log(0);
B >= A ? console.log(1) : console.log(0);
B > A ? console.log(1) : console.log(0);
A === B ? console.log(1) : console.log(0);
A !== B ? console.log(1) : console.log(0);