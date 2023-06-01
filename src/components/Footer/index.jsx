import React from "react"
import'./footer.css'


const Footer = () => {
    return (
        <footer>
            <div className="caixafooter">
                <div className="footer-img">
                    <img src="/images/Logo/Logo sem fundo 600x600 sem opacidade.png" width="150" alt=""/>
                </div>

                <div className='footer-pagto'>
                    <img src="/images/icon/formas.de.pagamento.png" width="300" alt=""/>
                </div>
                <div className="footer-dados">
                    <ul>
                        <li><a href="/aboutus">Sobre a Vikings Beerhouse</a></li>
                        <li><a href="/contact">Contatos</a></li>
                        <li><a href="/blog">Blog do Cervejeiro</a></li>
                        <li><a href="/terms">Termos de Uso</a></li>
                        <li><a href="/privacy">Política de Privacidade</a></li>
                        <li><a href="/product/create">Adicionar Produto</a></li>
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