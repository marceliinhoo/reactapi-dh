import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import'./header.css'


const Header = () => {
  const [keywords, setKeywords] = useState('')

  useEffect(() => {
  }, [])

    return(
      <header className="main-header">
      <nav>
        <ul>
          <div>
            <li><Link to="/home">V I K I N G S <br/> BEERHOUSE </Link></li>
          </div>
          <div >
            <li><Link to="/aboutus">SOBRE</Link></li>
            <li><Link to="/product/nossoproduto">NOSSO PRODUTOS</Link></li>
            <li><Link to="/login/minha-conta">MINHA CONTA</Link></li> 
          </div>
          <div>
            <li><Link to="/home"><img src={`http://localhost:3000/images/Logo/Logosemfundo600x600semopacidade.png`} alt="" className="imagem-logo" width="120px" height="100px"/></Link></li>
            <div id="pesquisa">
              <form method="GET" action="/search" className="search-form">
                <img src={`http://localhost:3000/images/icon/lupa.png`} alt="Meus Pedidos" width="20"/>
                <input type="text" 
                name="keywords" 
                placeholder="Pesquisar" 
                className="search-form_input"
                 value={keywords} 
                 onChange={ e => setKeywords(e.target.value)}/>
              </form>
            </div>
          </div>
          <div>
            <li><Link to="/login">
            <center><img src={`http://localhost:3000/images/icon/avatar.png`} alt="Minha Conta" width="30"/></center>
            <p>FAÇA SEU LOGIN</p>
          </Link>
        </li>
          </div>
          <div>
            <li><Link to="/carrinho">
              <center><img src={`http://localhost:3000/images/icon/ShoppingCart.png`} alt="Meus Pedidos" width="30"/></center>
                <p>MEU CARRINHO</p>
            </Link>
          </li>
          </div>
        </ul>
      </nav>
    </header>
    )
}

export default Header