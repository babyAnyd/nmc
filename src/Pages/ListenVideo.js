import ReactPlayer from "react-player";
import { VideoPlayer } from "../Components/ListenVideo";
export const Listen = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-lg-3 g-4 ">
        {VideoPlayer.map((list) => {
          return (
            <>
              <div className="col">
                <div class="card">
                  <div className="ratio ratio-4x3">
                    <iframe
                      src={list.url}
                      frameborder="0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                  <div className="card-body text-start">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

// <iframe
//   src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FIamNMC%2Fvideos%2F516896916899377%2F&show_text=false&width=476&t=0"
//   width="476"
//   height="476"
//   style="border:none;overflow:hidden"
//   scrolling="no"
//   frameborder="0"
//   allowfullscreen="true"
//   allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
//   allowFullScreen="true"
// ></iframe>;
