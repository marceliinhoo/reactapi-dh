import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import api from "../../services/api"
import "./telaLogin.css"

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    const auth = {
      email: email,
      password: password
    }

    try {
      const response = await api.post('/login', auth)

      document.cookie = `auth=${response.data.token}; expires=${new Date(2100, 0, 1)}`

      alert('Login realizado!')

      navigate('/home')

    } catch (error) {
      alert(error.response.data)
    }
  }

  return (
    <>
      <Header />

			<div class="login-container">
			<div class="title-login">
			  <h1>LOGIN</h1>
			</div>
          <div class='acess-login'>
      <input
                id="email"
                className="login-form"
                type="email"
                name="email"
                placeholder="Informe o seu e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
        <input
                id="password"
                className="login-form"
                type="password"
                name="password"
                placeholder="Informe a senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
	  </div>
	  <div class="esqueci-senha">
		<Link to="#" id="forgot-pass">Esquecer a senha?</Link></div>
		<button type="submit" onClick={handleLogin}> Entrar </button>
	  <div class="register-container">
			<Link to="/formulario">Criar Conta</Link>
		</div>
	</div>

           <Footer/>
        </>
    )

}
export default Login