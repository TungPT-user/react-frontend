import ImgCarousel1 from "../../../image/carousel-img1 (1).png";
import ImgCarousel2 from "../../../image/carousel-img1 (2).png";
import ImgCarousel3 from "../../../image/carousel-img1 (3).png";
import ImgCarousel4 from "../../../image/carousel-img1 (4).png";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

const CarouselComponent = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img src={ImgCarousel1} style={{ width: "100%" }} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={ImgCarousel2} style={{ width: "100%" }} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={ImgCarousel3} style={{ width: "100%" }} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={ImgCarousel4} style={{ width: "100%" }} />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselComponent;
