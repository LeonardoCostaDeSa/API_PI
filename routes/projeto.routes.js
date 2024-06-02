import { Router } from "express"
import ProjetoController from "../controllers/projeto.controller.js"
import { createProjetoValidator, updateProjetoValidator, deleteProjetoValidator } from "../validators/projeto.validator.js"

const projeto = Router()

router.get('/', ProjetoController.index)
router.post('/', createProjetoValidator, ProjetoController.create)
router.get('/:id', ProjetoController.show)
router.put('/:id', updateProjetoValidator, ProjetoController.update)
router.delete('/:id', deleteProjetoValidator, ProjetoController.delete)

export default router