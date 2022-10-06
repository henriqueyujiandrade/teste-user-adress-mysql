import { IAddressRequest} from "../../interfaces/address";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { Address } from "../../entities/adress.entity";
import { validate } from "class-validator";

const createAddressService = async ({id_usuario, logradouro, numero, cidade, uf, cep, bairro, complemento}: IAddressRequest): Promise<Address> => {
    if(!id_usuario || !logradouro || !numero || !cidade || !uf || !cep || !bairro || !complemento){
        throw new AppError(`'id_usuario', 'logradouro', 'numero', 'cidade', 'uf', 'cep', 'bairro', 'complemento' are required fields`)
    }

    const addressRepository = AppDataSource.getRepository(Address);
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where:{
        id: id_usuario
        }
    }) 

    if(!user){
        throw new AppError("user not found")
    }

    const address = {
        user,
        logradouro,
        numero,
        cidade,
        uf,
        cep,
        bairro,
        complemento
    }
    const newAddress = addressRepository.create(address)

    const errors = await validate(newAddress)
    if (errors.length > 0 && errors[0].constraints){        
            throw new AppError(errors[0].constraints.isLength)
    }

    await addressRepository.save(newAddress)
    return newAddress
};

export default createAddressService;