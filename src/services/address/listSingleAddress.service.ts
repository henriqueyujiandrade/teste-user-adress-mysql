import { Address } from "../../entities/adress.entity"
import AppDataSource from "../../data-source"
import { AppError } from "../../errors/AppError"

const listSingleAddressService = async (id: string): Promise<Address> => {
    const addressRepository = AppDataSource.getRepository(Address)

    const address = await addressRepository.findOne({ 
        where: {
        id: parseInt(id)        
        }       
    })

    if(!address){
        throw new AppError("address not found")
    }

    return address

}

export default listSingleAddressService