import { Router } from 'express'
import ClienteController from '../controllers/cliente.controller.js'
import { clienteValidator, clienteUpdateValidator, clienteIdValidator } from '../validators/cliente.validator.js'

const router = Router()

router.get('/', ClienteController.index)
router.post('/', clienteValidator, ClienteController.create)
router.get('/:id', clienteIdValidator, ClienteController.show)
router.put('/:id', clienteUpdateValidator, ClienteController.update)
router.delete('/:id', clienteIdValidator, ClienteController.delete)

export default router


