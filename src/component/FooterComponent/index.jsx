import imgFooter from "../../image/img-footer.png";
import imgFooter1 from "../../image/img-footer (1).png";
import imgFooter2 from "../../image/img-footer (2).png";
import imgFooter3 from "../../image/img-footer (3).png";
import imgFooter4 from "../../image/img-footer (4).png";
import imgFooter5 from "../../image/img-footer (5).png";
import imgFooter6 from "../../image/img-footer (6).png";

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
const FooterComponent = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h4>Tổng đài hỗ trợ miễn phí</h4>
            <p>Gọi mua hàng 1800.2097 (7h30 - 22h00)</p>
            <br />
            <p>Gọi khiếu nại 1800.2063 (8h00 - 21h30)</p>
            <br />
            <p>Gọi bảo hành 1800.2064 (8h00 - 21h00)</p>
            <br />

            <h4>Phương thức thanh toán</h4>
            <img src={imgFooter} alt="" />
            <h4>ĐĂNG KÝ NHẬN THÔNG TIN KHUYẾN MÃI</h4>
          </div>
          <div className="col-3">
            <h4>Thông tin và chính sách</h4>
            <a href="#">Mua hàng và thanh toán Online</a>
            <br />

            <a href="#">Mua hàng trả góp Online</a>
            <br />

            <a href="#">Mua hàng trả góp bằng thẻ tín dụng</a>
            <br />
            <a href="#">Chính sách giao hàng</a>
            <br />

            <a href="#">Tra điểm Smember</a>
            <br />
            <a href="#">Xem ưu đãi Smember</a>
            <br />
            <a href="#">Tra thông tin bảo hành</a>
            <br />
            <a href="#">Tra cứu hoá đơn điện tử</a>
            <br />
            <a href="#">Thông tin hoá đơn mua hàng</a>
            <br />
            <a href="#">Trung tâm bảo hành chính hãng</a>
            <br />
            <a href="#">Quy định về việc sao lưu dữ liệu</a>
            <br />
            <a href="#">Chính sách khui hộp sản phẩm Apple</a>
          </div>
          <div className="col-3">
            <h4>Dịch vụ và thông tin khác</h4>
            <a href="#">Khách hàng doanh nghiệp (B2B)</a>
            <br />
            <a href="#">Ưu đãi thanh toán</a>
            <br />
            <a href="#">Quy chế hoạt động</a>
            <br />
            <a href="#">Chính sách bảo mật thông tin cá nhân</a>
            <br />
            <a href="#">Chính sách Bảo hành</a>
            <br />
            <a href="#">Liên hệ hợp tác kinh doanh</a>
            <br />
            <a href="#">Tuyển dụng</a>
            <br />
            <a href="#">Dịch vụ bảo hành mở rộng</a>
            <br />
            <a href="#">Smember: Tích điểm & sử dụng ưu đãi</a>
            <img src={imgFooter2} alt="" />
          </div>
          <div className="col-3">
            <h4>Kết nối với CellphoneS</h4>
            <img src={imgFooter3} alt="" />
            <h4>Website thành viên</h4>
            <p>Hệ thống bảo hành sửa chữa Điện thoại - Máy tính </p>
            <img src={imgFooter4} alt="" />
            <p>Trung tâm bảo hành ủy quyền Apple</p>
            <img src={imgFooter5} alt="" />
            <p>Kênh thông tin giải trí công nghệ cho giới trẻ</p>
            <img src={imgFooter1} alt="" />
            <p>trang thông tin công nghệ mới nhất</p>
            <img src={imgFooter6} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterComponent;
