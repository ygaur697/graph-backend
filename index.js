const express = require('express');
const socket = require('socket.io');
const app = express();
/*app.use(cors({ origin: '*' }));
app.use(bodyParser);
let x = true;*/

const server = app.listen(3000, () => {
    console.log('Started in 3000');
});

const io = socket(server);


io.sockets.on('connection', (socket) => {
    console.log(`new connection id: ${socket.id}`);
    socket.emit('test event', 'data is getting generated');
    //sendData(socket);
    socket.on('test', data => {
        console.log("DATA ", data);
        let start = data.start_val;
        const arr = [];
        while (start <= data.end_val) {
            arr.push(start);
            start = start + data.interval;
        }
        socket.emit('response', arr);



    });

})



/*function sendData(socket) {

    if (x) {
        socket.emit('data1', Array.from({ length: 8 }, () => Math.floor(Math.random() * 590) + 10));
        x = !x;
    } else {
        socket.emit('data2', Array.from({ length: 8 }, () => Math.floor(Math.random() * 590) + 10));
        x = !x;
    }
    console.log(`data is ${x}`);
    setTimeout(() => {
        sendData(socket);
    }, 300);
}*/