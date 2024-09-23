import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import { ProductContext } from "../../ProductsContext";

import { useContext } from "react";

import CardComponent from "../../CardComponent";
import "../CarouselHotSale/style.css";
const CarouselHotSale = () => {
  const items = Array.from({ length: 5 }, (_, index) => index);
  return (
    <Carousel>
      <Carousel.Item>
        <Row style={{ marginLeft: "20px", marginBottom: "50px" }}>
          {/* <Col
              xs={2}
              md={2}
              style={{ marginLeft: "25px" }}
              className="custom-card d-flex justify-content-center align-items-center"
            >
              <CardComponent />
            </Col> */}

          <CardComponent />
        </Row>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHotSale;
