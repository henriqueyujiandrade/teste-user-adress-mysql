import AppDataSource from "../../data-source"
import { AppError } from "../../errors/AppError"
import { Address } from "../../entities/adress.entity"
import { User } from "../../entities/user.entity"

const listAddressService = async (id: string): Promise<Address[]> => {
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOne({
        where: {
        id: parseInt(id)        
        }
    })
    if(!user){
        throw new AppError("user not found")
    }

    const addressRepository = AppDataSource.getRepository(Address)
    const address = await addressRepository.find({ 
        where: {
          user:{
            id: parseInt(id)
          }
        }
    })
    return address

}

export default listAddressService