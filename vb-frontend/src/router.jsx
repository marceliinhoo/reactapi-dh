import React from "react"
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import Home from "./pages/Home"
import Create from "./pages/Create"
import Year from "./pages/Year"
import Update from "./pages/Update"
/* import Product from "./pages/Product" */

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route
                exact
                path="/"
                element={<Year/>}
                />
                <Route
                exact
                path="/home"
                element={<Home/>}
                />
                 <Route
                exact
                path="/product-detail"
                element={null}
                />
                 <Route
                exact
                path="/product-create"
                element={<Create/>}
                />
                  <Route
                exact
                path="/product-update"
                element={<Update/>}
                />
{/*                 <Route
                exact
                path="/product/nossoproduto"
                element={<Product/>}
                /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router