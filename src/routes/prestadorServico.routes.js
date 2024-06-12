//
import { Router } from 'express'
import PrestadorServicoController from '../controllers/prestadorServico.controller.js'
import { prestadorServicoValidator, prestadorServicoUpdateValidator, prestadorServicoIdValidator } from '../validators/prestadorServico.validator.js'

const router = Router()

router.get('/', PrestadorServicoController.index)
router.post('/', prestadorServicoValidator, PrestadorServicoController.create)
router.get('/:id', prestadorServicoIdValidator, PrestadorServicoController.show)
router.put('/:id', prestadorServicoUpdateValidator, PrestadorServicoController.update)
router.delete('/:id', prestadorServicoIdValidator, PrestadorServicoController.delete)

export default router