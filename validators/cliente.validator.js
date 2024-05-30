import { body, param } from 'express-validator'

export const createClienteValidator = [
    body('nome').isString().withMessage('Nome inválido'),
    body('cnpjCpf').isString().withMessage('CNPJ/CPF inválido'),
    body('tipo').isString().withMessage('Tipo inválido'),
    body('rua').isString().withMessage('Rua inválida'),
    body('numero').isInt().withMessage('Número inválido'),
    body('bairro').isString().withMessage('Bairro inválido'),
    body('cep').isString().isPostalCode('BR').withMessage('CEP inválido'),
    body('cidade').isString().withMessage('Cidade inválida'),
    body('estado').isString().isLength({ min: 2, max: 2 }).withMessage('Estado inválido'),
    body('telefone').isString().isMobilePhone('pt-BR').withMessage('Telefone inválido')
  ];

export const updateClienteValidator = [
    body('nome').isString().withMessage('Nome inválido'),
    body('cnpjCpf').isString().withMessage('CNPJ/CPF inválido'),
    body('tipo').isString().withMessage('Tipo inválido'),
    body('rua').isString().withMessage('Rua inválida'),
    body('numero').isInt().withMessage('Número inválido'),
    body('bairro').isString().withMessage('Bairro inválido'),
    body('cep').isString().isPostalCode('BR').withMessage('CEP inválido'),
    body('cidade').isString().withMessage('Cidade inválida'),
    body('estado').isString().isLength({ min: 2, max: 2 }).withMessage('Estado inválido'),
    body('telefone').isString().isMobilePhone('pt-BR').withMessage('Telefone inválido') 
]

export const deleteClienteValidator = [
  param('id').isInt().withMessage("Id inválido"),
]