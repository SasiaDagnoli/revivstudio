import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Swipers(props) {
  return (
    <Swiper
      products={props}
      breakpoints={{
        640: {
          width: 640,
          slidesPerView: 1,
        },
        768: {
          width: 768,
          slidesPerView: 2.1,
        },
      }}
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        el: ".custom-pagination",
        clickable: true,
      }}
      grabCursor={true}
      /* autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }} */
      loop={true}
      centeredSlides={true}
      loopFillGroupWithBlank={true}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="swiper"
    >
      <SwiperSlide>
        <img src={`./images/${props.product.imagename}`} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
