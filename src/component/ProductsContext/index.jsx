import { createContext, useEffect, useState } from "react";
import useFetch from "../Hook-data";
import { getProducts } from "../Services";
import Loading from "../UI/UX/Loading";
// Context
export const ProductContext = createContext();

// Provider
export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  // Thêm sửa xóa
  // Nên extend thằng useState -> useReducer
  // bản chất: chỉ gọi 1 api để fetch data -> lấy về cho products
  const { isLoading, data, message, error } = useFetch(getProducts, []);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  // List products
  // Lấy thông qua api

  // products: mảng product
  const value = {
    products: products,
  };

  // Truyền global state vào
  return (
    <ProductContext.Provider value={value}>
      {!isLoading && <div>{<Loading />}</div>}
      {children}
    </ProductContext.Provider>
  );
}
