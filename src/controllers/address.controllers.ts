import {Request, Response } from "express";
import createAddressService from "../services/address/createAddress.service";
import deleteAddressService from "../services/address/deleteAddress.service";
import listAddressService from "../services/address/listAddress.service";
import listSingleAddressService from "../services/address/listSingleAddress.service";
import updateAddressService from "../services/address/updateAddress.service";


export const createAddressController = async (req: Request, res: Response) => {
    const {id_usuario, logradouro, numero, cidade, uf, cep, bairro, complemento} = req.body
    const address = await createAddressService({id_usuario, logradouro, numero, cidade, uf, cep, bairro, complemento})
    return res.status(200).json({
        codigo: 200,
        status: "success",
        mensagem: "address created with success",
        dados: address
    })   
}

export const listAddressController = async (req: Request, res: Response) => {
    const {id_usuario} = req.params
    const addresses = await listAddressService(id_usuario)
    return res.status(200).json({
        codigo: 200,
        status: "success",
        mensagem: "list addresses with success",
        dados: addresses
    })     
}

export const listSingleAddressController = async (req: Request, res: Response) => {   
    const {id_endereco_usuario} = req.params
    const address = await listSingleAddressService(id_endereco_usuario)
    return res.status(200).json({
        codigo: 200,
        status: "success",
        mensagem: "list address with success",
        dados: address
    })     
}

export const updateAddressController = async (req: Request, res: Response) => {
    const id = req.params.id_endereco_usuario;
    const newUser = req.body;
    const updatedUser = await updateAddressService(id, newUser)        
    return res.status(200).json({
        codigo: 200,
        status: "success",
        mensagem: "address updated with success",
        dados: updatedUser
    }) 
}

export const deleteAddressController = async (req: Request, res: Response) => {
    const id = req.params.id_endereco_usuario
    await deleteAddressService(id)
    return res.status(200).json({
        codigo: 200,
        status: "success",
        mensagem: "address deleted with success"
    })     
}