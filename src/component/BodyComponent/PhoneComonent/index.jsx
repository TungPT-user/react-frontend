import CardComponent from "../../CardComponent";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

const PhoneComponent = () => {
  const laptops = "Laptops";
  const phones = "Phones";
  const headPhones = "headPhones";
  return (
    <>
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
        <CardComponent products={phones} />
      </div>
      <br />
      <div className="row">
        <div className="col-4">
          <h3>Laptop</h3>
        </div>
        <div className="col-8 text">
          <a href="#">Macbook</a>
          <a href="#">Asus</a>
          <a href="#">Msi</a>
          <a href="#">Lenovo</a>
          <a href="#">HP</a>
          <a href="#">Acer</a>
          <a href="#">Dell</a>
          <a href="#">Huawei</a>
        </div>
        <div className="row">
          <CardComponent products="laptops" />
        </div>
      </div>
    </>
  );
};

export default PhoneComponent;
