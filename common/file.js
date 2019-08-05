const fs = require('fs');

fs.readFile('forbidden.txt', (err, data) => {
    if (err) {
        return err
    }
    console.log(data.toString())
})

console.log('end');
