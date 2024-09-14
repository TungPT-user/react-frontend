import CarouselShopPage from "./CarouselShopPage";
import HeaderComponent from "../HeaderComponent";
import CardComponent from "../CardComponent";
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
          <div className="nav-a">
            <a href="#">IPHONE 16 SERIES</a>
            <a href="#">IPHONE 15 SERIES</a>
            <a href="#">IPHONE 14 SERIES</a>
            <a href="#">IPHONE 13 SERIES</a>
            <a href="#">IPHONE 12 SERIES</a>
            <a href="#">IPHONE 11 SERIES</a>
          </div>
        </div>
        <div className="row">
          <h3>Chọn theo tiêu chí</h3>
          <a href="#">Bộ lọc</a>
          <a href="#">Sẵn sàng</a>
          <a href="#">Giá</a>
          <a href="#">Bộ nhớ trong</a>
          <a href="#">Dung lượng ram</a>
          <a href="#">Kích thước màn hình</a>
        </div>
        <div className="row">
          <h3>Sắp xếp theo</h3>
          <a href="#">Giá Cao - Thấp</a>
          <a href="#">Giá Thấp - Cao</a>
          <a href="#">Xem nhiều</a>
        </div>
        <div className="row">
          <CardComponent></CardComponent>
        </div>
      </div>
    </>
  );
};
export default ShopPageComponent;
