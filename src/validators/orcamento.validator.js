import { body, param } from "express-validator"

export const orcamentoValidator = [
    body('data').isString().withMessage('Data é obrigatório'),
    body('vlrProd').isFloat().withMessage('Valor dos Produtos é obrigatório'),
    body('vlrServ').isFloat().withMessage('Valor dos Serviço é obrigatório'),
    body('vlrTotal').isFloat().withMessage('Valor Total é obrigatório'),    
    body('imagemAntes').isString().withMessage('URL da imagem anterior é obrigatório'),
    body('imagemDepois').isString().withMessage('URL da imagem depois é obrigatório'),
    body('status').isString().withMessage('status obrigatório'),
    body('cliente_id').isInt().withMessage('ID do cliente é obrigatório')
]

export const orcamentoUpdateValidator = [
    param('id').isInt().withMessage('ID é obrigatório'),
    body('vlrProd').isFloat().withMessage('Valor dos Produtos é obrigatório'),
    body('vlrServ').isFloat().withMessage('Valor dos Serviço é obrigatório'),
    body('vlrTotal').isFloat().withMessage('Valor Total é obrigatório'),    
    body('imagemAntes').isString().withMessage('URL da imagem anterior é obrigatório'),
    body('imagemDepois').isString().withMessage('URL da imagem depois é obrigatório'),
    body('status').isString().withMessage('status obrigatório')
]

export const orcamentoIdValidator = [
    param('id').isInt().withMessage('ID é obrigatório ')
]