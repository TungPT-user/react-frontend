import { Carousel } from "react-bootstrap";

import CardComponent from "../../CardComponent";
import "../CarouselHotSale/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
const CarouselHotSale = () => {
  return (
    <Carousel
      // Chạy mỗi 4 giây
      ride="carousel"
    >
      <CardComponent limit={5} />
    </Carousel>
  );
};

export default CarouselHotSale;
