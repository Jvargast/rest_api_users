//Definir un enrutador mediante express
import {Router} from 'express'; //modulo router
const router = Router(); //devuelve un objeto router

import {getUsers, createUser, getUser, updateUser, delUser} from '../controllers/user.controller';

//rutas que se visitan
router.get('/users', getUsers); //primer enrutador
router.post('/users', createUser);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', delUser); 

//para utilizarlo hay que exportarlo
export default router;

