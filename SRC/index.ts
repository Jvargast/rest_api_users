//Inicio del servidor "npm init -y"
//Modulo express-> "npm i express"
//Llamar un tipo de modulo que incluya los tipos de datos de xpress en typescript
//Instalar tupescript -> "npm i typescript -D" para que no lo guarde en dependences, sino que en DEv dependences (cuando estamos desarrollando)
//Instalar otros modulos complementos->los tipos de datos express -> "npm i @types/express -D" modulo de desarrollo
//Intermediario entre la aplicaion y la base de datos (orm), sin usar sentencias sql
//instalar el modulo morgan que ayuda a ver las peticiones http que van llegando al servidor
//instalar el modulo cors, luego cuando quiera utilizar el servidor quiera utilizar un framework de javascript para conector con el servidor
//Se hace con el comando "npm i morgan cors"
//Utilizar base de datos mysql con typeorm
//Para la instalación seguir typeorm.org 
//configurar typescript "npx tsc --init"
//import 'reflect-metadata';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {createConnection} from 'typeorm'; //llamando metodo crearconexion a la base de datos

//no reconoce el tipo de dato, por lo que hay que descargarlo con "npm i @types/morgan @types/cors -D"
//importando router
import userRoutes from './routes/user.routes';
const app = express(); //app es el servidor
createConnection(); //se ejecuta la funcion al inicio del poryecto y busca el archivo ormconfig.json
//ahora tratar de llamarlos
//middlewares ->funciones que se ejecutan antes de que lleguen a las rutas
app.use(cors()); //app quiero que utilices el modulo cors
app.use(morgan('dev')); //app quiero que utilices el modulo morgan, y el parametro es para poder ver mejor los mensajes por consola
app.use(express.json()); //modulo que viene de express llamado json, cuando nosotros desde una aplicacion cliente enviemos datos, podamos interpretar los datos en formato json, para poder manipularlos

//Routes
app.use(userRoutes);

app.listen(3000); //app escuche por el puerto 3000
console.log('Server on port', 3000); //cuando inicie que muestre memsaje y numero de puerto



