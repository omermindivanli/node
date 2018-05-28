//Node packages installation
const express = require('express');
const app = express();

//Socket.io instantiation
// const io = require('socket.io')();

//React as front-end
// app.set('view engine', 'html');

const port = process.env.PORT || 5000;

//Send data to client side & Router
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

//Websocket communication
// io.on('connection', socket => {
//   console.log('New user connected');
//   //default username
//   socket.username = 'Anonymous';
//   //Listen when you change the username
//   socket.on = ('change username',
//   data => {
//     socket.username = data.username;
//   });
//   //listen on new_message
//   socket.on('new_message', data => {
//     //broadcast the new message
//     io.sockets.emit('new_message', {
//       message: data.message,
//       username: socket.username
//     });
//   });
//   //listen on typing
//   socket.on('typing', data => {
//     socket.broadcast.emit('typing', { username: socket.username });
//   });
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
