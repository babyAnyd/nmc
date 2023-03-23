import { Images } from "../Components/ImagesList";
export const Home = () => {
  return (
    <div className="container">
      <div className="home">
        <div className="home_items">
          <img id="main_pics" src={Images.sec1x1_pics} alt="main_pics" />
        </div>
        <div className="home_items mt-lg-6 mt-md-3 mt-5">
          <img id="main_pics" src={Images.sec1x2_pics} alt="about_img" />
        </div>
        <div className="home_items  mt-lg-6 mt-md-3 mt-5">
          <img id="main_pics" src={Images.sec1x3_pics} alt="event_img" />
        </div>
      </div>
      <div className="photo-heading my-lg-6 my-5">
        <h1 className="photo-title">PHOTOS</h1>
        <h4 id="photo-joy">joyful memories</h4>
      </div>
      <div
        className="row gy-lg-3 gx-lg-3 gy-lg-3 g-2 row-cols-3  mt-lg-5"
        id="photos_home"
      >
        <div className="col">
          <img
            className="img-fluid"
            src={Images.sec1x9_pics}
            alt="sec1x12_pics"
          />
        </div>
        <div className="col">
          <img
            className="img-fluid"
            src={Images.sec1x10_pics}
            alt="sec1x13_pics"
          />
        </div>
        <div className="col">
          <img
            className="img-fluid"
            src={Images.sec1x11_pics}
            alt="sec1x10_pics"
          />
        </div>
        <div className="col">
          <img
            className="img-fluid"
            src={Images.sec1x12_pics}
            alt="sec1x12_pics"
          />
        </div>
        <div className="col">
          <img
            className="img-fluid"
            src={Images.sec1x13_pics}
            alt="sec1x13_pics"
          />
        </div>
        <div className="col">
          <img
            className="img-fluid"
            src={Images.sec1x14_pics}
            alt="sec1x10_pics"
          />
        </div>
      </div>
    </div>
  );
};
