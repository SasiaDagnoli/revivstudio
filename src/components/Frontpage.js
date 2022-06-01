import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
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
      <section className="popular-section">
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
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          centeredSlides={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="swiper swiper-frontpage"
        >
          {popularArray.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <Link to={`/produkt/${img._id}`}>
                  <img src={`/images/productimages/${img.imagename}`} alt="" />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="custom-pagination"></div>
      </section>
      <section className="upcycling-section">
        <h2>Aflever dine smykker</h2>
        <div className="image-container">
          <img
            className="customerjourney_mobile"
            src={`./images/kunderejsen_mobile.png`}
            alt=""
          />
          <img
            className="customerjourney_web"
            src={`./images/kunderejsen_web.png`}
            alt=""
          />
        </div>
      </section>
      <section className="explore-section">
        <h2>Gå på opdagelse</h2>
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
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          centeredSlides={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="swiper swiper-frontpage"
        >
          {exploreArray.map((imgExplore, index) => {
            return (
              <SwiperSlide key={index}>
                <Link to={`/produkt/${imgExplore._id}`}>
                  <img
                    src={`/images/productimages/${imgExplore.imagename}`}
                    alt=""
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
}
