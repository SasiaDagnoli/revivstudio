import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function About(props) {
  const exploreArray = [];
  props.products.forEach((product) => {
    if (product.explore === true) {
      exploreArray.push(product);
    }
  });
  return (
    <>
      <section className="about-section">
        <h1>Om Os</h1>
        <div className="about-content">
          <p>
            Réviv Studio opstod i 2020 ud fra en idé om at indsamle gamle
            smykker og give dem nyt liv gennem redesign. Réviv Studios smykker
            er håndlavet i Danmark, og produceres af en blanding af nye og
            genbrugte materialer. Smykkerne er derfor helt unikke, og der findes
            kun én af hver slags. <br /> <br /> Bag virksomheden står jeg,
            Sarah, der har en bachelor i Smykker, Teknologi og Business fra KEA.
            Jeg har suppleret min uddannelse med diverse kurser, bl.a et år på
            kunsthøjskolen Engelsholm. Jeg brænder for at skabe smykker, der
            fortæller en unik historie, og som skal kunne bæres i mange år. Min
            største drøm er at lykkes med dette, og samtidigt skabe den mest
            bæredygtige produktion. <br /> <br /> Du kan høre mere om Réviv
            Studio i videoen.
          </p>
          <iframe
            src="https://www.youtube.com/embed/uu9MeCn2ECw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <section>
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
    </>
  );
}
