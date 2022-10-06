import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Unique, Check, OneToMany, Index } from "typeorm"
import { Address } from "./adress.entity"
import {Length,IsEmail} from "class-validator"

@Entity("users")

class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Length(3, 255)
    nome: string

    @Column()
    @Length(3, 255)
    sobrenome: string

    @Index({ unique: true })
    @Column()
    @IsEmail()
    email: string

    @Column()
    @Length(9, 45)
    telefone: string

    @Index({ unique: true })
    @Column()
    @Length(10, 45)
    cpf: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany((type) => Address, (adress) => adress.user)
    enderecos: Address[];
}

export { User }