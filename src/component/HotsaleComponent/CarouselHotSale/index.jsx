import { Row, Carousel } from "react-bootstrap";
import {
  ListCardComponent1,
  ListCardComponent2,
} from "../../ListCardComponent";
import "../CarouselHotSale/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useContext } from "react";

import { ProductContext } from "../../ProductsContext";

const CarouselHotSale = () => {
  const productCtx = useContext(ProductContext);
  const products = productCtx.products;

  const [intervalDuration, setIntervalDuration] = useState(200); // Initial interval duration set to 5 seconds (5000ms)
  const [activeIndex, setActiveIndex] = useState(0); // Initial interval duration set to 5 seconds (5000ms)

  const handleSlide = () => {
    // Set a new interval duration each time a slide occurs
    setIntervalDuration(2000); // Set the interval duration to 5 seconds
    setActiveIndex((pre) => (pre == 1 ? 0 : pre + 1));
  };

  return (
    <>
      <Carousel
        interval={intervalDuration}
        activeIndex={activeIndex}
        onSelect={handleSlide}
      >
        <Carousel.Item>
          <ListCardComponent1
            style={{ display: "flex", flexDirection: "row-reverse" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <ListCardComponent2
            style={{ display: "flex", flexDirection: "row-reverse" }}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselHotSale;
