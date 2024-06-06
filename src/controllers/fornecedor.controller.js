import Fornecedor from '../models/fornecedor.model.js'
import { validationResult } from 'express-validator'

export default class FornecedorController{ 
    static async index(req,res){
        const supplier = await Fornecedor.findMany()
        res.json(supplier)
    }
    static async create(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() })
        }  
        const supplier = await Fornecedor.create({
          data: req.body
        })
        res.json(supplier)
      }
    
      static async show(req, res) {
        const supplier = await Fornecedor.findUnique({
          where: {
            id: parseInt(req.params.id)
          }
        })
        if (!supplier) {
          return res.status(404).json({ message: 'Fornecedor não encontrado' })
        }
        res.json(supplier)
      }

static async update(req, res) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })}
    const supplier = await Fornecedor.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if (!supplier) {
      return res.status(404).json({ message: 'Fornecedor não encontrado' })
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
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }  
    const supplier = await Fornecedor.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if (!supplier) {
      return res.status(404).json({ message: 'Fornecedor não encontrado' })
    }
    await Fornecedor.delete({
      where: {
        id: parseInt(req.params.id)
      }
    })
    try{
        await Fornecedor.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
    } catch (error) {
        return res.status(400).json({ message: "Erro não informado"})
    }   
    
    res.status(204).json({ message: 'Fornecedor deletado com sucesso' })
  
    }

}