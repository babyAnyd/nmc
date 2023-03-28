import { VideoPlayer } from "../Components/ListenVideo";
export const ListenNav = () => {
  return (
    <div className="container">
      <div
        id="videos"
        className="row row-cols-1 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 g-4 "
      >
        {VideoPlayer.map((list) => {
          return (
            <>
              <div className="col">
                <div className="embed-responsive embed-responsive-21by9">
                  <iframe
                    title={list.title}
                    width="100%"
                    height="250"
                    class="embed-responsive-item"
                    src={list.url}
                    frameborder="0"
                    allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <p className="pt-2">{list.title}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
