import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { createSearchParams, useNavigate } from "react-router-dom";

const CarouselCategory = () => {
  const navigate = useNavigate();
  const searchCategory = (category) => {
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: ``,
      })}`,
    });
  };
  return (
    <div className="bg-white m-3 ">
      <div className="text-2xl font-semibold p-3">Shop by Category</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <img src={"../images/category_0.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/category_1.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/category_2.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/category_3.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/category_4.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Mobiles")}
          className="cursor-pointer"
        >
          <img src={"../images/category_5.jpg"} alt="Mobiles category" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselCategory;
