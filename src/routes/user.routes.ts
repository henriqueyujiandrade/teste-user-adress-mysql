import Router from "express"
import { createUserController, deleteUserController, listSingleUserController, listUsersController, updateUserController } from "../controllers/user.controllers"

const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', listUsersController)
userRoutes.get('/:id_usuario', listSingleUserController)
userRoutes.put('/:id_usuario', updateUserController)
userRoutes.delete('/:id_usuario', deleteUserController)





export default userRoutes