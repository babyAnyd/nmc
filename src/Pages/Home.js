import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { HomePhotoList } from "../Components/HomePhotos";
import { HomeSectionOne } from "../PagesSectionStorageList/HomePage";

export const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container">
      <div className="home">
        {HomeSectionOne.map((list, key) => {
          return (
            <div
              className="home_items mt-lg-6 mt-md-5 mt-5"
              data-aos={list.animate}
              id={key}
            >
              <img id="main_pics" src={list.homePhotoSecOne} alt={list.alt} />
            </div>
          );
        })}
      </div>
      <div className="photo-heading my-lg-6 my-5">
        <h1 className="photo-title">PHOTOS</h1>
        <h4 id="photo-joy">joyful memories</h4>
      </div>
      <div
        className="row gy-lg-3 gx-lg-3 gy-lg-3 g-2 row-cols-3  mt-lg-5"
        id="photos_home"
      >
        {HomePhotoList.map((list, key) => {
          return (
            <div className="col" data-aos="zoom-in" id={key}>
              <img className="img-fluid" src={list.homePhoto} alt={list.alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
