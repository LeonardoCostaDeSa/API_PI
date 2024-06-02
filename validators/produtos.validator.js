import { body, param } from 'express-validator'

export const createProdutosValidator = [
    body('descricao').isString().withMessage('Descrição inválida'),
    body('classe').isString().withMessage('Classe inválida'),
    body('unidade').isInt().withMessage('Unidade inválida'), // verificar se é String ou algo relacionado a Number (alterei de String para Int)
    body('fornecedorId').isString().withMessage('ID de fornecedor inválido'), // verificar tipo isString
    body('fornecedor').isString().withMessage('Fornecedor inválido'),
    body('imagemUrl').isString().withMessage('Imagem inválida'), // verificar tipo isString > Imagem ou URL
    body('ncm').isString().isPostalCode('BR').withMessage('NCM inválido'), // verificar tipo isString
    body('orcamentos').isString().withMessage('Orçamento inválido'),
  ];

export const updateProdutosValidator = [
    body('descricao').isString().withMessage('Descrição inválida'),
    body('classe').isString().withMessage('Classe inválida'),
    body('unidade').isInt().withMessage('Unidade inválida'), // verificar se é String ou algo relacionado a Number (alterei de String para Int)
    body('fornecedorId').isString().withMessage('ID de fornecedor inválido'), // verificar tipo isString
    body('fornecedor').isString().withMessage('Fornecedor inválido'),
    body('imagemUrl').isString().withMessage('Imagem inválida'), // verificar tipo isString > Imagem ou URL
    body('ncm').isString().isPostalCode('BR').withMessage('NCM inválido'), // verificar tipo isString
    body('orcamentos').isString().withMessage('Orçamento inválido'),
]

export const deleteProdutosValidator = [
  param('id').isInt().withMessage("Id inválido"),
]
