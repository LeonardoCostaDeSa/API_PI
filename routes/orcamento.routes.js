import { Router } from 'express'
import OrcamentoController from '../controllers/orcamento.controller.js'
import {
    createOrcamentoValidator, updateOrcamentoValidator, deleteOrcamentoValidator
} from '../validators/orcamento.validator.js'

const router = Router()

router.get('/', OrcamentoController.index)
router.post('/', createOrcamentoValidator, OrcamentoController.create)
router.get('/:id', OrcamentoController.show)
router.put('/:id', updateOrcamentoValidator, OrcamentoController.update)
router.delete('/:id', deleteOrcamentoValidator, OrcamentoController.delete)

export default router