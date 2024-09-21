import HeaderComponent from "./component/HeaderComponent";
import HomePageComponent from "./component/HomePageComponent";
import BodyComponent from "./component/BodyComponent";
import FooterComponent from "./component/FooterComponent";
import ShopPageComponent from "./component/ShopPageComponent";
import LoginComponent from "./component/LoginComponent";
import RegisterComponent from "./component/RegisterComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductContextProvider from "./component/ProductsContext";
function App() {
  return (
    <>
      <ProductContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePageComponent />} />
            <Route path="/home" element={<HomePageComponent />} />
            <Route path="/Shop" element={<ShopPageComponent />} />
          </Routes>
        </Router>
      </ProductContextProvider>
    </>
  );
}

export default App;
