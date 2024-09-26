import ImgCarousel1 from "../../../image/carousel-img1 (1).png";
import ImgCarousel2 from "../../../image/carousel-img1 (2).png";
import ImgCarousel3 from "../../../image/carousel-img1 (3).png";
import ImgCarousel4 from "../../../image/carousel-img1 (4).png";

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

const CarouselComponent = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div
          className="carousel-inner"
          style={{ margin: "5px", marginRight: "35px" }}
        >
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={ImgCarousel1}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={ImgCarousel2}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={ImgCarousel3}
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={ImgCarousel4}
              alt="Four slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </a>
      </div>
    </>
  );
};

export default CarouselComponent;
