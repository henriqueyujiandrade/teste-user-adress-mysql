import { User } from "../../entities/user.entity"
import AppDataSource from "../../data-source"
import { AppError } from "../../errors/AppError"

const listSingleUserService = async (id: string): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({ 
        where: {
        id: parseInt(id)        
        },
        relations:{
            enderecos: true
        }
    })

    if(!user){
        throw new AppError("user not found")
    }

    return user

}

export default listSingleUserService