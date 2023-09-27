import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './Footer';
import { firestore } from '../firebaseConfig';
import { useSearchParams } from 'react-router-dom';
import { DocumentData } from '@firebase/firestore-types';


interface Product {
  Anh: string;
  Gia: number;
  Mo_ta: string;
  Phan_loai: string;
  Ten_san_pham: string;
  id_sanpham: string;
}

function Single_product() {
  const [product, setProduct] = useState<DocumentData | undefined>(undefined);
  const [searchParams] = useSearchParams();
  useEffect(() => {    
    const productsRef = firestore.collection('Product');
    productsRef.doc(searchParams.get('id')!).get().then((docRef) => { 
      console.log(docRef.data());
      
      if(docRef.data())
        setProduct(docRef.data());
    })
    .catch((error) => { });
  },[]);
  return (
    <div>
      {/* Header */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  <img src={logo} alt="Logo" /> {/* Đổi lại đường dẫn logo nếu cần */}
                </a>
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
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main role="main">
    {/* Block content - Đục lỗ trên giao diện bố cục chung, đặt tên là `content` */}
    <div className="container mt-4">
      <div id="thongbao" className="alert alert-danger d-none face" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="card">
        <div className="container-fliud">
          <form name="frmsanphamchitiet" id="frmsanphamchitiet" method="post" action="/php/twig/frontend/giohang/themvaogiohang">
            <input type="hidden" name="sp_ma" id="sp_ma" defaultValue={5} />
            <input type="hidden" name="sp_ten" id="sp_ten" defaultValue="Samsung Galaxy Tab 10.1 3G 16G" />
            <input type="hidden" name="sp_gia" id="sp_gia" defaultValue={10990000.00} />
            <input type="hidden" name="hinhdaidien" id="hinhdaidien" defaultValue="samsung-galaxy-tab-10.jpg" />
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                </div>
              </div>
              <div className="details col-md-6">
                <div className="rating">
                  <div className="stars">
<span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                  <span className="review-no">999 reviews</span>
                </div>
                <h5 className="sizes">sizes:
                  <span className="size" data-toggle="tooltip" title="cỡ Nhỏ">s</span>
                  <span className="size" data-toggle="tooltip" title="cỡ Trung bình">m</span>
                  <span className="size" data-toggle="tooltip" title="cỡ Lớn">l</span>
                  <span className="size" data-toggle="tooltip" title="cỡ Đại">xl</span>
                </h5>
                <h5 className="colors">colors:
                  <span className="color orange not-available" data-toggle="tooltip" title="Hết hàng" />
                  <span className="color green" />
                  <span className="color blue" />
                </h5>
                <div className="form-group">
                  <label htmlFor="soluong">Số lượng đặt mua:</label>
                  <input type="number" className="form-control" id="soluong" name="soluong" />
                </div>
                <div className="action">
                  <a className="add-to-cart btn btn-default" id="btnThemVaoGioHang">Thêm vào giỏ hàng</a>
                </div>
              </div>
            </div>
          </form>
        </div>
</div>
      <div className="card">
        <div className="container-fluid">
          <h3>Thông tin chi tiết về Sản phẩm</h3>
          <div className="row">
            <div className="col">
              Vi xử lý Dual-core 1 Cortex-A9 tốc độ 1GHz
            </div>
          </div>
          {product && (<img src={product.Anh}/>)}
        </div>
      </div>
    </div>
    
  </main><Footer />
    </div>
  );
}

export default Single_product;
