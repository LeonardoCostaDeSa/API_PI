import { body, param } from 'express-validator'

export const createProdutosValidator = [
    body('descricao').isString().withMessage('Descrição inválida'),
    body('classe').isString().withMessage('Classe inválida'),
    body('unidade').isInt().withMessage('Unidade inválida'),
    body('fornecedorId').isInt().withMessage('ID de fornecedor inválido'),
    body('fornecedor').isString().withMessage('Fornecedor inválido'),
    body('imagemUrl').isString().withMessage('Imagem inválida'),
    body('ncm').isString().withMessage('BR').withMessage('NCM inválido'),
    body('orcamentos').isString().withMessage('Orçamento inválido'),
  ];

export const updateProdutosValidator = [
    body('descricao').isString().withMessage('Descrição inválida'),
    body('classe').isString().withMessage('Classe inválida'),
    body('unidade').isInt().withMessage('Unidade inválida'),
    body('fornecedorId').isInt().withMessage('ID de fornecedor inválido'),
    body('fornecedor').isString().withMessage('Fornecedor inválido'),
    body('imagemUrl').isString().withMessage('Imagem inválida'),
    body('ncm').isString().withMessage('BR').withMessage('NCM inválido'),
    body('orcamentos').isString().withMessage('Orçamento inválido'),
]

export const deleteProdutosValidator = [
  param('id').isInt().withMessage("Id inválido"),
]
