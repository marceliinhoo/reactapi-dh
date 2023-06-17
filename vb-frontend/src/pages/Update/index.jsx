import React, { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import api from "../../services/api"
import { getCookie } from "../../Utils"
import { useNavigate } from "react-router-dom"
import "./product-update-form.css"

const Update = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [typeBeer, setIdProductType] = useState(1)
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [product, setProduct] = useState()

  useEffect(() => {
    loadProduct()
  }, [])

  const loadProduct = async () => {
    const response = await api.get(`/product/detail/${location.state.id}`)
    setName(response.data.name)
    setIdProductType(response.data.typeBeer.id)
    setPrice(response.data.price)
    setDescription(response.data.description)
    setProduct(response.data)
  } 

  const handleUpdate = async () => {
    try {
    await api.put(`/product/detail/${location.state.id}`, { headers: {Authorization: getCookie('auth')}})
    alert ('Seu produto foi Alterado. Parabéns!')
    navigate ('/product/nossoproduto')
  
  }catch (error){
    alert(error.response.data.error)
  }
    }

  
  return (
    <>
      <Header />

      {product ? (
        <div className="container products-wrapper">
          <div className="row">
            <div className="col-12">
              <h2 className="products-title">Você está editando: <i>{product.name}</i></h2>
            </div>
          </div>
          <div className="col-12">
            <div className="row product-detail">
              <div className="col-12 col-md-6">
                <label htmlFor="name" className="form-label">Nome:</label>
                <input
                  id="name"
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="Informe o nome do produto"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="id_product_type" className="form-label">Tipo:</label>
                <select
                  id="typeBeer"
                  name="typeBeer"
                  className="form-input"
                  value={typeBeer}
                  onChange={e => setIdProductType(e.target.value)}
                >
                  <option value={1}>Stout</option>
                  <option value={2}>Pilsen</option>
                  <option value={3}>Lager</option>
                  <option value={4}>Pale</option>
                </select>
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="price" className="form-label">Preço:</label>
                <input
                  id="price"
                  className="form-input"
                  type="number"
                  name="price"
                  placeholder="Informe o preço do produto"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                />
              </div>
              <div className="col-12">
                <label htmlFor="description" className="form-label">Descrição:</label>
                <textarea
                  id="description"
                  name="description"
                  className="form-input"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </div>
							<div class="col-12 col-md-6">
								<label htmlFor="image" className="form-label">Imagem:</label>
								<input
                				id="image"
                				className="form-input"
                				type="file"
               					name="image"
/* 								        onChange={e => setSelectImage(e.target.files[0])} */
              					/>
							</div>
              <div className="col-12">
              <button type="submit" 
								className="buy-now-button"
								onClick={handleUpdate}>
									Salvar
								</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <Footer />
    </>
  )
}
export default Update