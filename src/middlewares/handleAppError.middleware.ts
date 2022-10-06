import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

const handleAppErrorMiddeware = (error: Error, req: Request, res: Response, _: NextFunction) => {
    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            codigo: 400,
            status: "error",
            mensagem: error.message
        })
    }

    if(error.message.includes('Duplicate entry')){
        return res.status(400).json({
            codigo: 400,
            status: "error",
            mensagem: "email or cpf already exists"
        })        
    }

    return res.status(500).json({
        message: 'internal server error'
    })
}

export default handleAppErrorMiddeware