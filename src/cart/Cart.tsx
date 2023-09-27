import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../reducer/cart";
import Footer from "../sanpham/Footer";
import Header from "../sanpham/Header";

function Cart() {
  const cart = useSelector((state:any) => state.cart);
  const dispatch = useDispatch();

  function removeItemInCart(item: any): void {
    dispatch(removeProduct(item));
  }

  return (
    <div className="container mt-5">
       <Header />
      <div
        id="thongbao"className="alert alert-danger d-none face"role="alert"
      >
        <button type="button"className="close"data-dismiss="alert"aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <h1 className="text-center">Giỏ hàng</h1>
      <div className="row">
        <div className="col col-md-12">
          <table className="table table-bordered">
          <thead>
  <tr className="text-center">
    <th>STT</th>
    <th>Hình ảnh sản phẩm</th>
    <th>Tên sản phẩm</th>
    <th>Số lượng</th>
    <th>Đơn giá</th>
    <th>Thành tiền</th>
    <th>Chỉnh sửa</th>
  </tr>
</thead>
<tbody id="datarow">
  {cart.map((item:any, index:Number) => (
    <tr key={String(index)}>
      <td className="text-center">{String(index)}</td>
      <td className="text-center">
        <img width="50" height="50" src={item.Anh} className="hinhdaidien" />
      </td>
      <td className="text-center">{item.Ten_san_pham}</td>
      <td className="text-center">1</td>
      <td className="text-center">{item.Gia}</td>
      <td className="text-center">{item.Gia}</td>
      <td className="text-center">
        <a
          id={`delete_${index}`}
          data-sp-ma={2}
          onClick={() => removeItemInCart(item)}
          className="btn btn-danger btn-delete-sanpham"
        >
          <i className="fa fa-trash" aria-hidden="true" /> Xóa
        </a>
      </td>
    </tr>
  ))}
</tbody>

          </table>
          <div className="d-flex justify-content-center">
            <a href="/" className="btn btn-warning btn-md mr-3">
              <i className="fa fa-arrow-left" aria-hidden="true" />
              &nbsp;Quay về trang chủ
            </a>
            <a href="checkout.html" className="btn btn-primary btn-md">
              <i className="fa fa-shopping-cart" aria-hidden="true" />
              &nbsp;Thanh toán
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
