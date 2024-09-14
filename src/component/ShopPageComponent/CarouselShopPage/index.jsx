import imgShoppage1 from "../../../image/carousel-shoppage (1).png";
import imgShoppage2 from "../../../image/carousel-shoppage (2).png";
import imgShoppage3 from "../../../image/carousel-shoppage (3).png";
import imgShoppage4 from "../../../image/carousel-shoppage (4).png";
import imgShoppage5 from "../../../image/carousel-shoppage (5).png";
import imgShoppage6 from "../../../image/carousel-shoppage (6).png";

const CarouselShopPage = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={imgShoppage1} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={imgShoppage2} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={imgShoppage3} alt="Third slide" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselShopPage;
