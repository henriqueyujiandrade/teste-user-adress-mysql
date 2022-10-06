import { Request, Response} from "express"
import createUserService from "../services/users/createUser.service"
import deleteUserService from "../services/users/deleteUser.service"
import listSingleUserService from "../services/users/listSingleUser.service"
import listUsersService from "../services/users/listUsers.service"
import updateUserService from "../services/users/updateUser.service"



export const createUserController = async (req: Request, res: Response) => {     
        const { nome, sobrenome, email, telefone, cpf} = req.body
        const newUser = await createUserService({nome, sobrenome, email, telefone, cpf})
        return res.status(200).json({
            codigo: 200,
            status: "success",
            mensagem: "user created with success",
            dados: newUser
        })         
}

export const listUsersController = async (req: Request, res: Response) => {
    const users = await listUsersService()
    return res.status(200).json({
        codigo: 200,
        status: "success",
        mensagem: "list users with success",
        dados: users
    })     
}

export const listSingleUserController = async (req: Request, res: Response) => {   
    const {id_usuario} = req.params
    const user = await listSingleUserService(id_usuario)
    return res.status(200).json({
        codigo: 200,
        status: "success",
        mensagem: "list user with success",
        dados: user
    })     
}

export const updateUserController = async (req: Request, res: Response) => {
    const id = req.params.id_usuario;
    const newUser = req.body;
    const updatedUser = await updateUserService(id, newUser)        
    return res.status(200).json({
        codigo: 200,
        status: "success",
        mensagem: "user updated with success",
        dados: updatedUser
    }) 
}

export const deleteUserController = async (req: Request, res: Response) => {
    const id = req.params.id_usuario
    await deleteUserService(id)
    return res.status(200).json({
        codigo: 200,
        status: "success",
        mensagem: "user deleted with success"
    })     
}

