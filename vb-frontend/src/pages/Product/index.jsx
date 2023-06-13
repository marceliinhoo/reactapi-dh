import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./product.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import api from "../../services/api"

const Product = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    const response = await api.get('product/nossoproduto')
 
    setProducts(response.data)
  }

  return (
    <>
      <Header />
      <div className="destaque"> Nossos Produtos </div>

      <div className="container products-product">
        <div className="row">
          <div className="col-12">
          </div>

          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-lg-3">
              <section className="product-box">
                <Link
                  to="/product-detail"
                  state={{ id: product.id }}
                >
                  <figure className="product-image">
                    <img src={`http://localhost:3000/images/Produtos/${product.image}`} alt="imagen do produto" />
                  </figure>
                  <article className="product-box_data">
                    <h2>
                      {(product.price * ((100) / 100)).toFixed(2)}
                    </h2>
                    <p>
                      {product.name}
                    </p>
                  </article>
                </Link>
              </section>
            </div>
          ))}

        </div>
      </div>

      <Footer />
    </>
  )
}
export default Product