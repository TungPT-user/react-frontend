import newsImg1 from "../../../image/news-img (1).jpg";
import newsImg2 from "../../../image/news-img (2).jpg";
import newsImg3 from "../../../image/news-img (3).jpg";

const NewsComponent = () => {
  return (
    <>
      <div className="div-new">
        <h3>Tin tức về sản phẩm</h3>
        <div className="row">
          <div className="col-4">
            <img
              src={newsImg1}
              alt=""
              style={{ width: "120px", height: "70px", borderRadius: "5px" }}
            />
          </div>
          <div className="col-8">
            <p>
              Đánh giá ASUS Expertbook B1 2023: Bảo mật cao, bền bỉ cho cả sinh
              viên và văn phòng, giá chưa đến 15 triệu
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img
              src={newsImg2}
              style={{ width: "120px", height: "70px", borderRadius: "5px" }}
              alt=""
            />
          </div>
          <div className="col-8">
            <p>
              Đây chính là 4 laptop Intel Core Ultra: Màn hình đỉnh, pin bền bỉ
              suốt 15 tiếng, giá từ 20 triệu
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img
              src={newsImg3}
              style={{ width: "120px", height: "70px", borderRadius: "5px" }}
              alt=""
            />
          </div>
          <div className="col-8">
            <p>
              Đánh giá MSI Raider 18 HX: 1 năm trôi qua, vẫn đánh bại mọi tựa
              game max setting 4K, Ngộ Không không ngoại lệ!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsComponent;
