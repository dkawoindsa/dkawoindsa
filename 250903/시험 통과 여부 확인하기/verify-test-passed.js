const fs = require('fs');
let num = fs.readFileSync(0).toString().trim();

num >= 80 ? console.log('pass') : console.log(`${80 - num} more score`)