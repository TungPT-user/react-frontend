import AsideComponent from "./AsideComponent";
import CarouselComponent from "./CarouselComponent";
import CatalogComponent from "./CatalogComponent";
import PhoneComponent from "./PhoneComonent";
import CardComponent from "../CardComponent";
import BigBanner from "../../image/BigBanner.png";
import "bootstrap/dist/css/bootstrap.css";

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
        <PhoneComponent></PhoneComponent>
      </div>
    </>
  );
};
export default BodyComponent;
