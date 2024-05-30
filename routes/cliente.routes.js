import { Router } from 'express'
import ClienteController from '../controllers/cliente.controller.js'
import { 
    createClienteValidator, updateClienteValidator, deleteClienteValidator 
    } from '../validators/cliente.validator.js'

const router = Router()

router.get('/', ClienteController.index)
router.post('/', createClienteValidator, ClienteController.create)
router.get('/:id', ClienteController.show)
router.put('/:id', updateClienteValidator, ClienteController.update)
router.delete('/:id', deleteClienteValidator, ClienteController.delete)
// ...

export default router