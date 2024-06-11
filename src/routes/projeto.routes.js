import { Router } from 'express'
import ProjetoController from '../controllers/projeto.controller.js'
import { projetoValidator, projetoUpdateValidator, projetoIdValidator } from '../validators/projeto.validator.js'

const router = Router()

router.get('/', ProjetoController.index)
router.post('/', projetoValidator, ProjetoController.create)
router.get('/:id', projetoIdValidator, ProjetoController.show)
router.put('/:id', projetoUpdateValidator, ProjetoController.update)
router.delete('/:id', projetoIdValidator, ProjetoController.delete)

export default router