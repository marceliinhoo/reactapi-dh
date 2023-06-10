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
            <li><a href="#"><img src={`http://localhost:3000/images/Logo/Logosemfundo600x600semopacidade.png`} alt="" className="imagem-logo" width="120px" height="100px"/></a></li>
            <div id="pesquisa">
              <form method="GET" action="/search" className="search-form">
                <img src={`http://localhost:3000/images/icon/lupa.png`} alt="Meus Pedidos" width="20"/>
                <input type="text" name="keywords" placeholder="Pesquisar" className="search-form_input" value={keywords} onChange={ e => setKeywords(e.target.value)}/>
              </form>
            </div>
          </div>
          <div>
            <li><a href="/login">
            <center><img src={`http://localhost:3000/images/icon/avatar.png`} alt="Minha Conta" width="30"/></center>
            <p>FAÇA SEU LOGIN</p>
          </a>
        </li>
          </div>
          <div>
            <li><a href="/carrinho">
              <center><img src={`http://localhost:3000/images/icon/ShoppingCart.png`} alt="Meus Pedidos" width="30"/></center>
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