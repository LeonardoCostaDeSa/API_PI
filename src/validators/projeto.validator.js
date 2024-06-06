import { body, param } from 'express-validator'


export const createProjetoValidator = [
    param('id').isInt().withMessage("ID Inválido"),
    body('data').isString().withMessage("Data inválida"),
    body('concluido').isString().withMessage("Conteúdo inválido"),
]

export const updateProjetoValidator = [
    param('id').isInt().withMessage("ID Inválido"),
    body('data').isString().withMessage("Data inválida"),
    body('concluido').isString().withMessage("Conteúdo inválido"),
]

export const deleteProjetoValidator = [
    param('id').isInt().withMessage("ID Inválido"),
]