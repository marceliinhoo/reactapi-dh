const { Op } = require('sequelize')
const { Product } = require('../models')

const MainController = {
  age: (req, res) => {
    if (req.body.age === 'Sim') {
      res.status(201).json({ msg: '' })
    } else res.status(400).json({ error: "Você não pode acessar o site" })
  },
}

module.exports = MainController