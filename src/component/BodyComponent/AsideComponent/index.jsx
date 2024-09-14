import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

const AsideComponent = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <aside>
              <div className="box-aside">
                <ul>
                  <li className="box list1">Điện thoại, Tablet</li>
                  <li className="box">Laptop</li>
                  <li className="box">Âm thanh</li>
                  <li className="box">Đồ gia dụng</li>
                  <li className="box">Phụ kiện</li>
                  <li className="box">PC, Màn hình, Máy in</li>
                  <li className="box">Tivi</li>
                  <li className="box">Thu cũ đổi mới</li>
                  <li className="box">Hàng cũ</li>
                  <li className="box">Khuyến mãi</li>
                  <li className="box">Tin công nghệ</li>
                </ul>
              </div>
            </aside>
          </div>
          <div className="col-8">
            <div className="table-list">
              <div className="container hidden-element-phone">
                <div className="row">
                  <div className="col-3">
                    <ul>
                      <li className="content-text">Hãng điện thoại</li>
                      <li>iPhone</li>
                      <li>Samsung</li>
                      <li>Xiaomi</li>
                      <li>OPPO</li>
                      <li>realme</li>
                    </ul>
                  </div>
                  <div className="col-3">
                    <ul>
                      <li className="content-text">Mức giá điện thoại</li>
                      <li>Dưới 2 triệu</li>
                      <li>Từ 2 - 4 triệu</li>
                      <li>Từ 4 - 7 triệu</li>
                      <li>Từ 7 - 15 triệu</li>
                      <li>Trên 15 triệu</li>
                    </ul>
                  </div>
                  <div className="col-3">
                    <ul>
                      <li className="content-text">Điện thoại hot</li>
                      <li>iPhone 16 Series</li>
                      <li>iPhone 15 Pro Max</li>
                      <li>Galaxy Z Flips6</li>
                      <li>Oppo reno12 5G</li>
                      <li>Oppo reno12 F</li>
                    </ul>
                  </div>
                  <div className="col-3">
                    <ul>
                      <li className="content-text">Điện thoại hot</li>
                      <li>iPhone 16 Series</li>
                      <li>iPhone 15 Pro Max</li>
                      <li>Galaxy Z Flips6</li>
                      <li>Oppo reno12 5G</li>
                      <li>Oppo reno12 F</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AsideComponent;
