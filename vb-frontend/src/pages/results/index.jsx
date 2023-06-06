import React from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import "./product-create-form.css"

const Create = () => {
    return (
        <>
            <Header/>

			<div class="container products-wrapper">
        <div class="row">
          <div class="col-12">
            <h2 class="products-title">Resultados da pesquisa: <%= search %></h2>
          </div>
          <% if (products.length> 0) {
            products.forEach((product) => {
            let finalPrice = (product.price * ((100 - product.discount) / 100)).toFixed(0)
          %>
          <div class="col-12 col-sm-6 col-lg-3">
            <section class="product-box">
              <a href="/product/detail/<%= `${product.id}/` %>">
                <figure class="product-box_image">
                  <img src="/images/Produtos/<%= product.image %>" alt="imagen do produto"/>
                </figure>
               <article class="product-box_data">
                  <p>
                    {/* <%= product.name %> */}
                  </p>
                </article>
              </a>
            </section>
          </div>
        /* <% })} else { %>  */
            <div class="col-12">
              <h2 class="products-title" style="color: red;">Ei!! Infelizmente não foi possível encontrar esse produto. <br><br>
                Veja se digitou corretamente o que procura. Aqui vai alguma sugestões de pesquisa:<br><br>
              Beer; Double...</h2>
            </div>
          <% } %>
        </div>
      </div>

           <Footer/>
        </>
    )

}
export default Create