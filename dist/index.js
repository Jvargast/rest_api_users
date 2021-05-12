"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var typeorm_1 = require("typeorm"); //llamando metodo crearconexion a la base de datos
//no reconoce el tipo de dato, por lo que hay que descargarlo con "npm i @types/morgan @types/cors -D"
//importando router
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var app = express_1.default(); //app es el servidor
typeorm_1.createConnection(); //se ejecuta la funcion al inicio del poryecto y busca el archivo ormconfig.json
//ahora tratar de llamarlos
//middlewares ->funciones que se ejecutan antes de que lleguen a las rutas
app.use(cors_1.default()); //app quiero que utilices el modulo cors
app.use(morgan_1.default('dev')); //app quiero que utilices el modulo morgan, y el parametro es para poder ver mejor los mensajes por consola
app.use(express_1.default.json()); //modulo que viene de express llamado json, cuando nosotros desde una aplicacion cliente enviemos datos, podamos interpretar los datos en formato json, para poder manipularlos
//Routes
app.use(user_routes_1.default);
app.listen(3000); //app escuche por el puerto 3000
console.log('Server on port', 3000); //cuando inicie que muestre memsaje y numero de puerto
