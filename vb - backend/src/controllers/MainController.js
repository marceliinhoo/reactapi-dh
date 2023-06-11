const { Op } = require('sequelize')
const { Product } = require('../models')
const { Year } = require('../models')

const MainController = {
  age: async (req, res) => {
    try {
      const year = await Year.findOne({
        where: {
          age: req.body.age
        }
      })
    
    if (year === req.body.age === 'Sim') { 
           
        res.status(200).json()

    } else res.status(400).json({ errors: "Você não pode acessar o site" })
  } catch (error){
    res.status(400).json({ error })
  }
  }

}

module.exports = MainController