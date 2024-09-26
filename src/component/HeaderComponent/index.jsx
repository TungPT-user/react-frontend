import "bootstrap/dist/css/bootstrap.css";
import logo from "../../image/logo.png";
import "./style.css";

const HeaderComponent = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-12">
              <a href="#" className="logo">
                <img src={logo} />
              </a>
              <button className=" btn-menu">Danh mục</button>
              <span>
                <button className=" btn-locate">
                  <span>Xem giá tại Hà Nội</span>
                </button>
              </span>
            </div>
            <div className="col-md-4 col-sm-12">
              <input
                className="input-header"
                type="text"
                placeholder="Bạn cần tìm gì?"
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="d-flex flex-row justify-content-around">
                <div className="flex-grow-3">
                  <button className=" btn-facetime ">Gọi mua hàng</button>
                </div>
                <div className="flex-grow-3">
                  <button className=" btn-address">Cửa hàng gần bạn</button>
                </div>
                <div className="flex-grow-3">
                  <button className=" btn-follow">Tra cứu đơn hàng</button>
                </div>
                <div className="flex-grow-3">
                  <button className=" btn-cart">Giỏ hàng</button>
                </div>
                <div className="flex-grow-3">
                  <button className=" btn-login">Đăng nhập</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderComponent;
