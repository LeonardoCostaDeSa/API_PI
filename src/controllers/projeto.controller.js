import Projeto from '../src/models/projeto.model.js'
import { validationResult } from 'express-validator'

export default class ProjetoController{
    static async index(req, res){
    const projeto = await Projeto.findMany()
    res.json(projeto)
    }
    
    static async create (req, res){
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const projeto = await Projeto.create({
            data: req.body
        })
        res.json(projeto)
    }

    static async show (req, res){
        const projeto = await Projeto.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!projeto) {
            return res.status(404).json({ message: 'Projeto não encontrado' })
        }
        res.json(projeto)
    }

    static async update (req, res){
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }
        const projeto = await Projeto.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!projeto) {
            return res.status(404).json({ message: 'Projeto não encontrado'})
        }
        const updateProjeto = await Projeto.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        })
        res.json(updateProjeto)
    }

    static async delete (req, res){
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const projeto = await Projeto.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if(!projeto){
            return res.status(404).json({ message: 'Projeto não encontrado' })
        }
        await Projeto.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.status(204).json({ message: 'Projeto deletado com sucesso' })
    }
}