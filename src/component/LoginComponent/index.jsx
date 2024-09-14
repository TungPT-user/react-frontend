import BannerLogin from "../../image/banner-login.png";
import btnLogin1 from "../../image/btn-login (1).png";
import btnLogin2 from "../../image/btn-login (2).png";
import HeaderComponent from "../HeaderComponent";
import "./style.css";
const LoginComponent = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <HeaderComponent></HeaderComponent>
        </div>
        <div className="row login-img">
          <img
            className="img-banner"
            src={BannerLogin}
            alt=""
            style={{ width: "109px", height: "102px" }}
          />
        </div>
        <div className="row">
          <div className="col-6">
            <a href="#">
              <img
                src={btnLogin1}
                style={{ width: "115px", height: "35px", float: "right" }}
                alt=""
              />
            </a>
          </div>
          <div className="col-6">
            <a href="#">
              <img
                src={btnLogin2}
                style={{ width: "115px", height: "35px", float: "left" }}
                alt=""
              />
            </a>
          </div>
        </div>
        <hr
          style={{
            width: "310px",
            marginLeft: "483px",
          }}
        />
        <br />
        <div className="row input-login">
          <div className="col-6">
            <input
              type="text"
              style={{
                width: "700px",
                height: "35px",
                borderTop: "0px solid #F4F6F7",
                borderRight: "0px solid #F4F6F7",
                borderLeft: "0px solid #F4F6F7",
                borderBottom: "1px solid #F4F6F7",
              }}
              placeholder="Nhập số điện thoại"
            />
            <br />
            <br />

            <input
              type="password"
              style={{
                width: "700px",
                height: "35px",
                borderTop: "0px solid #F4F6F7",
                borderRight: "0px solid #F4F6F7",
                borderLeft: "0px solid #F4F6F7",
                borderBottom: "1px solid #F4F6F7",
              }}
              placeholder="Nhập số mật khẩu"
            />
          </div>
        </div>
        <div className="row">
          <div className="qmk">
            <a href="#">Quên mật khẩu?</a>
          </div>
        </div>
        <div className="row">
          <div className="button-login">
            <button className="btn-login">Đăng nhập</button>
          </div>
        </div>
        <div className="row">
          <div className="rotate-register">
            <p>
              Bạn chưa có tài khoản?
              <a href="#" style={{ color: "red" }}>
                Đăng ký ngay
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="bonus-policy">
            <a href="#">
              <h5
                style={{
                  color: "red",
                  textDecoration: "underline",
                  textDecorationColor: "red",
                }}
              >
                Xem chính sách ưu đãi Smember
              </h5>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginComponent;
