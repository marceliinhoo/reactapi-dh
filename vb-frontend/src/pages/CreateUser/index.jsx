import React, { useState } from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import "./telaDeCadastro.css"
import api from "../../services/api"
import { useNavigate } from "react-router-dom"

const CreateUser = () => {
	const navigate = useNavigate()

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [pwdConfirm, setPwdConfirm] = useState()
  const [dt_nasc, setDtNasc] = useState()

  const handleSave = async () => {

    const formData = new FormData ()
    formData.append('dt_nasc', dt_nasc)
    formData.append('name', name)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('pwdConfirm', pwdConfirm)

    try {
      await api.post('/formulario', formData )
  
      alert ('Seu cadastrado foi criado com sucesso. Parabéns!')
      navigate ('/')
  
    }catch (error){
      alert(error.response.data.error)
    }
    }

  return (

    <>

      <Header />
      
      <div className="card-form">
      <div className="column">
          <img  className="image"src={`http://localhost:3000/images/Logo/Logosemfundo600x600semopacidade.png`} alt="logotipo"/>
          <div className="description-empresa">
          <h5>Faça parte da nossa <br/><strong>BEERHOUSE</strong></h5>
          <br/>
          <p>Receba uma  newsletter com dicas de <br/> fabricação e receitas para harmonização em <br/>diversas ocasiões. <br/>
          Surpreenda o paladar de seus amigos <br/> e família.<br/>
          Todo mês um catálogo exclusivo de <br/> cervejas dos maiores fabricantes <br/> artesanais do Brasil.</p>
        </div>
        </div>
    <div className="conteudo">
      <div className="header">
        <h2>Seja um VIKINGS</h2>
      </div>
      <div className="form-control">
      <input id="dataNasc"
                  className="form-input"
                  type="date"
                  name="dt_nasc"
                  placeholder="Data de Nascimento"
                  value={dt_nasc}
                  onChange={e => setDtNasc(e.target.value)}
                />
       </div> 
        <div className="form-control">
          <input  id="username"
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="Nome Completo"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
        </div>
        <div className="form-control">
          <input id="email"
                  className="form-input"
                  type="text"
                  name="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
        </div>
        <div className="form-control">
          <input id="password"
                  className="form-input"
                  type="password"
                  name="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
        </div>
        <div className="form-control">
          <input id="pwdConfirm"
                  className="form-input"
                  type="password"
                  placeholder="Confirme sua Senha"
                  value={pwdConfirm}
                  onChange={e => setPwdConfirm(e.target.value)}
                />
        </div>
        <div>
          <button type="submit" className="enviar"
          onClick={handleSave}>
            Enviar</button>
      </div>
    </div>
</div>
      <Footer />
    </>
    )
}

export default CreateUser