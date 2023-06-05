import React, { useState} from "react"
import'./header.css'


const Header = () =>{

    const [keywords, setKeywords] = useState()



    return(
      <header className="main-header">
      <nav>
        <ul>
          <div>
            <li><a href="/home">V I K I N G S <br/> BEERHOUSE </a></li>
          </div>
          <div >
            <li><a href="/aboutus">SOBRE</a></li>
            <li><a href="/product/nossoproduto">NOSSO PRODUTOS</a></li>
            <li><a href="/login/minha-conta">MINHA CONTA</a></li> 
          </div>
          <div>
            <li><a href="#"><img src="/images/Logo/Logo sem fundo 600x600 sem opacidade.png" alt="" className="imagem-logo" width="120px" height="100px"/></a></li>
            <div id="pesquisa">
              <form method="GET" action="/search" className="search-form">
                <img src="/images/icon/lupa.png" alt="Meus Pedidos" width="20"/>
                <input type="text" name="keywords" placeholder="Pesquisar" className="search-form_input" value={keywords} onChange={ e => setKeywords(e.target.value)}/>
              </form>
            </div>
          </div>
          <div>
            <li><a href="/login">
            <center><img src="/images/icon/avatar.png" alt="Minha Conta" width="30"/></center>
            <p>FAÇA SEU LOGIN</p>
          </a>
        </li>
          </div>
          <div>
            <li><a href="/carrinho">
              <center><img src="/images/icon/Shopping Cart.png" alt="Meus Pedidos" width="30"/></center>
                <p>MEU CARRINHO</p>
            </a>
          </li>
          </div>
        </ul>
      </nav>
    </header>
    )
}

export default Header