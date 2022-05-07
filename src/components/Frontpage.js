import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function Frontpage() {
  return (
    <div>
      <section>
        <img
          src={`./images/placeholder_background.jpg`}
          alt=""
          className="background-image"
        />
      </section>
      <section>
        <h1>Populære produkter</h1>
        <Swiper
          slidesPerView={3.8}
          spaceBetween={30}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="swiper"
        >
          <SwiperSlide>
            <img src={`./images/placeholder_products.jpg`} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`./images/placeholder_products.jpg`} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`./images/placeholder_products.jpg`} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`./images/placeholder_products.jpg`} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`./images/placeholder_products.jpg`} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`./images/placeholder_products.jpg`} alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="custom-pagination"></div>
      </section>
      <section>
        <h1>Aflever dine smykker</h1>
      </section>
    </div>
  );
}
