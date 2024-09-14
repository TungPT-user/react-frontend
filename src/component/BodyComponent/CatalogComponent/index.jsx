import ImgCatalog1 from "../../../image/catalog.png";
import ImgCatalog2 from "../../../image/catalog (1).png";
import ImgCatalog3 from "../../../image/catalog (2).png";

const CatalogComponent = () => {
  return (
    <>
      <div className="img-catalog">
        <div className="img1">
          <img
            src={ImgCatalog1}
            style={{
              height: "115px",
              width: "255px",
              margin: "5px",
              borderRadius: "5px",
            }}
            alt=""
          />
        </div>
        <div className="img2">
          <img
            src={ImgCatalog2}
            style={{
              height: "115px",
              width: "255px",
              margin: "5px",
              borderRadius: "5px",
            }}
            alt=""
          />
        </div>
        <div className="img3">
          <img
            src={ImgCatalog3}
            style={{
              height: "115px",
              width: "255px",
              margin: "5px",
              borderRadius: "5px",
            }}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default CatalogComponent;
