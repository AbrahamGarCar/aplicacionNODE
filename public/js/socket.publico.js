//Comando para establecer la conexion
var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lbEscritorio1 = $('#lblEscritorio1');
var lbEscritorio2 = $('#lblEscritorio2');
var lbEscritorio3 = $('#lblEscritorio3');
var lbEscritorio4 = $('#lblEscritorio4');

var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
var lblEscritorios = [lbEscritorio1, lbEscritorio2, lbEscritorio3, lbEscritorio4];

socket.on('estadoActual', function(data) {
    actualizaHTML(data.ultimos4);
});

socket.on('ultimos4', function(data) {
    // var audio = new Audio('../audio/new-ticket.mp3');
    // audio.play();
    // var audio = new Audio('audio/new-ticket.mp3');
    // audio.muted = true;
    // audio.play();
    // audio.muted = false;
    actualizaHTML(data.ultimos4);
});

function actualizaHTML(ultimos4) {
    for (var i = 0; i <= ultimos4.length - 1; i++) {
        lblTickets[i].text('Ticket ' + ultimos4[i].numero);
        lblEscritorios[i].text('Escritorio ' + ultimos4[i].escritorio);
    }

}