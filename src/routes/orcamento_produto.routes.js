import { Router } from 'express'
import Orcamento_ProdutoController from '../controllers/orcamento_produto.controller.js'
import { orcamento_produtoValidator, orcamento_produtoUpdateValidator, orcamento_produtoIdValidator } from '../validators/orcamento_produto.validator.js'

const router = Router()

router.get('/', Orcamento_ProdutoController.index)
router.post('/', orcamento_produtoValidator, Orcamento_ProdutoController.create)
router.get('/:id', orcamento_produtoIdValidator, Orcamento_ProdutoController.show)
router.put('/:id', orcamento_produtoUpdateValidator, Orcamento_ProdutoController.update)
router.delete('/:id', orcamento_produtoIdValidator, Orcamento_ProdutoController.delete)

export default router