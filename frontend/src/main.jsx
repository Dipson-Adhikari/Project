import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import login from "./pages/LoginPage.jsx"
import cart from "./pages/CartPage.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App}>
          <Route index Component={HomePage} />
          <Route path="products/:id" Component={ProductDetailPage} />
          <Route path="cart" Component={cart} />
          <Route path="login" Component={login} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);