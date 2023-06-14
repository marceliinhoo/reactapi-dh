import React, { useState, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'
import "./detail.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import api from "../../services/api"

const Detail = () => {
  const location = useLocation()

  const [product, setProduct] = useState()

  useEffect(() => {
    loadProduct()
  }, [])

  const loadProduct = async () => {
    const response = await api.get(`/product/detail/${location.state.id}`)
    setProduct(response.data)
  }

  const handleDelete = async () => {
    const productDelete = await api.del(`/product/${location.state.id}`)
    setProduct(productDelete.data)

    console.log('DELETAR REGISTRO')
  }

  return (
    <>
      <Header />

      {product ? (
              <div className="container products-detail">
              <div className="row">

              <div className="grup">
                <div className="row">
                  <div className="col-2 col-lg-8">
                    <img src={`http://localhost:3000/images/Produtos/${product.image}`} alt="product image" class="product-detail-img"/>
                  </div>
                  <div className="col-12 col-lg-4">
                    <article className="product-detail-info">
                      <h2 className="product-title">
                      {product.name}
                      </h2>
                      <h3>
                      {product.typeBeer.name}
                      </h3>
                        <p className="product-price">
                          <span> {`R$ ${product.price}`}</span>
                        </p>
                      <p className="Information">Informações sobre o produto:</p>
                      <p className="product-description">
                      {product.description}
                      </p>
                      <ul className="actions-list">
                        <div clclassNameass="col-md-5" id="quantidade">
                      <input type="button" id="minus" value="-" />
                      <input id="quant" name="quant" className="text" size="1" value="1" type="text" maxlength="2" />
                      <input type="button" id="plus" value="+" />
                        </div>
                        <Link to="/carrinho" type="button" className="btn bb"><p>Comprar</p></Link>
                          <button type="submit"
                           className="action-button delete"
                            onClick={handleDelete}
                           >
                            Excluir Produto</button>
                            <Link
                            className="action-button edit"
                            to="/product-update"
                            state={{ id: product.id }}
                            >
                             Editar Produto
                            </Link>
                      </ul>
                    </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>

      ) : null}

      <Footer />
    </>
  )
}
export default Detail