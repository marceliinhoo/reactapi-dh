import React from "react"
import'./footer.css'
import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <footer>
            <div className="caixafooter">
                <div className="footer-img">
                    <img src={`http://localhost:3000/images/Logo/Logosemfundo600x600semopacidade.png`} width="150" alt=""/>
                </div>

                <div className='footer-pagto'>
                    <img src={`http://localhost:3000/images/icon/formasdepagamento.png`} width="300" alt=""/>
                </div>
                <div className="footer-dados">
                    <ul>
                        <li><Link to="/aboutus">Sobre a Vikings Beerhouse</Link></li>
                        <li><Link to="/contact">Contatos</Link></li>
                        <li><Link to="/blog">Blog do Cervejeiro</Link></li>
                        <li><Link to="/terms">Termos de Uso</Link></li>
                        <li><Link to="/privacy">Política de Privacidade</Link></li>
                        <li><Link to="/product-create">Adicionar Produto</Link></li>
                    </ul>
                </div>

            </div>

            <center>
                <p>Copyright © {new Date().getFullYear()} Vikings Beerhouse </p>
            </center>
        </footer>

    )
}

export default Footer