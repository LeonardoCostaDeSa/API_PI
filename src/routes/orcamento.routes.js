import { Router } from 'express'
import OrcamentoController from '../controllers/orcamento.controller.js'
import { orcamentoValidator, orcamentoUpdateValidator, orcamentoIdValidator } from '../validators/orcamento.validator.js'

const router = Router()

router.get('/', OrcamentoController.index)
router.post('/', orcamentoValidator, OrcamentoController.create)
router.get('/:id', orcamentoIdValidator, OrcamentoController.show)
router.put('/:id', orcamentoUpdateValidator, OrcamentoController.update)
router.delete('/:id', orcamentoIdValidator, OrcamentoController.delete)

export default router