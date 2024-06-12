import Cliente from '../models/cliente.model.js'
import { validationResult } from 'express-validator'

export default class ClienteController{
    static async index(req,res){
        const cliente = await Cliente.findMany()
        res.json(cliente)
    }
    static async create(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() })
        }  
        const cliente = await Cliente.create({
          data: req.body
        })
        res.json(cliente)
      }
    
      static async show(req, res) {
        const cliente = await Cliente.findUnique({
          where: {
            id: parseInt(req.params.id)
          }
        })
        if (!cliente) {
          return res.status(404).json({ message: 'Cliente não encontrado' })
        }
        res.json(cliente)
      }

static async update(req, res) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })}
    const cliente = await Cliente.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if (!cliente) {
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
    const cliente = await Cliente.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado' })
    }
    await Cliente.delete({
      where: {
        id: parseInt(req.params.id)
      }
    })  
    
    res.json({ message: 'Cliente deletado com sucesso' })
  
    }

}