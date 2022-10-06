import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"

const deleteUserService = async (id: string): Promise<void> =>{
  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOne({where: {id: parseInt(id)}})

  if(!user){
    throw new AppError("user not found or already deleted")
  }
  
  await AppDataSource
  .createQueryBuilder()
  .delete()
  .from(User)
  .where("id = :id", {id})
  .execute()
}

export default deleteUserService