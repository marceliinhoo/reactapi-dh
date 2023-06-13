import React, { useState } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import "./product-create-form.css"
import api from "../../services/api"
import { getCookie } from "../../Utils"
import { useNavigate } from "react-router-dom"

const Create = () => {
	const navigate = useNavigate()

	const [name, setName] = useState('')
  	const [idProductType, setIdProductType] = useState(1)
  	const [price, setPrice] = useState(0)
  	const [description, setDescription] = useState('')
	const [selectImage, setSelectImage] = useState ()

	const handleSave = async () => {

	const formData = new FormData ()
	formData.append('name', name)
	formData.append('id_type', idProductType)
	formData.append('price', price)
	formData.append('description', description)
	if (selectImage)
		formData.append('image', selectImage)

	try {
		await api.post('/product/nossoproduto', formData, { headers: {Authorization: getCookie('auth')}})

		alert ('Seu produto foi criado com sucesso. Parabéns!')
		navigate ('/product/nossoproduto')

	}catch (error){
		alert(error.response.data.error)
	}
	}

    return (
        <>
            <Header/>

			<div className="container products-create">
				<div className="row">
					<div className="col-12">
						<h2 className="products-title">Adicionar Novos Produtos</h2>
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
								<label htmlFor="id_product_type" className="form-label">Tipo de Cerveja:</label>
								<select
                				id="id_product_type"
                				name="id_product_type"
               					className="form-input"
                				value={idProductType}
               					onChange={e => setIdProductType(e.target.value)}>
									<option value="1">Stout</option>
									<option value="2">Pilsen</option>
									<option value="3">Lager</option>
									<option value="4">Pale</option>
							</select>
							</div> 
							<div class="col-12 col-md-6">
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
							<div class="col-12">
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
								onChange={e => setSelectImage(e.target.files[0])}
              					/>
							</div>
							<div class="col-12">
								<button type="submit" 
								className="buy-now-button"
								onClick={handleSave}>
									Salvar
								</button>
							</div>
						</div>
				</div>
			</div>

           <Footer/>
        </>
    )

}
export default Create