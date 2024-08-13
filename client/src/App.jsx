import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import ProductByBrand from "./pages/productByBrand.jsx";
import ProductByCategory from "./pages/productByCategory.jsx";
import ProductByKeyword from "./pages/productByKeyword";
import ProductDetails from "./pages/productDetails.jsx";
import AboutPage from "./pages/aboutPage.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/by-brand/:id" element={<ProductByBrand />} />
          <Route path="/by-category/:id" element={<ProductByCategory />} />
          <Route path="/by-keyword/:Keyword" element={<ProductByKeyword />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
