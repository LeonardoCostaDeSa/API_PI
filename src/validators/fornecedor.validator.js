import { body, param } from "express-validator"

export const fornecedorValidator = [
    body('razaoSocial').isString().withMessage('Razão Social é obrigatório'),
    body('telefone').isString().withMessage('Telefone é obrigatório'),
    body('descricao').isString().withMessage('Descrição é obrigatória'),
    body('endereco').isString().withMessage('Endereço é obrigatório')
]

export const fornecedorUpdateValidator = [
    param('id').isInt().withMessage('ID é obrigatório'),
    body('razaoSocial').isString().withMessage('Razão Social é obrigatório'),
    body('telefone').isString().withMessage('Telefone é obrigatório'),
    body('descricao').isString().withMessage('Descrição é obrigatória'),
    body('endereco').isString().withMessage('Endereço é obrigatório')
]

export const fornecedorIdValidator = [
    param('id').isInt().withMessage('ID é obrigatório')
]