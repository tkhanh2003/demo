
import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
function Cart() {
  return (
    <div className="container mt-4">
  <div id="thongbao" className="alert alert-danger d-none face" role="alert">
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>
  </div>
  <h1 className="text-center">Giỏ hàng</h1>
  <div className="row">
    <div className="col col-md-12">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Ảnh đại diện</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody id="datarow">
          <tr>
            <td>1</td>
            <td>
              <img src="../assets/img/product/ipad4.png" className="hinhdaidien" />
            </td>
            <td>Apple Ipad 4 Wifi 16GB</td>
            <td className="text-right">2</td>
            <td className="text-right">11,800,000.00</td>
            <td className="text-right">23,600,000</td>
            <td>
              {/* Nút xóa, bấm vào sẽ xóa thông tin dựa vào khóa chính sp_ma */}
              <a id="delete_1" data-sp-ma={2} className="btn btn-danger btn-delete-sanpham">
                <i className="fa fa-trash" aria-hidden="true" /> Xóa
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <img src="../assets/img/product/nokia-asha-311.jpg" className="hinhdaidien" />
            </td>
            <td>Nokia Asha 311</td>
            <td className="text-right">4</td>
            <td className="text-right">2,699,000.00</td>
            <td className="text-right">1,0796,000</td>
            <td>
              {/* Nút xóa, bấm vào sẽ xóa thông tin dựa vào khóa chính sp_ma */}
              <a id="delete_2" data-sp-ma={6} className="btn btn-danger btn-delete-sanpham">
                <i className="fa fa-trash" aria-hidden="true" /> Xóa
              </a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <img src="../assets/img/product/iphone5-white.jpeg" className="hinhdaidien" />
            </td>
            <td>Apple iPhone 5 16GB White</td>
            <td className="text-right">8</td>
            <td className="text-right">1,4990,000.00</td>
            <td className="text-right">119,920,000</td>
            <td>
              {/* Nút xóa, bấm vào sẽ xóa thông tin dựa vào khóa chính sp_ma */}
              <a id="delete_3" data-sp-ma={4} className="btn btn-danger btn-delete-sanpham">
                <i className="fa fa-trash" aria-hidden="true" /> Xóa
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <a href="../home" className="btn btn-warning btn-md"><i className="fa fa-arrow-left" aria-hidden="true" />&nbsp;Quay về trang chủ</a>
      <a href="checkout.html" className="btn btn-primary btn-md"><i className="fa fa-shopping-cart" aria-hidden="true" />&nbsp;Thanh toán</a>
    </div>
  </div>
</div>

  );
}

export default Cart;