import { Router } from 'express'
import FornecedorController from '../controllers/fornecedor.controller.js'
import { 
    createFornecedorValidator, updateFornecedorValidator, deleteFornecedorValidator 
    } from '../validators/fornecedor.validator.js'

const router = Router()

router.get('/', FornecedorController.index)
router.post('/', createFornecedorValidator, FornecedorController.create)
router.get('/:id', FornecedorController.show)
router.put('/:id', updateFornecedorValidator, FornecedorController.update)
router.delete('/:id', deleteFornecedorValidator, FornecedorController.delete)
// ...

export default router