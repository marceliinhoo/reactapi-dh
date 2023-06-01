import React from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import "./telaHome.css"

const Home = () => {
    return (
        <>
            <Header/>
            
                <div className="banner">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <a href="/product/nossoproduto">
                                    <img src="/images/Logo/Seja.Bem.Vindo.png" className="img-fluid" alt="..."/>
                                </a>
                            </div>
                            <div className="carousel-item">
                                <img src="/images/Diversas/nova.cerveja.png" className="img-fluid" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="/images/Diversas/em.breve.png" className="img-fluid" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            

           <Footer/>
        </>
    )

}
export default Home