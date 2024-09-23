import { useContext } from "react";
import { ProductContext } from "../ProductsContext";
import { Col } from "react-bootstrap";
import "./style.css";
// /image/Mac.jpg
const CardComponent = ({ limit }) => {
  const productCtx = useContext(ProductContext);

  return (
    <>
      {productCtx.products.map((product) => (
        <Col
          xs={2}
          md={2}
          style={{ marginLeft: "25px" }}
          className="product-list d-flex justify-content-center align-items-center"
        >
          <li key={product.id} className="product-card">
            <img src={product.img1} alt="" />
            <h4>{product.name}</h4>
            <div className="product-info">
              <span>{product.price}</span>
              <button>+</button>
            </div>
          </li>
        </Col>
      ))}
    </>
  );
};

export default CardComponent;
