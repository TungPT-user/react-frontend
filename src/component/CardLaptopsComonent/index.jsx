import { useContext } from "react";
import { ProductContext } from "../ProductsContext";
import { Col, Row, Carousel } from "react-bootstrap";
import "./style.css";
// /image/Mac.jpg
const CardLaptopsComponent = ({ limit }) => {
  const productCtx = useContext(ProductContext);

  const products = [...productCtx.products];
  let productsToShow = [];
  if (limit > 0) {
    productsToShow = products.slice(0, limit);
  }

  const chunkSize = 5;
  const productChunks = [];

  for (let i = 0; i < productsToShow.length; i += chunkSize) {
    productChunks.push(productsToShow.slice(i, i + chunkSize));
  }
  return (
    <>
      {productChunks.map((chunk, index) => (
        <Row key={index} style={{ marginLeft: "20px", marginBottom: "50px" }}>
          {chunk.map((product) => (
            <Col
              xs={2}
              md={2}
              style={{ marginLeft: "25px" }}
              className="product-list d-flex justify-content-center align-items-center"
              key={product.id}
            >
              <li className="product-card">
                <img src={product.img1} alt="" />
                <h4>{product.name}</h4>
                <div className="product-info">
                  <span>{product.price}</span>
                  <button>+</button>
                </div>
              </li>
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
};

export default CardLaptopsComponent;
