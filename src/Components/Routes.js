import { Routes, Route, useLocation } from "react-router-dom";
import { HomeNav } from "../Pages/Home";
import { AboutNav } from "../Pages/About";
import { PhotosNav } from "../Pages/Photos";
import { ListenNav } from "../Pages/ListenVideo";
import { TestimonialsNav } from "../Pages/Testimonials";
import { MembersNav } from "../Pages/Members";

export const Routed = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomeNav />} />
      <Route path="/about" element={<AboutNav />} />
      <Route path="/photos" element={<PhotosNav />} />
      <Route path="/listen" element={<ListenNav />} />
      <Route path="/testimonials" element={<TestimonialsNav />} />
      <Route path="/members" element={<MembersNav />} />
    </Routes>
  );
};
