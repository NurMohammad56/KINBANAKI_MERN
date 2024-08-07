import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import ProductByBrand from "./pages/productByBrand.jsx";
import ProductByCategory from "./pages/productByCategory.jsx";
import productByKeyword from "./pages/productByKeyword";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/by-brand/:id" element={<ProductByBrand />} />
          <Route path="/by-category/:id" element={<ProductByCategory />} />
          <Route path="/by-keyword/:Keyword" element={<productByKeyword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
