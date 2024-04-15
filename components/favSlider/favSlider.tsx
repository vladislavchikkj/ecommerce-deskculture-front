"use client";

import { Product } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import NoResults from "../ui/no-results";

import { Autoplay, Navigation } from "swiper/modules";
import SearchFeauted from "../search/searchFeauted";

// import required modules

interface ProductListProps {
  title: string;
  items: Product[];
}

const FavSlider: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <>
      <div className="space-y-4 pt-15">
        <h3 className="font-bold text-4xl uppercase pt-10 pb-10">{title}</h3>
        {items.length === 0 && <NoResults />}
        <Swiper
          style={{
            //@ts-ignore
            "--swiper-navigation-color": "#000",
          }}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper">
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <SearchFeauted key={item.id} data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default FavSlider;
