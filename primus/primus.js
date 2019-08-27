const Primus = require('primus');

let go = (server) => {
   let primus = new Primus(server, {});

    primus.on('connection', () =>{
        console.log('sparky');
        
    });

}

module.exports.go = go;
