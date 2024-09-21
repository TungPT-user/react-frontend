import BannerLogin from "../../image/banner-login.png";
import btnLogin1 from "../../image/btn-login (1).png";
import btnLogin2 from "../../image/btn-login (2).png";
import HeaderComponent from "../HeaderComponent";
import "./style.css";
const RegisterComponent = () => {
  return (
    <>
      <div className="container-fluid">
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
            marginLeft: "600px",
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
              placeholder="Nhập hộ và tên"
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
              placeholder="Nhập email (không bắt buộc)"
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
              placeholder="Nhập ngày sinh"
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
              placeholder="Nhập mật khẩu"
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
              placeholder="Nhập lại mật khẩu"
            />
          </div>
        </div>
        <div className="row">
          <div className="list-input">
            <div className="col-6">
              <ul>
                <li>
                  <input
                    type="checkbox"
                    style={{ backgroundColor: "red" }}
                    className="input-check"
                  ></input>
                  <p>Đăng ký nhận bản tin khuyến mãi từ CellphoneS</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    style={{ backgroundColor: "red" }}
                    className="input-check"
                  ></input>
                  <p>Tôi đồng ý với cách điều khoản bảo mật cá nhân</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    style={{ backgroundColor: "red" }}
                    className="input-check"
                  ></input>
                  <p>
                    Tôi là Học sinh - sinh viên (nhận thêm ưu đãi 500k/ sản
                    phẩm)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="button-login">
            <button className="btn-login">Đăng ký</button>
          </div>
        </div>
        <div className="row">
          <div className="rotate-register">
            <p>
              Bạn đã có tài khoản?
              <a href="#" style={{ color: "red" }}>
                Đăng nhập ngay
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegisterComponent;
