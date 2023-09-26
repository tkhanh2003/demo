import React from 'react';
import Logo from "../assets/images/logo.png"
import { Helmet } from 'react-helmet';

const Header = () => {
    <Helmet>
        <script src='../assets/js/bootstrap.min.js'></script>
        <script src='../assets/js/accordions.js'></script>

        <script src='../assets/js/custom.js'></script>
        <script src='../assets/js/datepicker.js'></script>
        <script src='../assets/js/imgfix.min.js'></script>
        <script src='../assets/js/isotope.js'></script>
        <script src='../assets/js/jquery-2.1.0.min.js'></script>
        <script src='../assets/js/jquery.counterup.min.js'></script>
        <script src='../assets/js/lightbox.js'></script>
        <script src='../assets/js/owl-carousel.js'></script>
        <script src='../assets/js/popper.js'></script>
        <script src='../assets/js/quantity.js'></script>
        <script src='../assets/js/scrollreveal.min.js'></script>
        <script src='../assets/js/slick.js'></script>
        <script src='../assets/js/waypoints.min.js'></script>
    </Helmet>

    return (

        <header className="header-area header-sticky">

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* ***** Logo Start ***** */}
                            <a href="index.html" className="logo">
                                <img src={Logo} alt="Logo" />
                            </a>
                            {/* ***** Logo End ***** */}
                            {/* ***** Menu Start ***** */}
                            <ul className="nav">
                                <li className="scroll-to-section"><a href="#top" className="active">Trang chủ</a></li>
                                <li className="scroll-to-section"><a href="#men">Nam</a></li>
                                <li className="scroll-to-section"><a href="#women">Nữ</a></li>
                                <li className="scroll-to-section"><a href="#kids">Trẻ em</a></li>
                                <li className="scroll-to-section"><a href="#accessories">Phụ kiện</a></li>
                                <li className="scroll-to-section"><a href="#shoppingcart">Giỏ hàng</a></li>

                                <li className="submenu">
                                    <a href="javascript:;">Thông tin cửa hàng</a>
                                    <ul>
                                        <li><a href="about.html">về chúng tôi</a></li>
                                        <li><a href="products.html">Địa chỉ cửa hàng</a></li>
                                        <li><a href="single-product.html">Chính sách và bảo mật</a></li>
                                        <li><a href="contact.html">Thông tin liên hệ</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                            {/* ***** Menu End ***** */}
                        </nav>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;
