import * as React from "react";
import { useState, useEffect } from "react";
import "../assets/css/Style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./../component/Home";
import Header from "../sanpham/Header";
const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Header" element={<Header />} />
      </Routes>
    </>
  );
};

export default Layout;