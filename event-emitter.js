const EventEmitter = require('events')

const myEmitter = new EventEmitter()

//first listener
myEmitter.on('birthday', () => {
    console.log('HAPPY BIRTHDAY TO YOU');
})

myEmitter.on('birthday', (gift) => {
    console.log(`i will send a gift ${gift}`);
})


myEmitter.emit('birthday', 'watch')