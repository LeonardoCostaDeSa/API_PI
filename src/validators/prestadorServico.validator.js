import { body, param } from "express-validator"

export const prestadorServicoValidator = [
    body('nome').isString().withMessage('Nome é obrigatório'),
    body('tipo').isString().withMessage('Tipo de serviço é obrigatório'),
    body('telefone').isString().withMessage('Telefone é obrigatório')
]

export const prestadorServicoUpdateValidator = [
    param('id').isInt().withMessage('ID é obrigatório'),
    body('nome').isString().withMessage('Nome é obrigatório'),
    body('tipo').isString().withMessage('Tipo de serviço é obrigatório'),
    body('telefone').isString().withMessage('Telefone é obrigatório')
]

export const prestadorServicoIdValidator = [
    param('id').isInt().withMessage('ID é obrigatório ')
]
//