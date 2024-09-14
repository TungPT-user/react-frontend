import CardComponent from "../../CardComponent";

import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
const PhoneComponent = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h3>Điện thoại nổi bật</h3>
          </div>
          <div className="col-8 text">
            <a href="#">apple</a>
            <a href="#">Samsung</a>
            <a href="#">Xiaomi</a>
            <a href="#">OPPO</a>
            <a href="#">vivo</a>
            <a href="#">realme</a>
            <a href="#">ASUS</a>
            <a href="#">TECNO</a>
          </div>
        </div>
        <div className="row">
          <CardComponent></CardComponent>
        </div>
      </div>
    </>
  );
};

export default PhoneComponent;
