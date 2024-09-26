import "./style.css";
import { ProductContext } from "../ProductsContext";
import { useContext } from "react";
const CardComponent = (product) => {
  const { img1, name, price } = product.product;
  console.log(product);
  return (
    <div className="product-container">
      <div className="product-card">
        <img src={img1} alt="" />
        <h4>{name}</h4>
        <div className="product-info">
          <span>{price}</span>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
