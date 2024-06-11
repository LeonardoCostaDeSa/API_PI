import Produto from '../models/produto.model.js'
import Fornecedor from '../models/fornecedor.model.js'
import { validationResult } from 'express-validator'

export default class ProdutoController {
    static async index(req, res){
        const produto = await Produto.findMany()
        res.json(produto)        
    }

    static async create(req, res) {
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }

        const produto = await Produto.create({
            data: req.body
        })
        res.json(produto)
    }     

    static async show(req, res) {
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }

        const produto = await Produto.findUnique({
            where: {
              id: parseInt(req.params.id)  
            },
            include: {
               produto_fornecedor: {
                    select: {
                        fornecedor_id: true
                    }
               }
            }
             
        })
        if (!produto) {
            return res.status(404).json({message: 'Produto não encontrado'})
        }

        const fornecedorIds = produto.produto_fornecedor.map(f => f.fornecedor_id)

        const fornecedores = await Fornecedor.findMany({
            where: {
                id: {
                    in: fornecedorIds
                }
            },
            select: {
                razaoSocial: true 
            }
        })

        const resposta = {
            ...produto,
            produto_fornecedor: fornecedorIds,
            fornecedores: fornecedores.map(f => f.razaoSocial)
        }

        res.json(resposta)
    }

    static async update(req, res) {
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }
        
        const produto = await Produto.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' })
        }
        const updatedProduto = await Produto.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        })
        res.json(updatedProduto)
    }

    static async delete(req, res) {
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }

        const produto = await Produto.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado'})
        }
        await Produto.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.json({ message: 'Produto deletado com sucesso' })
    }
}