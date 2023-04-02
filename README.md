<h1 align="center"> BackUp y Restore de DB en postgres </h1>

## :warning: Antes de empezar :warning:

**Es necesario tener instalado:**
- PostgreSQL
- Node.js

Deben de conocer la configuracion de Postgres y de su BD, es decir, puerto, nombre de la BD, usuario y contraseña.


## Descargarlo
Descargar el ZIP (Click en Code y despues en descargar ZIP).

Extraerlo en algun directorio o carpeta a eleccion propia.

## Instalando y configurando
Abrir una terminal de Windows o Linux y copiar la ruta donde se encuentra el app.js.
Esto lo pueden hacer facil escribiendo en la terminal cd y luego arrastran la carpeta que extrayeron a la terminal.
Debe quedar algo así:

```shell
cd c:\ruta donde se encuentra\Res-Back-main
```

Ya ubicados en la carpeta, escriban en la terminal el siguiente codigo para installar las dependencias necesarias:
```shell
npm install
```

## **Como ultimo deben configurar el example.env**
Deben ir al archivo example.env y cambiarle el nombre, borrando example y dejando solo el .env

Y completen ese archivo que son las variables de entorno o "globales" con las cuales el codigo necesita para funcionar, con la informacion correspondiente que se les solicita en el mismo archivo.

## Testear
para correr el server, deben estar ubicados en la carpeta Res-Back-main como anteriormente se explico, y nomas deben poner en la terminal:
```shell
npm start
```

o tambien:

```shell
node app
```

**Y ya con eso, solo queda ingresar a http://localhost:3000/**
