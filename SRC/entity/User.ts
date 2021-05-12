import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

//definicion de la tabla, primero hay que llamar a un decorador (mete info de una clase)
//la tabla donde se guardan los datos
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;
} 
