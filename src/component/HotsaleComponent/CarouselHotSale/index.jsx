import { Row, Carousel } from "react-bootstrap";
import CardComponent from "../../CardComponent";
import CardLaptopsComponent from "../../CardLaptopsComonent";
import "../CarouselHotSale/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useContext } from "react";

import { ProductContext } from "../../ProductsContext";

const CarouselHotSale = () => {
  const productCtx = useContext(ProductContext);
  const products = productCtx.products;

  const [intervalDuration, setIntervalDuration] = useState(200); // Initial interval duration set to 5 seconds (5000ms)
  const [activeIndex, setActiveIndex] = useState(0); // Initial interval duration set to 5 seconds (5000ms)
  const chunkSize = 5; // Số lượng sản phẩm trong mỗi Carousel.Item
  const chunkedProducts = products.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

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
        {chunkedProducts.map((chunk, chunkIndex) => (
          <Carousel.Item
            key={chunkIndex}
            style={{ display: "flex", flexDirection: "row-reverse" }}
          >
            <CardComponent key={itemIndex} product={item} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselHotSale;
