import React from "react";
import Men01 from "../assets/images/kid-01.jpg";
import Men02 from "../assets/images/men-02.jpg";
import Men03 from "../assets/images/men-03.jpg";
import Slider from "react-slick";

const Men = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section className="section mt-5" id="men">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>Sản phẩm mới của nam</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings}>
              <div className="item">
                <div className="thumb">
                  <div className="hover-content">
                    <ul>
                      <li>
                        <a href="single-product.html">
                          <i className="fa fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a href="single-product.html">
                          <i className="fa fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="single-product.html">
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <img src={Men01} alt="" />
                </div>
                <div className="down-content mx-3">
                  <h4>Classic Spring</h4>
                  <span>$120.00</span>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item">
                <div className="thumb">
                  <div className="hover-content">
                    <ul>
                      <li>
                        <a href="single-product.html">
                          <i className="fa fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a href="single-product.html">
                          <i className="fa fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="single-product.html">
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <img src={Men02} alt="" />
                </div>
                <div className="down-content mx-3">
                  <h4>Air Force 1 X</h4>
                  <span>$90.00</span>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item">
                <div className="thumb">
                  <div className="hover-content">
                    <ul>
                      <li>
                        <a href="single-product.html">
                          <i className="fa fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a href="single-product.html">
                          <i className="fa fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="single-product.html">
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <img src={Men03} alt="" />
                </div>
                <div className="down-content mx-3">
                  <h4>Love Nana ‘20</h4>
                  <span>$150.00</span>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item">
                <div className="thumb">
                  <div className="hover-content">
                    <ul>
                      <li>
                        <a href="single-product.html">
                          <i className="fa fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a href="single-product.html">
                          <i className="fa fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="single-product.html">
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <img src={Men01} alt="" />
                </div>
                <div className="down-content mx-3">
                  <h4>Classic Spring</h4>
                  <span>$120.00</span>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Men;
