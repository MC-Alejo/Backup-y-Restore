const fs = require('fs');
const { HTMLResultNotFound } = require('../models/htmlModels');

const verificarExisteFecha=async(req,res,next)=>{
    try {
        const {backup} = req.query;
        //const db = new DB();
        //const existe = await db.existeFecha(fecha);

        const files = await fs.promises.readdir('./backups');

        let bandera=0;
        for (const i in files){
            if (files[i]===backup){
                bandera=1;
                break;
            }
        }
        
        if(bandera===0){
            res.status(400) .contentType('html').send(HTMLResultNotFound('Fecha no existe en la bd'));
            return null;
        }

        next();

    } catch (error) {
        console.log(error);
        return res.status(400).send('Error bad request');
    }
}

module.exports ={
    verificarExisteFecha
}