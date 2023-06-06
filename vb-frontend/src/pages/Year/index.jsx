import React from "react"
import "./validacao.css"

const Year = () => {
    return (
        <>
            <div className="home-age">
            <div className="agerow">
              <div className="imgAge">
              <img className="image-age" src="/images/Logo/Logo sem fundo 600x600 sem opacidade.png" alt=""/>
            </div>
            <form method="POST" action="/verificar-idade">
              <div class="col-md-9">
                <p>Você tem 18 anos ou mais?</p>
                <p>O consumo de bebidas alcoólicas é proibido para menores de 18 anos.</p>
              </div>
              <div className="age-Quest">                 
                <button className="ageGateButton" name='age' value="Nao" /* style="min-width: 105px;" */><b>Não</b></button>
                <button className="ageGateButton" name='age' value="Sim" /*  style="min-width: 105px;" */><b>Sim</b></button>  
                </div>                
                </form>
              </div>
              </div>
            
        </>
    )

}
export default Year