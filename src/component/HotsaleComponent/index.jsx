import CarouselHotSale from "./CarouselHotSale";
import "../HotsaleComponent/style.css";
const HotSaleComponent = () => {
  return (
    <>
      <div className="box-hotsale">
        <div className="header-hotsale">
          <h3>HOT SALE CUỐI TUẦN</h3>
        </div>
        <div className="carousel-hotsale">
          <CarouselHotSale limit={5} />
        </div>
      </div>
    </>
  );
};
export default HotSaleComponent;
