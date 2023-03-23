import { Images } from "../Components/ImagesList";

export const About = () => {
  return (
    <div className="container">
      <div className="about">
        <div>
          <img id="main_pics" src={Images.sec2x1_pics} alt="main_pics" />
        </div>
        <div className="row mt-lg-5 g-lg-0  ">
          <div className="col-lg-6 col-md-12 p-3">
            <p className="text-start" id="about-sentence">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="row g-3">
              <div className="col-6">
                <img
                  className="img-fluid"
                  src={Images.sec2x2_pics}
                  alt="sec1x13_pics"
                />
              </div>
              <div className="col-6">
                <img
                  className="img-fluid"
                  src={Images.sec2x2_pics}
                  alt="sec1x17_pics"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 p-3">
            <p className="text-start" id="about-sentence">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="row g-3">
              <div className="col-6">
                <img
                  className="img-fluid"
                  src={Images.sec2x3_pics}
                  alt="sec1x15_pics"
                />
              </div>
              <div className="col-6">
                <img
                  className="img-fluid"
                  src={Images.sec2x4_pics}
                  alt="sec1x16_pics"
                />
              </div>
            </div>
          </div>
        </div>
        <h1 className="music_title my-lg-6 my-9">MUSIC FOR ALL OCCASIONS</h1>
        <div className="row  mb-8">
          <div className="row mb-lg-10 mb-3 mx-0 p-0">
            <img src={Images.sec2x6_pics} alt="sec2x6_pics" />
          </div>
          <div className="row mb-lg-10 mb-3 mx-0 p-0">
            <img src={Images.sec2x7_pics} alt="sec2x7_pics" />
          </div>
          <div className="row mx-0 p-0">
            <img src={Images.sec2x8_pics} alt="sec2x8_pics" />
          </div>
        </div>
        <div class="master-wrapper text-start my-lg-6 my-7">
          <div class="master-item-1">
            <div className="ms-images">
              <img src={Images.sec2x9_pics} alt="sec2x9_pics" />
            </div>
          </div>
          <div class="master-item-2 ">
            <div>
              <h1 className="mb-2 px-0">Vincent Baquiro</h1>
              <p>
                A skilled programmer and a dedicated musician. With a passion
                for both technology and music, he has honed his abilities in
                both fields, using his technical expertise to enhance his
                musical performances and create innovative software solutions.
                With a strong work ethic and a commitment to excellence, Vincent
                strives to excel in both of his passions and make a meaningful
                impact in his industries.
              </p>
            </div>
          </div>
        </div>

        <div class="church-wrapper text-start">
          <div class="church-item-1 ">
            <div>
              <h1 className="mb-2 px-0">Nativity of Mary Parish</h1>
              <p>
                A skilled programmer and a dedicated musician. With a passion
                for both technology and music, he has honed his abilities in
                both fields, using his technical expertise to enhance his
                musical performances and create innovative software solutions.
                With a strong work ethic and a commitment to excellence, Vincent
                strives to excel in both of his passions and make a meaningful
                impact in his industries.
              </p>
            </div>
          </div>
          <div class="church-item-2">
            <div className="ch-images">
              <img className="" src={Images.sec2x10_pics} alt="sec2x10_pics" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
