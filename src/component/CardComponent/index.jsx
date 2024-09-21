import { useContext } from "react";
import { ProductContext } from "../ProductsContext";
import { Link } from "react-router-dom";
import "./style.css";
// /image/Mac.jpg
const CardComponent = () => {
  const productCtx = useContext(ProductContext);
  console.log(productCtx);

  return (
    <>
      <ul>
        {productCtx.products.map((product) => (
          <li>
            {productCtx.products.map((product) => (
              <div class="product-card">
                <img src={product.img1} alt="" />
                <h4>{product.name}</h4>
                <div>
                  <span>{product.price}</span>
                  <button>+</button>
                </div>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CardComponent;
