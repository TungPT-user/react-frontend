import CarouselShopPage from "./CarouselShopPage";
import HeaderComponent from "../HeaderComponent";
import CardComponent from "../CardComponent";
import NewsComponent from "../BodyComponent/NewsComponent";

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
const ShopPageComponent = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <HeaderComponent></HeaderComponent>
        </div>
        <div className="row">
          <div className="col-6">
            <CarouselShopPage></CarouselShopPage>
          </div>
          <div className="col-6">
            <CarouselShopPage></CarouselShopPage>
          </div>
        </div>
        <div className="row">
          <div className="nav-button">
            <button>IPHONE 16 SERIES</button>
            <button>IPHONE 15 SERIES</button>
            <button>IPHONE 14 SERIES</button>
            <button>IPHONE 13 SERIES</button>
            <button>IPHONE 12 SERIES</button>
            <button>IPHONE 11 SERIES</button>
          </div>
        </div>
        <div className="row">
          <div className="nav-a">
            <h3>Chọn theo tiêu chí</h3>
            <button href="#">Bộ lọc</button>
            <button href="#">Sẵn sàng</button>
            <button href="#">Giá</button>
            <button href="#">Bộ nhớ trong</button>
            <button href="#">Dung lượng ram</button>
            <button href="#">Kích thước màn hình</button>
            <button href="#">Nhu cầu sử dụng</button>
            <button href="#">Kiểu màn hình</button>
            <button href="#">Tính năng camera</button>
          </div>
        </div>
        <div className="row">
          <div className="nav-a">
            <h3>Sắp xếp theo</h3>
            <button href="#">Giá Cao - Thấp</button>
            <button href="#">Giá Thấp - Cao</button>
            <button href="#">Xem nhiều</button>
          </div>
        </div>
        <div className="row">
          <CardComponent></CardComponent>
        </div>
        <div className="row">
          <div className="col-8 box-news">
            <p>
              <h6>Máy tính laptop</h6>
              là thiết bị công nghệ được rất nhiều người dùng yêu thích và chọn
              lựa nhờ vào tính tiện lợi, đáp ứng tốt nhu cầu học tập, làm việc
              và giải trí của nhiều người dùng. Hiện nay, các thương hiệu máy
              tính xách tay không ngừng cải tiến sản phẩm để mang lại một dòng
              laptop mini giá rẻ mỏng nhẹ, có hiệu năng mạnh mẽ, thời lượng pin
              tốt đặc biệt là có một giá thành vô cùng hợp lý.
            </p>
            <h4>
              Laptop (máy tính xách tay) - Phục vụ công việc, học tập, giải trí
            </h4>
            <p>
              Laptop mang thiết kế sang trọng, nhỏ gọn, tiện lợi cùng cấu hình
              mạnh mẽ, hiệu năng mượt mà nhằm tạo trải nghiệm tốt. Với giá thành
              rẻ cùng nhiều ưu đãi vượt trội, máy tính xách tay trở thành sự
              chọn lựa hoàn hảo của người dùng.
            </p>
            <p>
              Ngày nay, laptop được thiết kế với nhiều tính năng, tiện ích đặc
              biệt, có thể xoay, gập và tách rời nhằm đáp ứng nhiều nhu cầu sử
              dụng khác nhau của người dùng. Bên cạnh đó, máy tính xách tay còn
              được trang bị màn hình cảm ứng giúp cho các thao tác sử dụng giống
              hệt máy tính bảng.
            </p>
          </div>
          <div className="col-4 box-news">
            <NewsComponent></NewsComponent>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShopPageComponent;
