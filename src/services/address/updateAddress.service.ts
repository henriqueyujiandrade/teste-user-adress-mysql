import AppDataSource from "../../data-source";
import { Address} from "../../entities/adress.entity"
import { AppError } from "../../errors/AppError";
import { validate } from "class-validator"
import { IUpdateAdressRequest } from "../../interfaces/address";

const updateAddressService = async (id: string, address: IUpdateAdressRequest) => {
    if(!address.logradouro || !address.numero || !address.cidade || !address.uf || !address.cep || !address.bairro || !address.complemento ){
        throw new AppError(`'logradouro', 'numero', 'cidade', 'uf', 'cep', 'bairro', 'complemento' are required fields`)
    }

    const addressRepository = AppDataSource.getRepository(Address)
    const findAddress = await addressRepository.findOne({
        where:{
            id: parseInt(id)
        },   
    })

    if (!findAddress) {
        throw new AppError("address not found");
    }
    const errors = await validate(address)
    if (errors.length > 0 && errors[0].constraints){        
        throw new AppError(errors[0].constraints.isLength)
    }
    

    findAddress.logradouro = address.logradouro
    findAddress.numero = address.numero
    findAddress.cidade = findAddress.cidade
    findAddress.uf = findAddress.uf
    findAddress.cep = findAddress.cep
    findAddress.bairro = address.bairro
    findAddress.complemento = address.complemento


    await addressRepository.save(findAddress)
    return findAddress
}

export default updateAddressService