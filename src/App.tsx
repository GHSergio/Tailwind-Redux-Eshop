//App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import { ThemeProviderComponent } from "./contexts/ThemeContext";
import { ProductProvider } from "./contexts/ProductContext";

const App: React.FC = () => {
  return (
    <ThemeProviderComponent>
      <ProductProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/product/:id" element={<ProductPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
          </Routes>
        </Router>
      </ProductProvider>
    </ThemeProviderComponent>
  );
};

export default App;
