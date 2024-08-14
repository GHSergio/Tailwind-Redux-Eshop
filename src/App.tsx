//App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import { ThemeProviderComponent } from "./contexts/ThemeContext";
import { ProductProvider } from "./contexts/ProductContext";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <ThemeProviderComponent>
      <ProductProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />}></Route>
              <Route
                path="products/:id"
                element={<ProductDetailPage />}
              ></Route>
              <Route path="cart" element={<CartPage />}></Route>
            </Route>
          </Routes>
        </Router>
      </ProductProvider>
    </ThemeProviderComponent>
  );
};

export default App;
