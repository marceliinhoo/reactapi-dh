import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import "./product-create-form.css"
import api from "../../services/api"

const Results = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    const response = await api.get('product')
    setProducts(response.data)
  }

  return (
    <>
    
      <Header />

      {product ? (

			<div class="container products-wrapper">
        <div class="row">
          <div class="col-12">
            <h2 class="products-title">
            {`Resultados da pesquisa: ${search}`}
            </h2>
            </div>
            {products.map((product) =>  if {product.length> 0} {
          <div key={product.id}  class="col-12 col-sm-6 col-lg-3">
            <section class="product-box">
              <a href="/product/detail/<%= `${product.id}/` %>">
                <figure class="product-box_image">
                <img src={`http://localhost:3000/images/products/${product.image}`} alt="imagen do produto"/>
                </figure>
               <article class="product-box_data">
                  <p>
                  {product.name}
                  </p>
                </article>
              </a>
            </section>
          </div>
        } else {  
             <div class="col-12">
              <h2 class="products-title" style="color: red;">Ei!! Infelizmente não foi possível encontrar esse produto. <br><br>
                Veja se digitou corretamente o que procura. Aqui vai alguma sugestões de pesquisa:<br><br>
              Beer; Double...</h2>
            </div>
          } 

        </div>

      </div>

      ) : null}

           <Footer/>
        </>
    )

}
export default Results 