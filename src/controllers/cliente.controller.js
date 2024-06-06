import Cliente from '../models/cliente.model.js'
import { validationResult } from 'express-validator'

export default class ClienteController{
    static async index(req,res){
        const customer = await Cliente.findMany()
        res.json(customer)
    }
    static async create(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() })
        }  
        const customer = await Cliente.create({
          data: req.body
        })
        res.json(customer)
      }
    
      static async show(req, res) {
        const customer = await Cliente.findUnique({
          where: {
            id: parseInt(req.params.id)
          }
        })
        if (!customer) {
          return res.status(404).json({ message: 'Cliente não encontrado' })
        }
        res.json(customer)
      }

static async update(req, res) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })}
    const customer = await Cliente.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if (!customer) {
      return res.status(404).json({ message: 'Cliente não encontrado' })
    }
    const updatedCliente = await Cliente.update({
      where: {
        id: parseInt(req.params.id)
      },
      data: req.body
    })
    res.json(updatedCliente)
  }  
  
static async delete(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }  
    const customer = await Cliente.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if (!customer) {
      return res.status(404).json({ message: 'Cliente não encontrado' })
    }
    await Cliente.delete({
      where: {
        id: parseInt(req.params.id)
      }
    })
    try{
        await Cliente.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
    } catch (error) {
        return res.status(400).json({ message: "Erro não informado"})
    }   
    
    res.status(204).json({ message: 'Cliente deletado com sucesso' })
  
    }

}