import SectionHeader from "../../../components/global/SectionHeader";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const Deal = () => {
  const sectionTitle = {
    title: "Today's deal",
    content: "Take benefit from our latest offers",
  };

  const content = [
    "/image/deal/img-1.jpg",
    "/image/deal/img-2.jpg",
    "/image/deal/img-3.jpg",
    "/image/deal/img-4.jpg",
    "/image/deal/img-5.jpg",
    "/image/deal/img-1.jpg",
    "/image/deal/img-2.jpg",
    "/image/deal/img-3.jpg",
  ];

  return (
    <main className="section_padding custom_width">
      {/* Header Section */}
      <SectionHeader
        title={sectionTitle.title}
        content={sectionTitle.content}
      />

      {/* Card Section */}
      <section className="mt-[40px]">
        <Swiper
          slidesPerView={5}
          spaceBetween={15}
          loop={true}
          grabCursor={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            572: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 5,
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
          {content?.map((element, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
                  <img src={element} className="rounded-lg" alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </main>
  );
};

export default Deal;
