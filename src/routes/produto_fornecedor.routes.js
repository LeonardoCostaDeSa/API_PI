import { Router } from 'express'
import Produto_FornecedorController from '../controllers/produto_fornecedor.controller.js'
import { produto_fornecedorValidator, produto_fornecedorUpdateValidator, produto_fornecedorIdValidator } from '../validators/produto_fornecedor.validator.js'

const router = Router()

router.get('/', Produto_FornecedorController.index)
router.post('/', produto_fornecedorValidator, Produto_FornecedorController.create)
router.get('/:id', produto_fornecedorIdValidator, Produto_FornecedorController.show)
router.put('/:id', produto_fornecedorUpdateValidator, Produto_FornecedorController.update)
router.delete('/:id', produto_fornecedorIdValidator, Produto_FornecedorController.delete)

export default router