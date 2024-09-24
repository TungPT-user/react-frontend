import { createContext, useEffect, useState } from "react";
import useFetch from "../Hook-data";
import { getPhones, getLaptops } from "../Services";
import Loading from "../UI/UX/Loading";
// Context
export const ProductContext = createContext();

// Provider
export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]); // laptop
  const [productsPhone, setProductsPhone] = useState([]); // phone

  // Thêm sửa xóa
  // Nên extend thằng useState -> useReducer
  // bản chất: chỉ gọi 1 api để fetch data -> lấy về cho products
  const { isLoading: phonesLoading, data: phonesData } = useFetch(
    getPhones,
    []
  );
  const { isLoading: laptopsLoading, data: laptopsData } = useFetch(
    getLaptops,
    []
  );

  useEffect(() => {
    // laptopsData.size > 0
    setProductsPhone([...phonesData]);
    setProducts([...laptopsData]);
  }, [phonesData, laptopsData]);

  const value = {
    products: products,
    phones: productsPhone,
  };

  // List products
  // Lấy thông qua api

  // products: mảng product

  // Truyền global state vào
  return (
    <ProductContext.Provider value={value}>
      {!laptopsLoading && <div>{<Loading />}</div>}
      {children}
    </ProductContext.Provider>
  );
}
