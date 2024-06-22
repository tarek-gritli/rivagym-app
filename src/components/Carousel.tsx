import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Slider from "react-slick";
import { carouselItems } from "../data";

const Carousel = () => {
  const [settings] = useState({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
  });
  return (
    <div className="p-5 bg-primary-100">
      <h2 className="mb-10 font-montserrat">Our athletes are in:</h2>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            <img className="w-[200px] h-full" src={item.image} alt={item.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
