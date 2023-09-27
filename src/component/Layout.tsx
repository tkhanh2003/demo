import * as React from "react";
import { useState, useEffect } from "react";
import "../assets/css/Style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./../component/Home";
import Header from "../sanpham/Header";
import Cart from "../cart/Cart";
import Single_product from "../sanpham/Single_product";
const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Single_product" element={<Single_product />} />
      </Routes>
    </>
  );
};

export default Layout;