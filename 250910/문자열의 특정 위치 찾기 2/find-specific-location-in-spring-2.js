const fs = require('fs');
let alpha = fs.readFileSync(0).toString().trim();
const fruits = ['apple', 'banana', 'grape', 'blueberry', 'orange'];
let cnt = 0;


for (let i = 0; i < 5; i++) {
    if (fruits[i][2] === alpha || fruits[i][3] === alpha) {
        console.log(fruits[i])
        cnt++;
    }
}

console.log(cnt);