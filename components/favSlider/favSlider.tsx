"use client";

import { Product } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../search/searchFeauted";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import NoResults from "../ui/no-results";

import { Navigation } from "swiper/modules";

// import required modules

interface ProductListProps {
  title: string;
  items: Product[];
}

const FavSlider: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <>
      <div className="space-y-4 pt-15">
        <h3 className="font-bold text-4xl uppercase pb-5">{title}</h3>
        {items.length === 0 && <NoResults />}
        <Swiper
          style={{
            //@ts-ignore
            "--swiper-navigation-color": "#000",
          }}
          slidesPerView={1}
          spaceBetween={10}
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
          modules={[Navigation]}
          className="mySwiper">
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard key={item.id} data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default FavSlider;
