import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import ProductByBrand from "./pages/productByBrand.jsx";
import ProductByCategory from "./pages/productByCategory.jsx";
import ProductByKeyword from "./pages/productByKeyword";
import ProductDetails from "./pages/productDetails.jsx";
import AboutPage from "./pages/aboutPage.jsx";
import RefundPage from "./pages/refundPage";
import PrivacyPage from "./pages/privacyPage";
import TermsPage from "./pages/termsPage";
import HowToBuyPage from "./pages/howToBuyPage";
import ContactPage from "./pages/contactPage";
import ComplainPage from "./pages/complainPage";
import LoginPage from "./pages/loginPage";
import OtpPage from "./pages/otpPage";
import ProfilePage from "./pages/profilePage.jsx";
import WishPage from "./pages/wishPage.jsx";

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
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/howToBuy" element={<HowToBuyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/complain" element={<ComplainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-otp" element={<OtpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/wish" element={<WishPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
