

// Utlizando modulos do node


const fs = require('fs') // file sistem

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        }

        console.log (data)

    });