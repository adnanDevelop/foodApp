// Swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

function Category() {
  const content = [
    { image: "/image/category/image-1.png", title: "Pasta" },
    { image: "/image/category/image-2.png", title: "burgers" },
    { image: "/image/category/image-3.png", title: "fries" },
    { image: "/image/category/image-5.png", title: "taco" },
    { image: "/image/category/image-6.png", title: "muffin" },
    { image: "/image/category/image-7.png", title: "meat" },
    { image: "/image/category/image-8.png", title: "Momos" },
    { image: "/image/category/image-10.png", title: "donuts" },
    { image: "/image/category/image-11.png", title: "coffee" },
    { image: "/image/category/image-13.png", title: "noodle" },
    { image: "/image/category/image-14.png", title: "Pasta" },
  ];

  return (
    <main className="mx-[15px] sm:mx-0">
      <section className="p-4 overflow-hidden bg-white rounded-lg shadow-md custom_width mt-[-80px]">
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            572: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {content.map((element, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="p-3 rounded-lg bg-light-white ">
                  <img
                    src={element.image}
                    className="w-[70px] h-[65px] object-cover mx-auto"
                    alt=""
                  />
                  <h4 className="mt-1 text-lg font-medium text-center text-content-color">
                    {element.title}
                  </h4>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </main>
  );
}

export default Category;
