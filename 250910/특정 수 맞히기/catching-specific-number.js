const fs = require('fs');
let inputs = fs.readFileSync(0).toString().trim().split('\n');
let i = 0;

while(inputs[i] !== 25) {
    if (inputs[i] > 25) {
        console.log('Lower')
    } else if (inputs[i] < 25) {
        console.log('Higher')
    } else {
        console.log('Good')
        break;
    }
    i++;
}