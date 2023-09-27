import React, { useState, useEffect } from "react";
import firebase from 'firebase/app';
import 'firebase/database';
import Slider from "react-slick";
import { firestore } from "../firebaseConfig";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface Product {
  Anh: string;
  Gia: number;
  Mo_ta: string;
  Phan_loai: string;
  Ten_san_pham: string;
  id_sanpham: string;
}
const Women = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    useEffect(() => {
      const productsRef = firestore.collection('Product_nu');
  
      productsRef.get().then((querySnapshot) => {
        const productList: Product[] = [];
        querySnapshot.forEach((doc) => {
          productList.push(doc.data() as Product);
        });
        setProducts(productList);
      }).catch((error) => {
        console.error("Error getting documents: ", error);
      });
    }, []);
  
    return (
      <section className="section mt-5" id="women">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>Sản phẩm mới của nữ</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings}>
              {products.map((product, index) => (
                <div className="item mb-4" key={index}>
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <a href="../Single_product">
                            <i className="fa fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a href="../Cart">
                            <i className="fa fa-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src={product.Anh} alt="" style={{ width: '340px', height: '360px', margin: '0 35px' }} />
                  </div>
                  <div className="down-content text-center mx-3">
                    <h4>{product.Ten_san_pham}</h4>
                    <span>${product.Gia}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      </section>
    );
  };

export default Women;
