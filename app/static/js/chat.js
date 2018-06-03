// Make connection
var socket = io.connect('http://192.168.0.15:5000/');

/*
socket.on('connect', () => {
    console.log(socket.id);
});

*/

// Query DOM
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback')

// Emit events
btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
});

socket.emit('message', 'hello')
    socket.on('message', function(msg) {
      $('#messages').append('<li>' + msg + '</li>')
    })
    $('#send').on('click', function() {
      socket.send($('#myMessage').val());
      $('#myMessage').val('');
})

message.addEventListener('keypress', function(){
    socket.emit('typing', handle.value);
})

// Listen for events
socket.on('chat', function(data){
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});



socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});


