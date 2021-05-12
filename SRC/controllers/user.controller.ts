import {Request, Response} from 'express';
import { request } from 'node:http';
import {getRepository} from 'typeorm'; //quiero una tabla y se la paso al user
import {User} from '../entity/User';

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    //metodo await es asincrono, ya que la busqueda toma tiempo
    const users = await getRepository(User).find(); //busqueda dentro de la tabla y de todos los elementos, es como un select * from
    return res.json(users);
};

export const getUser = async (req: Request, res: Response): Promise<Response> => {
    const userf= await getRepository(User).findOne(req.params.id);
    return res.json(userf);
};

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    //obtener repositorio y crear usuario
    const newUser =  getRepository(User).create(req.body);
    const saveUser = await getRepository(User).save(newUser);
    return res.json(newUser);
};

//recibe dos parametros un req.params.id(el usuario) y req.body (el dato a modificar) 
export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id); //buscar si existe
    if (user) {
        //cuando se quiera guardar el usuario se pasa el id y los datos
       getRepository(User).merge(user, req.body);
       const results = await getRepository(User).save(user);
       return res.json(results);
    }
    return res.status(404).json({msg: 'User not found'});
    
};

export const delUser = async (req: Request, res: Response): Promise<Response> => {
    const userf= await getRepository(User).delete(req.params.id);
    return res.json(userf);
};