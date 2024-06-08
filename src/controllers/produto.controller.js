import Produto from '../models/produto.model.js'
import Produto_Fornecedor from '../models/produto_fornecedor.model.js'
import { validationResult } from 'express-validator'

export default class ProdutoController{
    static async index(req,res){
        const product = await Produto.findMany()
        res.json(product)
    }
    static async create(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() })
        }  
        const product = await Produto.create({
          data: req.body
        })

        const lista_Fornecedores = req.body.fornecedores
        
        lista_Fornecedores.forEach(fornecedor => {
          const productFornecedor = Produto_Fornecedor.create({
            data: {
              fornecedor_id: fornecedor,
              produto_id: product.id
            }
          })
        })

        res.json(product)
      }
    
      static async show(req, res) {
        const product = await Produto.findUnique({
          where: {
            id: parseInt(req.params.id)
          }
        })
        if (!product) {
          return res.status(404).json({ message: 'Cliente não encontrado' })
        }
        res.json(product)
      }

static async update(req, res) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })}
    const product = await Produto.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if (!product) {
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
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }  
    const product = await Produto.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' })
    }
    await Produto.delete({
      where: {
        id: parseInt(req.params.id)
      }
    })
    try{
        await Produto.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
    } catch (error) {
        return res.status(400).json({ message: "Erro não informado"})
    }   
    
    res.status(204).json({ message: 'Produto deletado com sucesso' })
  
    }

}
