import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import NavBar from "./components/NavBar.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import SearchResult from "./pages/SearchResult.jsx";
import Checkout from "./pages/Checkout.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exec path="/" element={<HomePage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
