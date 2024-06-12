//
import PrestadorServico from '../models/prestadorServico.model.js'
import Projeto from '../models/projeto.model.js'
import { validationResult } from 'express-validator'

export default class PrestadorServicoController {
    static async index(req, res){
        const prestadorServico = await PrestadorServico.findMany()
        res.json(prestadorServico)        
    }

    static async create(req, res) {
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }

        const prestadorServico = await PrestadorServico.create({
            data: req.body
        })
        res.json(prestadorServico)
    }     

    static async show(req, res) {
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }

        const prestadorServico = await PrestadorServico.findUnique({
            where: {
              id: parseInt(req.params.id)  
            },
            include: {
               projeto_prestador: {
                    select: {
                       projeto_id: true
                    }
               }
            }
             
        })
        if (!prestadorServico) {
            return res.status(404).json({message: 'PrestadorServico não encontrado'})
        }

        const projetoIds = prestadorServico.projeto_prestador.map(f => f.projeto_id)

        const projetos = await Projeto.findMany({
            where: {
                id: {
                    in: projetoIds
                }
            },
            select: {
                id: true 
            }
        })

        const resposta = {
            ...prestadorServico,
            projeto_prestador: projetoIds,
            projetos: projetos.map(f => f.id)
        }

        res.json(resposta)
    }

    static async update(req, res) {
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }
        
        const prestadorServico = await PrestadorServico.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!prestadorServico) {
            return res.status(404).json({ message: 'Prestador de Serviço não encontrado' })
        }
        const updatedPrestadorServico = await PrestadorServico.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        })
        res.json(updatedPrestadorServico)
    }

    static async delete(req, res) {
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }

        const prestadorServico = await PrestadorServico.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!prestadorServico) {
            return res.status(404).json({ message: 'Prestador de Serviço não encontrado'})
        }
        await PrestadorServico.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.json({ message: 'Prestador de Serviço deletado com sucesso' })
    }
}