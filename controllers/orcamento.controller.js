import Orcamento from '../models/orcamento.model.js'
import { validationResult } from 'express-validator'

export default class OrcamentoController {
    static async index(req, res) {
        const orcamento = await Orcamento.findMany()
        res.json(orcamento)
    }
    static async create(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const orcamento = await Orcamento.create({
            data: req.body
        })
        res.json(orcamento)
    }

    static async show(req, res) {
        const orcamento = await Orcamento.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!orcamento) {
            return res.status(404).json({ message: 'Orçamento não encontrado' })
        }
        res.json(orcamento)
    }

    static async update(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const orcamento = await Orcamento.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!orcamento) {
            return res.status(404).json({ message: 'Orcamento não encontrado' })
        }
        const updatedOrcamento = await Orcamento.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        })
        res.json(updatedOrcamento)
    }

    static async delete(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const orcamento = await Orcamento.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!orcamento) {
            return res.status(404).json({ message: 'Orcamento não encontrado' })
        }
        await Orcamento.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        try {
            await Orcamento.delete({
                where: {
                    id: parseInt(req.params.id)
                }
            })
        } catch (error) {
            return res.status(400).json({ message: "Erro não informado" })
        }

        res.status(204).json({ message: 'Orcamento deletado com sucesso' })

    }

}