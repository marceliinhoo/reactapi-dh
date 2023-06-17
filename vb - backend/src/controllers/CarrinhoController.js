const { Op } = require("sequelize"); //Módulo de operadores sequelize
const jwt = require("jsonwebtoken");

//Models
const { ShoppingCart, OrderItem, Produto, Imagem } = require("../models");

const carrinho = {
  async mostraCarrinho(req, res) {
    //Carrinho para usuario logado
    if (res.locals.isLogged) {
      const { id: id_account} = jwt.verify(req.cookies.token, "batata");
      const userCarrinho = await ShoppingCart.findOne({
        where: { id_account },
        raw: true,
      });
      let produtosCarrinho = await OrderItem.findAll({
        where: { id_cart: userCarrinho.id_cart },
        raw: true,
      });
      console.log(produtosCarrinho)
      id_product = produtosCarrinho.map((p) => p.id_product);

      const produtos = await Produto.findAll({
        where: {
         id_product: {
            [Op.in]: id_product
          },
        },
        raw:true
      });

      //Adiciona a imagem e quantidade em cada produto
      for(let p of produtos){
        const itemAlvo = produtosCarrinho.find(prod => prod.id_product == p.id_product);
        p.quantidade = itemAlvo.quantidade; 

        const img = await Imagem.findOne({
          where: { id_product: p.id_product },
          raw: true,
        });
        p.Imagem = img

      }
    }else res.redirect(301, "/login")
  },
  async adicionaProduto(req, res) {
    const { id: id_account } = jwt.verify(req.cookies.token, "batata");
    const { id_product } = req.body;

    try {
      const userCarrinho = await Carrinho.findOne({
        where: { id_account },
        raw: true,
      });

      //Verifica se o item já está no carrinho
      const item = await Item_carrinho.findOne({
        where: {
          [Op.and]: {
            id_product,
            id_cart: userCarrinho.id_cart
          },
        },
      });
      console.log(item);
      if (!item) {
        const itemNovo = {
         id_product,
         id_cart: userCarrinho.id_cart,
          quantidade: 1,
        };

        try {
          const produtoAdd = await Item_carrinho.create(itemNovo);
          console.log(produtoAdd);
          res.send("Produto Criado com sucesso");
        } catch (error) {
        }
      }
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = carrinho;