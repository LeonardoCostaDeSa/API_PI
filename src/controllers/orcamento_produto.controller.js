import Orcamento_Produto from '../models/orcamento_produto.model.js'
import { validationResult } from 'express-validator'

export default class Orcamento_ProdutoController {
    static async index(req, res){
        const orcamento_produto = await Orcamento_Produto.findMany()
        res.json(orcamento_produto)
    }

    static async create(req,res){
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }

        const orcamento_produto = await Orcamento_Produto.create({
            data: req.body
        })
        
        res.json(orcamento_produto)
    }

    static async show(req, res) {
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }

        const orcamento_produto = await Orcamento_Produto.findUnique({
            where: {
              id: parseInt(req.params.id)  
            }            
        })
        if (!orcamento_produto) {
            return res.status(404).json({message: 'Orcamento_Produto não encontrado'})
        }

        res.json(orcamento_produto)
    }

    static async update(req, res) {
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }
        
        const orcamento_produto = await Orcamento_Produto.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!orcamento_produto) {
            return res.status(404).json({ message: 'Orcamento_Produto não encontrado' })
        }
        const updatedOrcamento_Produto = await Orcamento_Produto.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        })
        res.json(updatedOrcamento_Produto)
    }

    static async delete(req, res) {
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }

        const orcamento_produto = await Orcamento_Produto.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!orcamento_produto) {
            return res.status(404).json({ message: 'Orcamento_Produto não encontrado'})
        }
        await Orcamento_Produto.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.json({ message: 'Orcamento_Produto deletado com sucesso' })
    }
}