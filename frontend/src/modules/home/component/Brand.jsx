import { useRef } from "react";

// Components
import SectionHeader from "../../../components/global/SectionHeader";

// Icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Brand = () => {
  const sectionTitle = {
    title: "Brand For You",
    content: "Browse out top brands here to discover different food cuision.",
  };

  const swiperRef = useRef(null);
  const swiper = useSwiper();

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const content = [
    { img: "/image/brand/img-1.png", title: "Mc'd" },
    { img: "/image/brand/img-2.png", title: "Starbucks" },
    { img: "/image/brand/img-3.png", title: "Pizza Hut" },
    { img: "/image/brand/img-4.png", title: "Wendy's" },
    { img: "/image/brand/img-5.png", title: "Burger King" },
    { img: "/image/brand/img-6.png", title: "Subway" },
    { img: "/image/brand/img-7.png", title: "Domino's" },
    { img: "/image/brand/img-8.png", title: "Teco Bell" },
    { img: "/image/brand/img-1.png", title: "Mc'd" },
    { img: "/image/brand/img-2.png", title: "Starbucks" },
    { img: "/image/brand/img-3.png", title: "Pizza Hut" },
    { img: "/image/brand/img-4.png", title: "Wendy's" },
    { img: "/image/brand/img-5.png", title: "Burger King" },
    { img: "/image/brand/img-6.png", title: "Subway" },
  ];

  return (
    <main className="custom_width section_padding">
      <section className="flex items-center justify-between">
        <SectionHeader
          title={sectionTitle.title}
          content={sectionTitle.content}
        />
        <div
          className="flex items-center gap-2 slider_btn"
          data-aos="zoom-out"
          data-aos-duration="1500"
        >
          <button
            onClick={handlePrevClick}
            className="sm:w-[40px] w-[35px] sm:h-[40px] h-[35px] rounded-full flex items-center justify-center shadow-md border border-gray-600 bg-white text-gray-600 transition duration-300 focus:bg-yellow hover:bg-yellow hover:text-white focus:text-white hover:border-yellow focus:border-yellow sm:text[20px] text-sm "
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNextClick}
            className="sm:w-[40px] w-[35px] sm:h-[40px] h-[35px] rounded-full flex items-center justify-center shadow-md border border-gray-600 bg-white text-gray-600 transition duration-300 focus:bg-yellow hover:bg-yellow hover:text-white focus:text-white hover:border-yellow focus:border-yellow sm:text[20px] text-sm "
          >
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* Card Section */}
      <section className="mt-[40px]">
        <Swiper
          ref={swiperRef}
          slidesPerView={8}
          spaceBetween={15}
          loop={true}
          grabCursor={true}
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            572: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {content?.map((element, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center border-r pe-4 border-r-gray-200">
                  <img
                    src={element.img}
                    className="rounded-lg w-[100px]"
                    alt=""
                  />
                  <p className="mt-2 font-medium">{element.title}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </main>
  );
};

export default Brand;
