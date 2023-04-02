const fs = require('fs');
const os = require('os');
const {HTMLResultSuccess,HTMLResultError}= require('../models/htmlModels');
const {escribirScriptRestores, ejecutarScriptRestores} = require('../helpers/readWrite');


const getRestore=async(req,res)=>{

    //hacer el restore
    try {
        const {backup}=req.query
        
        //existe el backup.fecha?
        if(!fs.existsSync(`./backups/${backup}`)){
            throw new Error('No existe archivo .backup!');
        }

        sistemaOperativo= os.platform();

        //escribo el script..
        escribirScriptRestores(backup,sistemaOperativo)

        //ejecutarScript
        ejecutarScriptRestores(sistemaOperativo);

        res.status(200);
        res.contentType('html');
        res.send(HTMLResultSuccess('RESTORE'));
    } catch (error) {
        console.log(error);
        res.status(500).send(HTMLResultError('RESTORE'));
        throw new Error('Algo salio mal');
    }

}


module.exports={
    getRestore
}