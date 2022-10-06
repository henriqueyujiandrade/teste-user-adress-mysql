import AppDataSource from "../../data-source"
import { Address } from "../../entities/adress.entity"
import { AppError } from "../../errors/AppError"

const deleteAddressService = async (id: string): Promise<void> =>{
  const addressRepository = AppDataSource.getRepository(Address)
  const address = await addressRepository.findOne({where: {id: parseInt(id)}})

  if(!address){
    throw new AppError("address not found or already deleted")
  }
  
  await AppDataSource
  .createQueryBuilder()
  .delete()
  .from(Address)
  .where("id = :id", {id})
  .execute()
}

export default deleteAddressService