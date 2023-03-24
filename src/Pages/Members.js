import { Images } from "../Components/ImagesList";

export const Members = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-lg-2 row-cols-md-1">
        <div className="col">
          <div className="members p-3">
            <img
              className="img-fluid"
              src={Images.members1x1_pics}
              alt="members1x1_pics"
            />
            <div className="members-caption">
              <h3 className="my-7">MAESTRO VINCENT BAQUIRO</h3>
              <p>
                A devoted servant of the church, having dedicated 10 years of
                his life to serving the Lord. In addition to his spiritual
                calling, he is also a talented musician and programmer, using
                his skills to further his mission and spread the Word of God.
                Through his unwavering commitment and passion, Vincent is a
                shining example of faith in action.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="members p-3">
            <div className="members-caption ">
              <h3 className="mb-3">NATIVITY OF MARY CHORALE</h3>
              <p>
                A devoted servant of the church, having dedicated 10 years of
                his life to serving the Lord. In addition to his spiritual
                calling, he is also a talented musician and programmer, using
                his skills to further his mission and spread the Word of God.
                Through his unwavering commitment and passion, Vincent is a
                shining example of faith in action.
              </p>
            </div>
            <img
              className="img-fluid mt-3"
              src={Images.members1x2_pics}
              alt="members1x2_pics"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
