import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "../../components/Footer"

class Carousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="banner">
        <Slider {...settings}>
          <div>
            <a href="/product/nossoproduto">
              <img src={`http://localhost:3000/images/Logo/Seja.Bem.Vindo.png`} className="img-fluid" alt="..." />
            </a>
          </div>
          <div>
          <img src={`http://localhost:3000/images/Diversas/nova.cerveja.png`} className="img-fluid" alt="..." />
          </div>
          <div>
          <img src={`http://localhost:3000/images/Diversas/em.breve.png`} className="img-fluid" alt="..." />
          </div>
        </Slider>
        <Footer/>
      </div>
      
    );
  }
}

export default Carousel;