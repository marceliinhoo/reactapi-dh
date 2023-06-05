const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const moment = require('moment');

const mainController = require('../controllers/MainController')
const productController = require('../controllers/ProductController')
const loginController = require('../controllers/LoginController')
const CarrinhoController = require('../controllers/CarrinhoController')
const formularioController = require ('../controllers/FormularioController')

//Multer
const upload = require('../middlewares/upload')
//log
const  log = require('../middlewares/log')
//auth
const auth = require('../middlewares/auth')

//MainController

router.post('/verificar-idade', mainController.age)

//LoginController
router.post('/login', loginController.loginEJS)

//FormularioController
router.post(
  '/formulario',
  body('dt_nasc')
  .notEmpty()
  .withMessage('Necessário preencher a data de nascimento')
  .custom((value) => {
    const idade = moment().diff(moment(value, 'YYYY-MM-DD'), 'years');
    if (idade >= 18) {
      return true;
    } else {
      throw new Error('Você é menor de idade');
    }
  }),
  body('name')
    .notEmpty()
    .withMessage('Nome Completo deve ser informado!'),
  body('email')
    .notEmpty()
    .withMessage('Campo E-mail deve ser preenchido'),
    formularioController.createEJS
)

// # Product
router.get('/product/nossoproduto', productController.productView)
router.get('/product/detail/:id', productController.detailEJS)
router.post(
  '/product',
  auth,
  upload.any(),
  body('name')
    .notEmpty()
    .withMessage('Nome do Produto deve ser informado!'),
  body('description')
    .notEmpty()
    .withMessage('Descrição deve ser informada!'), productController.createEJS)
router.put('/product/:id', auth, upload.any(), productController.updateEJS)
router.delete('/product/:id', auth,productController.deleteEJS)


module.exports = router
