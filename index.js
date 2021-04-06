const Server = require('./models/server');
require('dotenv').config();
const server = new Server();
server.execute();

//Servidor de express
// const express = require('express');
// const app = require('express')();

//Servidor de socket
// const server = require('http').createServer(app);
//Configuracion del socket server
// const io = require('socket.io')(server);

//Desplegar el directorio publico
// app.use( express.static( __dirname + '/public'));
// //Conexion
//socket del lado del servidor
// io.on('connection', ( socket ) => {  //socket es el cliente que se conecto
//     // console.log(socket.id);
//     // socket.emit('mensaje-bienvenido', {
//     //     msg:'Bienvenido al server',
//     //     fecha: new Date()
//     // }); 
//     socket.on('mensaje-to-server',(data)=>{
//         console.log(data);

//         io.emit('mensaje-from-server',data);
//     });
//  });
//Puerto de escucha
// server.listen(8080,()=>{
// console.log(`Server corriendo en el puerto: 8080`);
// });

//para un cliente en especifico usar socket , para todos los conectads, usar io