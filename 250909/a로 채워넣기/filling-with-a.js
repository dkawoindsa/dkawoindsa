const fs = require('fs');
let str = fs.readFileSync(0).toString().trim().split('');


str.splice(1, 1, 'a');
str.splice(str.length - 2, 1, 'a');
console.log(str.join(''));