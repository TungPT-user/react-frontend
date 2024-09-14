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
        class="carousel slide"
        data-ride="carousel"
      >
        <div
          class="carousel-inner"
          style={{ margin: "5px", marginRight: "35px" }}
        >
          <div class="carousel-item active">
            <img class="d-block w-100" src={ImgCarousel1} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={ImgCarousel2} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={ImgCarousel3} alt="Third slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={ImgCarousel4} alt="Four slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </>
  );
};

export default CarouselComponent;
