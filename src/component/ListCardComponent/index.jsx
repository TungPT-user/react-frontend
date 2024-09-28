import { useContext } from "react";
import { ProductContext } from "../ProductsContext";
import "./style.css";
export const ListCardComponent1 = ({ laptops }) => {
  const productCtx = useContext(ProductContext);
  const contextProducts = productCtx.laptops;

  const firstFiveProducts = contextProducts.slice(0, 5);
  return (
    <div className="product-container">
      {firstFiveProducts.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.img1} alt={product.name} />
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

export const ListCardComponent2 = ({ phones }) => {
  const productCtx = useContext(ProductContext);
  const contextProducts = productCtx.phones;

  const lastFiveProducts = contextProducts.slice(5, 10);
  return (
    <div className="product-container">
      {lastFiveProducts.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.img1} alt={product.name} />
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
