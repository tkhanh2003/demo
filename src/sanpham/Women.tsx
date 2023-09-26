import React from 'react';
import Women01 from "../assets/images/women-01.jpg"
import Women02 from "../assets/images/women-02.jpg"
import Women03 from "../assets/images/women-03.jpg"
const Women = () => {
    return (
        <section className="section" id="women">
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
                        <div className="women-item-carousel">
                            <div className="owl-women-item owl-carousel">
                                <div className="item">
                                    <div className="thumb">
                                        <div className="hover-content">
                                            <ul>
                                                <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                                <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                                <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <img src={Women01} alt="" />
                                    </div>
                                    <div className="down-content">
                                        <h4>New Green Jacket</h4>
                                        <span>$75.00</span>
                                        <ul className="stars">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="thumb">
                                        <div className="hover-content">
                                            <ul>
                                                <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                                <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                                <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <img src={Women02} alt="" />
                                    </div>
                                    <div className="down-content">
                                        <h4>Classic Dress</h4>
                                        <span>$45.00</span>
                                        <ul className="stars">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="thumb">
                                        <div className="hover-content">
                                            <ul>
                                                <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                                <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                                <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <img src={Women03} alt="" />
                                    </div>
                                    <div className="down-content">
                                        <h4>Spring Collection</h4>
                                        <span>$130.00</span>
                                        <ul className="stars">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="thumb">
                                        <div className="hover-content">
                                            <ul>
                                                <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                                <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                                <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <img src={Women01} alt="" />
                                    </div>
                                    <div className="down-content">
                                        <h4>Classic Spring</h4>
                                        <span>$120.00</span>
                                        <ul className="stars">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Women;
