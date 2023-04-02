const fs = require('fs');
const os = require('os');
const {request,response} = require('express');
const DB = require('../models/db');
const {HTMLResultSuccess,HTMLResultError}= require('../models/htmlModels');
const {escribirScriptBackups, ejecutarScriptBackups} = require('../helpers/readWrite');


const postBackup=async(req=request,res=response)=>{
    try {
        //insertar a la tabla de backups
        const db = new DB();
        const fecha= await db.extraerFecha();

        sistemaOperativo= os.platform();
        
        //escribo el script..
        escribirScriptBackups(fecha,sistemaOperativo);
    
        //lo ejecuto..
        ejecutarScriptBackups(sistemaOperativo);

        res.status(200);
        res.contentType('html');
        res.send(HTMLResultSuccess('BACKUP'));
    } catch (error) {
        console.log(error);
        res.status(500).send(HTMLResultError('BACKUP'));
        //throw new Error('Algo salio mal');
    }


}


module.exports={
    postBackup
}