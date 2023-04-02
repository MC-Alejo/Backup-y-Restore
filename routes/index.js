const {Router} = require ('express');
const fs = require('fs');

const router=Router();


router.get('/',async(req,res)=>{
    let  html=`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./styles/styleIndex.css">
        <title>Res&Back</title>
    </head>
    <body>
        
    <div class="Contenedor">
         <form action="/backup" method="post">
            <button type="submit" class="boton">BACKUP</button>
        </form>
        <form action="/restore"method="get">
            <div>
            <select name="backup">`
            try {
                const files = await fs.promises.readdir('./backups');
                
                for (const i in files) {
                    let nommili=files[i].split('.');
                    let nom= nommili[0];
                    let mili= nommili[1];
                    let fechahora = nom.split('_');
                    let [anio,mes,dia]= fechahora[1].split('-');
                    let [hora,min,seg]= fechahora[2].split('-');
                    html+=`<option value="${files[i]}">BACKUP ${dia}/${mes}/${anio} ${hora}:${min}:${seg}</option>`;   
                }

            } catch (error) {
                console.log(error);
            }

       html+= `</select>
            </div>
            <button type="submit" class="boton">RESTORE</button>
        </form>
    </div>

    </body>
    </html>`;

    res.contentType('html');
    res.send(html);

})


module.exports=router;