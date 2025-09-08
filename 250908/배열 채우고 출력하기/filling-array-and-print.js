const fs = require('fs');
let array = fs.readFileSync(0).toString().trim().split(' ');
let answer = []

for (let i = array.length - 1; i >= 0 ; i--) {
    answer.push(array[i])
}

console.log(answer.join(''))