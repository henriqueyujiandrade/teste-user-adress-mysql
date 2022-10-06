import { IUserRequest } from "../../interfaces/users"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { validate } from "class-validator"
import { AppError } from "../../errors/AppError"

const createUserService = async ({ nome,sobrenome,email,telefone,cpf}: IUserRequest): Promise<User> => {

    if(!nome || !sobrenome || !email || !telefone || !cpf){
        throw new AppError(`'nome', 'sobrenome', 'email', 'telefone', 'cpf' are required fields`)
    }

    const userRepository = AppDataSource.getRepository(User)
    const user = userRepository.create({
        nome,
        sobrenome,
        email,
        telefone,
        cpf
    })
    const errors = await validate(user)
    if (errors.length > 0 && errors[0].constraints){
        if(errors[0].constraints.isEmail){
            throw new AppError(errors[0].constraints.isEmail)
        }
        if(errors[0].constraints.isLength){
            throw new AppError(errors[0].constraints.isLength)
        }
    }

    await userRepository.save(user)    
    return user

}

export default createUserService