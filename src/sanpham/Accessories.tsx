import React from 'react';
import Kid01 from "../assets/images/kid-01.jpg"
const Accessories = () => {
return (
    <>
     <section className="section" id="accessories">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h2>Phụ kiện mới</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="kid-item-carousel">
                            <div className="owl-kid-item owl-carousel">
                                <div className="item">
                                    <div className="thumb">
                                        <div className="hover-content">
                                            <ul>
                                                <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                                <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                                <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <img src={Kid01} alt="" />
                                    </div>
                                    <div className="down-content">
                                        <h4>School Collection</h4>
                                        <span>$80.00</span>
                                        <ul className="stars">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Các phần tử khác được giữ nguyên */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
)
};
export default Accessories;