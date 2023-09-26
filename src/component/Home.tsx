import * as React from "react";
import { useState, useEffect } from "react";
import Header from "../sanpham/Header"
import Men from "../sanpham/Men"
import Women from "../sanpham/Women"
import Kid from "../sanpham/Kid"
import Accessories from "../sanpham/Accessories"
import Footer from "../sanpham/Footer";

const Home = () => {

  return (
    
    <>
      <Header/>
      <Men />
      <Women />
      <Kid />
      <Accessories />
      <Footer />
      
    </>
  );
};

export default Home;