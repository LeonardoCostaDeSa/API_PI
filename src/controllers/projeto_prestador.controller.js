import Projeto_Prestador from '../models/projeto_prestador.model.js'
import { validationResult } from 'express-validator'

export default class Projeto_PrestadorController {
    static async index(req, res){
        const projeto_prestador = await Projeto_Prestador.findMany()
        res.json(projeto_prestador)        
    }

    static async create(req, res) {
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }

        const projeto_prestador = await Projeto_Prestador.create({
            data: req.body
        })
        res.json(projeto_prestador)
    }     

    static async show(req, res) {
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }

        const projeto_prestador = await Projeto_Prestador.findUnique({
            where: {
              id: parseInt(req.params.id)  
            },             
        })
        if (!projeto_prestador) {
            return res.status(404).json({message: 'Projeto_Prestador não encontrado'})
        }
        res.json(projeto_prestador)
    }

    static async update(req, res) {
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }
        
        const projeto_prestador = await Projeto_Prestador.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!projeto_prestador) {
            return res.status(404).json({ message: 'Projeto_Prestador não encontrado' })
        }
        const updatedProjeto_Prestador = await Projeto_Prestador.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        })
        res.json(updatedProjeto_Prestador)
    }

    static async delete(req, res) {
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }

        const projeto_prestador = await Projeto_Prestador.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!projeto_prestador) {
            return res.status(404).json({ message: 'Projeto_Prestador não encontrado'})
        }
        await Projeto_Prestador.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.json({ message: 'Projeto_Prestador deletado com sucesso' })
    }
}