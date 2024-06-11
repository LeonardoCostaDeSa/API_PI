import { body, param } from "express-validator"

export const produtoValidator = [
    body('nome').isString().withMessage('Nome é obrigatório'),
    body('descricao').isString().withMessage('Descricação é obrigatório'),
    body('classe').isString().withMessage('Classe é obrigatório'),
    body('unidade').isString().withMessage('Unidade é obrigatório'),
    body('imagemUrl').isString().withMessage('Caminho da imagem é obrigatório'),
    body('ncm').isString().withMessage('ncm é obrigatório')
]

export const produtoUpdateValidator = [
    param('id').isInt().withMessage('ID é obrigatório'),
    body('nome').isString().withMessage('Nome é obrigatório'),
    body('descricao').isString().withMessage('Descricação é obrigatório'),
    body('classe').isString().withMessage('Classe é obrigatório'),
    body('unidade').isString().withMessage('Unidade é obrigatório'),
    body('imagemUrl').isString().withMessage('Caminho da imagem é obrigatório'),
    body('ncm').isString().withMessage('ncm é obrigatório') 
]

export const produtoIdValidator = [
    param('id').isInt().withMessage('ID é obrigatório ')
]