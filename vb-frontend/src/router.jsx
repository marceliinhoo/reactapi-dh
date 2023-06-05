import React from "react"
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import Home from "./pages/Home"
import Create from "./pages/Create"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
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
                element={null}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Router