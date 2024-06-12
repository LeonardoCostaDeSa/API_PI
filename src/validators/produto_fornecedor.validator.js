import { body, param } from "express-validator"

export const produto_fornecedorValidator = [
    body('produto_id').isNumeric().withMessage('produto_id obrigatório'),
    body('fornecedor_id').isArray().withMessage('fornecedor_id obrigatório')
]

export const produto_fornecedorUpdateValidator = [
    param('id').isInt().withMessage('ID é obrigatório'),
    body('produto_id').isNumeric().withMessage('produto_id obrigatório'),
    body('fornecedor_id').isArray().withMessage('fornecedor_id obrigatório') 
]

export const produto_fornecedorIdValidator = [
    param('id').isInt().withMessage('ID é obrigatório')
]