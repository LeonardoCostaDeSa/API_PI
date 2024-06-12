import { body, param } from "express-validator"

export const orcamento_produtoValidator = [
    body('orcamento_id').isInt().withMessage('Id do orçamento é obrigatório'),
    body('produto_id').isInt().withMessage('Id do produto é obrigatório'),
    body('vlrUnit').isFloat().withMessage('Valor unitário é obrigatório'),
    body('quantidade').isInt().withMessage('Quantidade é obrigatório'),
    body('imagemUrl').isString().withMessage('Imagem ')
]

export const orcamento_produtoUpdateValidator = [
    param('id').isInt().withMessage('ID é obrigatório'),
    body('orcamento_id').isInt().withMessage('Id do orçamento é obrigatório'),
    body('produto_id').isInt().withMessage('Id do produto é obrigatório'),
    body('vlrUnit').isFloat().withMessage('Valor unitário é obrigatório'),
    body('quantidade').isInt().withMessage('Quantidade é obrigatório'),
    body('imagemUrl').isString().withMessage('Imagem ') 
]

export const orcamento_produtoIdValidator = [
    param('id').isInt().withMessage('ID é obrigatório ')
]