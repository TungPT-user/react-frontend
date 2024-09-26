import { ProductContext } from "../ProductsContext";
import { useContext } from "react";
import "./style.css";
const CardLaptopsComponent = () => {
  const productCtx = useContext(ProductContext);
  const products = productCtx.products.slice(0, 5);

  return (
    <>
      {products.map((product, index) => (
        <div key={index} className="product-list">
          <div className="product-card">
            <img src={product.img1} alt="" />
            <h4>{product.name}</h4>
            <div className="product-info">
              <span>{product.price}</span>
              <button>+</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardLaptopsComponent;
