import { validationResult } from 'express-validator'
import Fornecedor from '../models/fornecedor.model.js'
import Produto from '../models/produto.model.js'

export default class FornecedorController {
    static async index(req, res){
        const fornecedor = await Fornecedor.findMany()
        res.json(fornecedor)
    }

    static async create(req, res){
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }

        const fornecedor = await Fornecedor.create({
            data: req.body
        })
        
        res.json(fornecedor)
    }

    static async show(req, res){
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }

        const fornecedor = await Fornecedor.findUnique({
            where: {
                id: parseInt(req.params.id)
            },
            include: {
                produto_fornecedor: {
                    select: {
                        produto_id: true
                    }
                }
            }
        })
        if (!fornecedor) {
            return res.status(404).json({ message: 'Fornecedor não encontrado'})
        }

        const produtoIds = fornecedor.produto_fornecedor.map(p => p.produto_id)

        const produtos = await Produto.findMany({
            where: {
                id: {
                    in: produtoIds
                }
            },
            select: {
                nome: true
            }
        })

        const resposta = {
            ...fornecedor,
            produto_fornecedor: produtoIds,
            produtos: produtos.map(p => p.nome)
        }
        res.json(resposta)
    }

    static async update(req, res) {
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }

        const fornecedor = await Fornecedor.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!fornecedor) {
            return res.status(404).json({ message: 'Fornecedor não encontrado'})
        }
        const updatedFornecedor = await Fornecedor.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        })
        res.json(updatedFornecedor)
    }

    static async delete(req, res) {
        const erros = validationResult(req)
        if(!erros.isEmpty){
            return res.status(400).json({ erros: erros.array() })
        }
        
        const fornecedor = await Fornecedor.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!fornecedor) {
            return res.status(404).json({ message: 'Fornecedor não encontrado'})
        }
        await Fornecedor.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.json({ message: 'Fornecedor deletado com sucesso'})
    }
}