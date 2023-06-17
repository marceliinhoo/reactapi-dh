import React, { useState } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import "./cart.css"
import api from "../../services/api"
import { getCookie } from "../../Utils"
import { useNavigate } from "react-router-dom"

const Cart = () => {

    return (
      <>
            <Header/>
          
      <div className="container-carrinho">
      <div className="produtos-carrinho">
        <div className="header-produtos">
          <ul className="header-detalhes">
            <li className="produto-header">Produto</li>
            <li className="quantidade-header">Qntd</li>
            <li className="preco-header">Preço</li>
            <li></li>
          </ul>
        </div>
        <div className="produtos">
          <div className="card-produto-carrinho" >
            <div className="container-img-desc">
              <a className="img-prod" href="/produto/<%=produto.id_produto%>">
                <img src="<%= produto.Imagem.caminho %>" alt="" />
              </a>
              <div className="descricao-produto">
                <a href="/produto/<%=produto.id_produto%>" class="descricao-produto">
                
                </a>
              </div>
            </div>
            <div className="quantidade-prod">
              <span className="menos">-</span>
              <span className="num"></span>
              <span className="mais">+</span>
            </div>
            <div className="preco-prod">
              <span>

              </span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="remover-prod"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>

        </div>
      </div>

  <button class="btn-limpar-carrinho">Limpar Carrinho</button>

      <div className="detalhes-compra">
        <div className="info-compra">
          <h1>Resumo</h1>

          <div className="total-container">
            <div className="sub-total">
              <span>Sub-total</span>
              <span id="valor-subtotal">R$ 0,00</span>
            </div>

            <div className="frete">
              <span>Frete</span>
              <span id="opcao-frete"> -</span>
            </div>
            <form action="" className="form-cupom">
              <input
                className="cupom-texto"
                id=""
                type="text"
                name="cupom"
                placeholder="Cupom Desconto"
              />
              <button type="submit" className="cupom-button">APLICAR</button>
            </form>

            <div className="total">
              <span>Total</span>
              <span id="valor-total">R$ 0,00</span>
            </div>
          </div>
        </div>

        <button className="btn-finalizar-compra">FINALIZAR COMPRA</button>
      </div>
</div>
           <Footer/>
        </>
)
}

export default Cart