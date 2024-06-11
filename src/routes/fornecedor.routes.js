import { Router } from 'express'
import FornecedorController from "../controllers/fornecedor.controller.js"
import { fornecedorValidator, fornecedorUpdateValidator, fornecedorIdValidator } from '../validators/fornecedor.validator.js'

const router = Router()

router.get('/', FornecedorController.index)
router.post('/', fornecedorValidator, FornecedorController.create)
router.get('/:id', fornecedorIdValidator, FornecedorController.show)
router.put('/:id', fornecedorUpdateValidator, FornecedorController.update)
router.delete('/:id', fornecedorIdValidator, FornecedorController.delete)

export default router