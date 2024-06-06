import { Router } from 'express'
import projetoRouter from '../projeto.routes.js'

const router = Router()

router.use('/projeto', projetoRouter)

export default router