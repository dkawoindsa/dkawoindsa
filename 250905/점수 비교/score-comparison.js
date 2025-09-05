const fs = require('fs');
let num = fs.readFileSync(0).toString().trim().split('\n');

let [mathA, engA] = num[0].split(' ').map(Number);
let [mathB, engB] = num[1].split(' ').map(Number);

if (mathA > mathB && engA > engB) {
    console.log(1)
} else {
    console.log(2)
}