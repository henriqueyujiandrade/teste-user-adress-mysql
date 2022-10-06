import { User } from "../../entities/user.entity"

export interface IUserRequest {
    nome: string
    sobrenome: string
    email: string    
    telefone: string
    cpf: string
}
