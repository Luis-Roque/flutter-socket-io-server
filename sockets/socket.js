const {io}= require('../index');
const Unis=require("../models/unis");
const Uni = require('../models/uni');


const unis = new Unis();

unis.nuevaUni( new Uni('ITST'));
unis.nuevaUni( new Uni('UICSLP'));
unis.nuevaUni( new Uni('UASLP'));
unis.nuevaUni( new Uni('UNAM'));


//Mensajes de sockets
io.on('connection', client => {
    console.log('Cliente conectado');

    client.emit('unis-activas',unis.obtenerUnis());


    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    client.on('mensaje', (payload)=>{
        console.log('Mensaje!!', payload);
        io.emit('mensaje', { admin: 'Nuevo comunicado'});
    });
    client.emit('voto',(payload)=>{
        unis.votarUni(payload.id);
        io.emit('unis-activas',unis.obtenerUnis());
    });
    client.on('nueva-uni',(payload)=>{
        const newUni= new Uni(payload.nombre);
        unis.nuevaUni(newUni);
        io.emit('unis-activas',unis.obtenerUnis());
    });
    client.emit('borrar',(payload)=>{
        unis.borrarUni(payload.id);
        io.emit('unis-activas',unis.obtenerUnis());
    });
    //client.on('emitir-mensaje',(payload)=>{
        //console.log(payload);
        //io.emit('nuevo-mensaje',payload);//Emite mensaje a todos
        //client.broadcast.emit('nuevo-mensaje',payload);//Emite mensaje a todos menos al que lo envio

    //});
  });