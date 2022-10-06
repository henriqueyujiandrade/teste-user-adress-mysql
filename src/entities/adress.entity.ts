import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Unique, Check, ManyToOne } from "typeorm"
import { User } from "./user.entity"
import {Length,IsEmail} from "class-validator"

@Entity("address")

class Address {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Length(3, 255)
    logradouro: string

    @Column()
    @Length(3, 45)
    numero: string

    @Column()
    @Length(3, 255)
    cidade: string

    @Column()
    @Length(2, 2)
    uf: string

    @Column()
    @Length(8, 45)
    cep: string

    @Column()
    @Length(3, 255)
    bairro: string

    @Column()
    complemento: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne((type) => User, (user) => user.enderecos, {onDelete: "CASCADE"})
    user: User;
}

export { Address }