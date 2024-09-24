import { useContext } from "react";
import { ProductContext } from "../ProductsContext";
import { Col, Row, Carousel } from "react-bootstrap";
import "./style.css";
// /image/Mac.jpg
const CardComponent = ({ limit }) => {
  const productCtx = useContext(ProductContext);

  console.log(productCtx);

  const products = [...productCtx.phones];
  let productsToShow = [];

  if (limit > 0) {
    productsToShow = products.slice(0, limit);
  }

  const chunkSize = 5;
  let productChunks = [];

  for (let i = 0; i < productsToShow.length; i += chunkSize) {
    productChunks.push(productsToShow.slice(i, i + chunkSize));
  }

  console.log(11, productsToShow);
  return (
    <>
      <Carousel.Item className={"active"} interval={2000}>
        <div>ABCC1312312AAAAAAAAAAAAAAAAA</div>
      </Carousel.Item>{" "}
      <Carousel.Item className={"active"} interval={2000}>
        <div>ABCC1312312BBBBBBBBBBBBBBBBB</div>
      </Carousel.Item>{" "}
      <Carousel.Item className={"active"} interval={2000}>
        <div>ABCC1312312</div>
      </Carousel.Item>
    </>
    // {productChunks.map((chunk, index) => (
    //   <div>
    //     <Carousel.Item className={index == 0 ? "active" : ""} interval={2000}>
    //       <div>ABCCC</div>
    //       {/* <Row key={index} style={{ marginLeft: "20px", marginBottom: "50px" }}>
    //       {chunk.map((product) => (
    //         <Col
    //           xs={2}
    //           md={2}
    //           style={{ marginLeft: "25px" }}
    //           className="product-list d-flex justify-content-center align-items-center"
    //           key={product.id}
    //         >
    //           <li className="product-card">
    //             <img src={product.img1} alt="" />
    //             <h4>{product.name}</h4>
    //             <div className="product-info">
    //               <span>{product.price} 1231232123</span>
    //               <button>+</button>
    //             </div>
    //           </li>
    //         </Col>
    //       ))}
    //     </Row> */}
    //     </Carousel.Item>
    //     <Carousel.Item className={index == 0 ? "active" : ""} interval={2000}>
    //       <div>ABCC1312312</div>
    //     </Carousel.Item>
    //   </div>
    // ))}
  );
};

export default CardComponent;
