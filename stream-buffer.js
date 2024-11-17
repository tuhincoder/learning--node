const http = require('http')
const fs = require('fs')

const server = http.createServer();

server.on('request', (req, res) => {
    if (req.url === '/read-file' && req.method === 'GET') {
        //streaming file reading
        const readableStream = fs.createReadStream(process.cwd() + '/texts/read.txt')
        readableStream.on('data', (buffer) => {
            res.statusCode = 200;
            res.write(buffer)

        })

        readableStream.on('end', () => {
            res.statusCode = 200;
            res.end('the stream is over')
        })
    }


})

server.listen(5000, () => {
    res.statusCode = 200;
    console.log(`server is listening on port 5000`);
})