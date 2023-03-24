import { Images } from "../Components/ImagesList";
import { TestimonialList } from "../Components/TestimonialList";
export const Testimonials = () => {
  return (
    <div className="container">
      <div
        className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4"
        id="testimonial-items"
      >
        {TestimonialList.map((list) => {
          return (
            <>
              <div className="col  " id="testimonial-list">
                <div className="testimonials rounded-4 p-4 h-100">
                  <div className="img-container">
                    <img src={list.profImg} />
                  </div>
                  <div className="prof-caption ">
                    <h5 className="mt-4 mb-0">{list.name}</h5>
                    <h4 className="p-0">{list.position}</h4>
                    <p className="text-start">{list.caption}</p>
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
