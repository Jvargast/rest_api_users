"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Definir un enrutador mediante express
var express_1 = require("express"); //modulo router
var router = express_1.Router(); //devuelve un objeto router
var user_controller_1 = require("../controllers/user.controller");
//rutas que se visitan
router.get('/users', user_controller_1.getUsers); //primer enrutador
router.post('/users', user_controller_1.createUser);
router.get('/users/:id', user_controller_1.getUser);
router.put('/users/:id', user_controller_1.updateUser);
router.delete('/users/:id', user_controller_1.delUser);
//para utilizarlo hay que exportarlo
exports.default = router;
