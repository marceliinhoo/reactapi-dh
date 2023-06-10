import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import "./product.css"
import api from "../../services/api"

const Product = () => {
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
        <div class="destaque"> Nossos Produtos </div>

<section classe="seach-product">
    <div class="products-disp">
        <label>Filtrar por:</label>
        <select name="Filtro">
        <option value="Stout">Stout</option>
        <option value="Pilsen">Pilsen</option>
        <option value="Lager">Lager</option>
        <option value="Pale">Pale</option>
</select>
  </div>
    <div class="ordenacao">
    <label>Ordenar por:</label>
    <select name="Ordenar">
    <option value="Popular">Mais Popular</option>
    <option value="Recente">Mais Recente</option>
    <option value="Oferta">Oferta</option>
    <option value="Maior">Maior Preço</option>
    <option value="Menor">Menor Preço</option>
  </select>
  </div>
</section>

<div class="container products-wrapper">
    <div class="row">
      <div class="col-12">
      </div>
      <% products.forEach((products) => {let finalPrice = (products.price) %>
        <div class="col-12 col-sm-6 col-lg-3">
          <section class="product-box">
            <a href="/product/detail/<%= products.id %>">
              <figure class="product-box_image">
                <img src="/images/Produtos/<%= products.image %>" alt="imagen do produto">
              </figure>
              <article class="product-box_data">
                <h2>
                  R$ <%= toThousand(finalPrice) %>
                </h2>
                <p>
                  <%= products.name %>
                </p>
              </article>
            </a>
          </section>
        </div>
      <% }) %>
    </div>
  </div>
  
  <Footer/>
  </>

  export default Product 