const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let i = 0;

while(input[i] !== '0') {
    console.log(input[i])
    i++;
}
