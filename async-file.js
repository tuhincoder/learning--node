//reading text file asynchronously

fs.readFile('./text/read.text', 'utf-8', (err, data) => {
    if (err) {
        throw Error('error reading text')
    }
    console.log(data);
}) 