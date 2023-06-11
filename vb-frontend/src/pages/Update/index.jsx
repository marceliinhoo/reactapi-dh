import React from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import "./product-update-form.css"

const Update = () => {
    return (
        <>
            <Header/>

			<div class="container products-update">
        <div class="row">
          <div class="col-12">
            <h2 class="products-title">Você está editando: <i>{/* productToEdit.name */}</i></h2>
          </div>
        </div>
        <div class="col-12">
          <form action="/product/<%= productToEdit.id %>?_method=PUT" method="POST" enctype="multipart/form-data">
            <div class="row product-detail">
              <div class="col-12 col-md-6">
                <label for="name" class="form-label">Nome:</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Informe o nome do produto"
                  class="form-input"
                  value="<%= productToEdit.name %>"
                />
              </div>
              <div class="col-12 col-md-6">
								<label for="type" class="form-label">Tipo de Cerveja:</label>
								<select name ='id_type' class="form-label">
									<option value="1">Stout</option>
									<option value="2">Pilsen</option>
									<option value="3">Lager</option>
									<option value="4">Pale</option>
							</select>
              </div>
              <div class="col-12 col-md-6">
                <label for="price" class="form-label">Preço:</label>
                <input
                  id="price"
                  type="number"
                  name="price"
                  placeholder="Informe o preço do produto"
                  class="form-input"
                  value="<%= productToEdit.price %>"
                />
              </div>
              <div class="col-12">
                <label for="description" class="form-label">Descrição:</label>
                <textarea
                  id="description"
                  name="description"
                  class="form-input"
                >{/* productToEdit.description */}</textarea>
              </div>
              <div class="col-12 col-md-6">
								<label for="image" class="form-label">Imagem:</label>
								<input type="file" id="image" name="image" class="form-input"/>
							</div>
              <div class="col-12">
                <button type="submit" class="buy-now-button">Salvar</button>
              </div>
            </div>
          </form>
        </div>
      </div>

           <Footer/>
        </>
    )

}
export default Update