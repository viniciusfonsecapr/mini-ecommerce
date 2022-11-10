import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home-Page/index";
import CartPage from "../pages/Cart-Page/index";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/"></Route>
                <Route element={<CartPage />} path="/cart-page"></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
