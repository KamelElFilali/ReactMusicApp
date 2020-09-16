const fs = require('fs')

function readDocument (fileName) {
    const datas = fs.readFileSync(fileName)
    return JSON.parse(datas)
}

module.exports = {
    readDocument
}
