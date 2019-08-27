const Primus = require('primus');

let go = (server) => {
   let primus = new Primus(server, {});

    primus.on('connection', (spark) =>{
        console.log('sparky');
        
        spark.on('data', (data) => {
            primus.write(data);
        });
    });

}

module.exports.go = go;
