/* eslint-disable react/prop-types */
import { register } from "swiper/element/bundle";
register();

const ImageDetailMovie = ({ image }) => {
  return (
    <div className="w-full h-auto">
      <swiper-container
        breakpoints='{"768": {"slidesPerView": 2}, "1024": {"slidesPerView": 3}}'
        loop="true"
        // centered-slides="true"
        space-between="10"
        pagination="true"
        pagination-clickable="true"
        grab-cursor="true"
      >
        {image.slice(0, 5).map((image, i) => (
          <swiper-slide key={i}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
              alt=""
              className="w-full h-full object-center object-cover rounded-md"
            />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default ImageDetailMovie;
