//Comando para establecer la conexion
var socket = io();


var label = $('#lblNuevoTicket');

// escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});


socket.on('disconnect', function() {
    console.log('Pérdimos conexion con el servidor');
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});

socket.on('estadoActual', function(data) {
    label.text(data.actual);
});