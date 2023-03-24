import { Images } from "../Components/ImagesList";

export const Photos = () => {
  return (
    <div className="container">
      <div className="row g-3 gy-4 ">
        <div className="col-sm-6 ">
          <img
            className="img-fluid photos-item"
            src={Images.photo1x1_pics}
            alt="photo1x1_pics"
          />
        </div>
        <div className="col-sm-6 ">
          <img
            className="img-fluid photos-item"
            src={Images.photo1x2_pics}
            alt="photo1x2_pics"
          />
        </div>
        <div className="col-sm-8 ">
          <img
            className="img-fluid photos-item "
            src={Images.photo1x3_pics}
            alt="photo1x3_pics"
          />
        </div>
        <div className="col-sm-4 ">
          <div className="row g-lg-3 g-sm-3 g-4">
            <div className="col-12">
              <img
                className="img-fluid photos-item "
                src={Images.photo1x4_pics}
                alt="photo1x4_pics"
              />
            </div>
            <div className="col">
              <img
                className="img-fluid photos-item "
                src={Images.photo1x5_pics}
                alt="photo1x5_pics"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            className="img-fluid photos-item "
            src={Images.photo1x1_pics}
            alt="photo1x6_pics"
          />
        </div>
        <div className="col-lg-6">
          <img
            className="img-fluid photos-item "
            src={Images.photo1x2_pics}
            alt="photo1x7_pics"
          />
        </div>
      </div>
    </div>
  );
};
