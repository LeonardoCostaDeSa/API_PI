import { body, param } from 'express-validator'

//É necessário validar os campos de 'id' também?
export const createProjetoValidator = [
    //Atributo data entrou como DateTime. Mantém ou trocamos para String?
    param('id').isInt().withMessage("ID Inválido"),
    body('data').isDate().withMessage("Data inválida"),
    body('concluido').isString().withMessage("Conteúdo inválido"),
]

export const updateProjetoValidator = [
    param('id').isInt().withMessage("ID Inválido"),
    body('data').isDate().withMessage("Data inválida"),
    body('concluido').isString().withMessage("Conteúdo inválido"),
]

export const deleteProjetoValidator = [
    param('id').isInt().withMessage("ID Inválido"),
]