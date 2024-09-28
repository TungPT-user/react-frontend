import "./style.css";
import { ProductContext } from "../ProductsContext";
import { useContext, useEffect, useState } from "react";
const CardComponent = ({ products }) => {
  const productCtx = useContext(ProductContext);

  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    let updatedProductsList = [];
    if (products === "laptops") {
      updatedProductsList = productCtx.laptops;
    } else if (products === "headphones") {
      updatedProductsList = productCtx.headphones;
    } else {
      updatedProductsList = productCtx.phones;
    }
    setProductsList(updatedProductsList);
  }, [products, productCtx.laptops, productCtx.headphones, productCtx.phones]);

  return (
    <div className="product-container">
      {productsList.map((product) => (
        <div className="product-card">
          <img src={product.img1} alt="" />
          <h4>{product.name}</h4>
          <div className="product-info">
            <span>{product.price}</span>
            <button>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
