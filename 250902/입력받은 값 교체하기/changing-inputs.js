const fs = require('fs');
let exchange = fs.readFileSync(0).toString().trim().split(' ');

console.log(exchange[1] + ' ' + exchange[0])