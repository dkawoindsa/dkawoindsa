const fs = require('fs');
let num = fs.readFileSync(0).toString().trim();

if (num < 0) {
    console.log('ice')
} else if (num >= 100) {
    console.log('vapor')
} else {
    console.log('water')
}
