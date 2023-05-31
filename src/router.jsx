import React from "react"
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import Home from "./pages/Home"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                exact
                path="/"
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
                element={null}
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