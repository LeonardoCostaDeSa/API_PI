import { body, param } from 'express-validator'

export const createFornecedorValidator = [
    body('razaoSocial').isString().withMessage('Razao inválida'),
    body('telefone').isString().isLength({ min: 12, max: 14 }).withMessage('Telefone inválido'),
    body('descricao').isString().withMessage('Descrição inválida'),
    body('endereco').isString().withMessage('Endereço inválido'),
    body('orcamento').isString().withMessage('Orçamento inválido'),
  ];

export const updateFornecedorValidator = [
    body('razaoSocial').isString().withMessage('Razao inválida'),
    body('telefone').isString().isLength({ min: 12, max: 14 }).withMessage('Telefone inválido'),
    body('descricao').isString().withMessage('Descrição inválida'),
    body('endereco').isString().withMessage('Endereço inválido'),
    body('orcamento').isString().withMessage('Orçamento inválido'),
]
export const deleteFornecedorValidator = [
  param('id').isInt().withMessage("Id inválido"),
]