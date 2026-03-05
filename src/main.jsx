import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import HomePage from "./landing_page/home/HomePage.jsx";
import SignUp from "./landing_page/signup/SignUp.jsx";
import AboutPage from "./landing_page/about/AboutPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./landing_page/Footer.jsx";
import Navbar from "./landing_page/Navbar.jsx";
import ProductPage from "./landing_page/products/ProductsPage.jsx";
import PricingPage from './landing_page/pricing/PricingPage.jsx';
import SupportPage from './landing_page/support/SupportPage.jsx';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/signup"} element={<SignUp />} />
      <Route path={"/about"} element={<AboutPage />} />
      <Route path={"/products"} element={<ProductPage />} />
      <Route path={"/pricing"} element={<PricingPage />} />
      <Route path={'/support'} element={<SupportPage/>}/>
    </Routes>
    <Footer />
  </BrowserRouter>,
);
