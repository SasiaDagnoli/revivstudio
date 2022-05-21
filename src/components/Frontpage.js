import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

export default function Frontpage(props) {
  const popularArray = [];
  props.products.forEach((product) => {
    if (product.popular === true) {
      popularArray.push(product);
    }
  });

  const exploreArray = [];
  props.products.forEach((product) => {
    if (product.explore === true) {
      exploreArray.push(product);
    }
  });
  return (
    <div>
      <section id="first-section">
        {/* <img
          src={`./images/placeholder_background.jpg`}
          alt=""
          className="background-image"
        /> */}
        <Link to="/shop">
          <button>Shop Nu</button>
        </Link>
      </section>
      <section>
        <h1>Populære produkter</h1>
        <Swiper
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
          {popularArray.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={`/images/${img.imagename}`} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="custom-pagination"></div>
      </section>
      <section>
        <h1>Aflever dine smykker</h1>
        <img
          className="customerjourney"
          src={`./images/kunderejse.png`}
          alt=""
        />
      </section>
      <section>
        <h1>Gå på opdagelse</h1>
        <Swiper
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
          loop={true}
          centeredSlides={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="swiper"
        >
          {exploreArray.map((imgExplore, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={`/images/${imgExplore.imagename}`} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
}
