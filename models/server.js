const express = require('express');
const rutasB= require('../routes/backup');
const rutasR= require('../routes/restore');
const rutaIndex=require('../routes/index');


class Server{
    constructor(){
        this.app = express();
        this.port=3000;
        //middlewares
        this.middlewares();

        //LAS RUTAS!!
        this.routes();
    }

    middlewares(){
        //directorio estatico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use('/backup',rutasB);
        this.app.use('/restore',rutasR);
        this.app.use('/',rutaIndex);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server escuchando en el puerto ${this.port}`)
          })
    }

}

module.exports=Server;