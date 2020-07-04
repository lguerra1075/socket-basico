
        var socket = io();
        socket.on('connect', function(){
            console.log('conectado al servidor')
        });

        // Escuchar
        socket.on('disconnect', function(){
            console.log('perdimos conexion con el servidor')
        });

        //enviar informacion
        socket.emit('enviarMensaje', {
            usuario: 'Luis',
            mensaje: 'Hola Mundo'
        }, (resp) =>{
            console.log('resp server: ', resp);
        });

        socket.on('enviarMensaje', function(message){
            console.log(message.mensaje)
        });
