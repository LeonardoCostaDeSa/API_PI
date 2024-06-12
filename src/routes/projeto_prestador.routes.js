import { Router } from 'express'
import Projeto_PrestadorController from '../controllers/projeto_prestador.controller.js'
import { projeto_prestadoValidator, projeto_prestadoUpdateValidator, projeto_prestadoIdValidator } from '../validators/projeto_prestador.validator.js'

const router = Router()

router.get('/', Projeto_PrestadorController.index)
router.post('/', projeto_prestadoValidator, Projeto_PrestadorController.create)
router.get('/:id', projeto_prestadoIdValidator, Projeto_PrestadorController.show)
router.put('/:id', projeto_prestadoUpdateValidator, Projeto_PrestadorController.update)
router.delete('/:id', projeto_prestadoIdValidator, Projeto_PrestadorController.delete)

export default router