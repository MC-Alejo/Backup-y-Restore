const {Client} = require('pg');
require('dotenv').config();

class DataBase{
    constructor(){
        //a q bd? le tengo que decir a donde conectarse
        // Client busca en las variables de entorno por eso es le tengo que decir a q bd conectar
        // - a que servidor conectar o host en el que se encuentra
        // - nombre de la bd
        // - necesitamos saber el puerto en el que corre la bd esto basicamente es por si tenemos muchas bd (postgres en 5432 y sqlserver en otro)
        // - necesitamos el usuario
        // - una contraseña
        this.client = new Client({
            host: process.env.HOST,
            database: process.env.DB_NAME,
            port: process.env.PORT,
            user: process.env.USER,
            password: process.env.PASSWORD,
        });
    }


    async connect(){
        await this.client.connect()
        .then(() => console.log('db connect'))
        .catch((err) => {console.log(err)})
    }


    async disconnect(){
        await this.client.end()
        .then(() => console.log('db disconnect'))
        .catch((err) => {console.log(err)});
    }


    async extraerFecha(){
        this.connect();

        //extraigo el timestamp del momento en que se realiza el backup
        const query1 = await this.client.query("select to_char(CURRENT_TIMESTAMP, 'YYYY-MM-DD_HH24-MI-SS.US') AS fecha")
        .catch(e=>{throw e});

        let {fecha=''} = query1.rows[0];

        this.disconnect();

        return fecha;
    }

}

module.exports = DataBase;