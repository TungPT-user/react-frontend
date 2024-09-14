import "bootstrap/dist/css/bootstrap.css";
import logo from "../../image/logo.png";
import "./style.css";

const HeaderComponent = () => {
  return (
    <>
      <div className="container-fulid header">
        <div className="col1">
          <div className="row ">
            <div className="col-4">
              <a href="#" className="logo">
                <img src={logo} />
              </a>
              <button className=" btn-menu">Danh mục</button>
              <span>
                <button className=" btn-locate">Xem giá tại Hà Nội</button>
              </span>
            </div>
            <div className="col-4">
              <input
                className="input-header"
                type="text"
                placeholder="Bạn cần tìm gì?"
              />
            </div>
            <div className="col-4">
              <button className=" btn-facetime">Gọi mua hàng</button>
              <button className=" btn-address">Cửa hàng gần bạn</button>
              <button className=" btn-follow">Tra cứu đơn hàng</button>
              <button className=" btn-cart">Giỏ hàng</button>
              <button className=" btn-login">Đăng nhập</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderComponent;
