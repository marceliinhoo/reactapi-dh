import React from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import "./product-create-form.css"

const Create = () => {
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
					<form action="/product" method="POST" enctype="multipart/form-data">
						<div className="row product-detail">
							<div className="col-12 col-md-6">
								<label for="name" className="form-label">Nome:</label>
								<input type="text" id="name" name="name" placeholder="Informe o nome do produto" className="form-input"/>
							</div>
							<div className="col-12 col-md-6">
								<label for="type" className="form-label">Tipo de Cerveja:</label>
								<select name ='id_type' className="form-label">
									<option value="1">Stout</option>
									<option value="2">Pilsen</option>
									<option value="3">Lager</option>
									<option value="4">Pale</option>
							</select>
							</div> 
							<div class="col-12 col-md-6">
								<label for="price" className="form-label">Preço:</label>
								<input type="number" id="price" name="price" placeholder="Informe o preço do produto" className="form-input"/>
							</div>
							<div class="col-12">
								<label for="description" className="form-label">Descrição:</label>
								<textarea name="description" id="description" className="form-input"></textarea>
							</div>
							<div class="col-12 col-md-6">
								<label for="image" className="form-label">Imagem:</label>
								<input type="file" id="image" name="image" className="form-input"/>
							</div>
							<div class="col-12">
								<button type="submit" className="buy-now-button">Salvar</button>
							</div>
						</div>
					</form>
				</div>
			</div>

           <Footer/>
        </>
    )

}
export default Create