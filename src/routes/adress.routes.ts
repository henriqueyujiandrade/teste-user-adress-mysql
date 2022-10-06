import Router from "express"
import { createAddressController, deleteAddressController, listAddressController, listSingleAddressController, updateAddressController } from "../controllers/address.controllers"

const addressRoutes = Router()

addressRoutes.post('', createAddressController )
addressRoutes.get('/usuario/:id_usuario', listAddressController)
addressRoutes.get('/:id_endereco_usuario', listSingleAddressController)
addressRoutes.put('/:id_endereco_usuario', updateAddressController)
addressRoutes.delete('/:id_endereco_usuario', deleteAddressController)

export default addressRoutes