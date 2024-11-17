const fs = require('fs')

//reading of file text

const readText = fs.readFileSync('./texts/read.txt', 'utf-8')
console.log(readText);



const writeText = fs.writeFileSync('./texts/write.text', readText + 'this is  my written text')
console.log(writeText);