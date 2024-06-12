import { body, param } from "express-validator"

export const projeto_prestadoValidator = [
    body('projeto_id').isString().withMessage('ID do projeto é obrigatório'),
    body('prestador_id').isString().withMessage('ID do Prestador de Serviço é obrigatório')
]

export const projeto_prestadoUpdateValidator = [
    param('id').isInt().withMessage('ID é obrigatório'),
    body('projeto_id').isString().withMessage('ID do projeto é obrigatório'),
    body('prestador_id').isString().withMessage('ID do Prestador de Serviço é obrigatório')
]

export const projeto_prestadoIdValidator = [
    param('id').isInt().withMessage('ID é obrigatório ')
]
