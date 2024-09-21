import AsideComponent from "./AsideComponent";
import CarouselComponent from "./CarouselComponent";
import CatalogComponent from "./CatalogComponent";
import PhoneComponent from "./PhoneComonent";
import CardComponent from "../CardComponent";
import BigBanner from "../../image/BigBanner.png";
import CarouselHotSale from "../HotsaleComponent/CarouselHotSale";
import "bootstrap/dist/css/bootstrap.css";
import HotSaleComponent from "../HotsaleComponent";

const BodyComponent = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <AsideComponent></AsideComponent>
          </div>
          <div className="col-6">
            <CarouselComponent></CarouselComponent>
          </div>
          <div className="col-3">
            <CatalogComponent></CatalogComponent>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="banner"
          style={{ paddingTop: "8px", borderRadius: "5px" }}
        >
          <img src={BigBanner} alt="" />
        </div>
        <br />
        <HotSaleComponent></HotSaleComponent>
        <br />
        <PhoneComponent></PhoneComponent>
      </div>
    </>
  );
};
export default BodyComponent;
