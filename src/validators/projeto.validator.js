import { body, param } from 'express-validator'

export const projetoValidator = [
    body('cliente_id').isInt().withMessage("ID do cliente é obrigatório"),
    body('data').isString().withMessage("Data inválida"),
    body('status').isString().withMessage("Status é obrigatório")
]

export const projetoUpdateValidator = [
    param('id').isInt().withMessage("ID Inválido"),
    body('cliente_id').isInt().withMessage("ID do cliente é obrigatório"),
    body('data').isString().withMessage("Data inválida"),
    body('status').isString().withMessage("Status é obrigatório")
]

export const projetoIdValidator = [
    param('id').isInt().withMessage("ID Inválido")
]