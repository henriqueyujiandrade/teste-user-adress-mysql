import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users";
import { AppError } from "../../errors/AppError";
import { validate } from "class-validator"

const updateUserService = async (id: string, user: IUserRequest) => {
    if(!user.nome || !user.sobrenome || !user.email || !user.telefone || !user.cpf){
        throw new AppError(`'nome', 'sobrenome', 'email', 'telefone', 'cpf' are required fields`)
    }

    const userRepository = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOne({
        where:{
            id: parseInt(id)
        },   
    })

    if (!findUser) {
        throw new AppError("user not found");
    }
    const errors = await validate(user)
    if (errors.length > 0 && errors[0].constraints){
        if(errors[0].constraints.isEmail){
            throw new AppError(errors[0].constraints.isEmail)
        }
        if(errors[0].constraints.isLength){
            throw new AppError(errors[0].constraints.isLength)
        }
    }

    findUser.nome = user.nome
    findUser.sobrenome = user.sobrenome
    findUser.email = user.email
    findUser.telefone = user.telefone
    findUser.cpf = user.cpf

    await userRepository.save(findUser);  
    return findUser;

}

export default updateUserService