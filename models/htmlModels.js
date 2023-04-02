
const HTMLResultSuccess=(Situacion)=>{
    const html=`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./styles/styleIndex.css">
        <title>DONE!</title>
    </head>
    <body>
        
    <div class="Contenedor2">
         <p class="large rise">${Situacion}</p> <p class="small outline">realizado con exito!</p>
    </div>

    </body>
    </html>`
    return html;
}

const HTMLResultError=(Situacion)=>{
    const html=`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./styles/styleIndex.css">
        <title>Error</title>
    </head>
    <body>
        
    <div class="Contenedor2">
         <p class="small outline">Lo siento, ha ocurrido un problema con el</p><p class="large rise">${Situacion}</p>
    </div>

    </body>
    </html>`
    return html;
}

const HTMLResultNotFound=(comentario)=>{
    const html=`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./styles/styleIndex.css">
        <title>Error</title>
    </head>
    <body>
        
    <div class="Contenedor2">
         <p class="large rise">¡ERROR!</p><p class="small outline">${comentario}</p>
    </div>

    </body>
    </html>`
    return html;
}

module.exports={
    HTMLResultError,
    HTMLResultSuccess,
    HTMLResultNotFound
}