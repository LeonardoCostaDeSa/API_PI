import Produto_Fornecedor from '../models/produto_fornecedor.model.js'
import { validationResult } from 'express-validator'

export default class Produto_FornecedorController {
    static async index(req, res){
        const produto_fornecedor = await Produto_Fornecedor.findMany()
        res.json(produto_fornecedor)
    }

    static async create(req,res){
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }

        const produto_fornecedor = await Produto_Fornecedor.create({
            data: req.body
        })
        
        res.json(produto_fornecedor)
    }

    static async show(req, res) {
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }

        const produto_fornecedor = await Produto_Fornecedor.findUnique({
            where: {
              id: parseInt(req.params.id)  
            }            
        })
        if (!produto_fornecedor) {
            return res.status(404).json({message: 'Produto_Fornecedor não encontrado'})
        }

        res.json(produto_fornecedor)
    }

    static async update(req, res) {
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }
        
        const produto_fornecedor = await Produto_Fornecedor.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!produto_fornecedor) {
            return res.status(404).json({ message: 'Produto_Fornecedor não encontrado' })
        }
        const updatedProduto_Fornecedor = await Produto_Fornecedor.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        })
        res.json(updatedProduto_Fornecedor)
    }

    static async delete(req, res) {
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }

        const produto_fornecedor = await Produto_Fornecedor.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!produto_fornecedor) {
            return res.status(404).json({ message: 'Produto_Fornecedor não encontrado'})
        }
        await Produto_Fornecedor.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.json({ message: 'Produto_Fornecedor deletado com sucesso' })
    }
}