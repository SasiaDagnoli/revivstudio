import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
export default function Upcycling(props) {
  const exploreArray = [];
  props.products.forEach((product) => {
    if (product.explore === true) {
      exploreArray.push(product);
    }
  });
  return (
    <div>
      <section className="upcycling-first-section">
        <h1>Aflever dine smykker</h1>
        <div className="upcycling-content">
          <p>
            Réviv Studio skaber nye tidløse designs med materialer fra smykker, der ikke længere bruges. Dette kan f.eks. være fordi de er gået af mode, fordi ejeren ikke kan lide dem længere, eller fordi smykkerne er i stykker. På den måde kommer
            materialerne i cirkulation igen, og går ikke til spilde. <br /> <br /> Noget af det bedste vi kan gøre i klimaets navn indenfor smykkebranchen, er at genanvende materialer, så der ikke skal trækkes nye op af jorden. <br /> <br /> Derfor
            modtager vi hjertens gerne dine gamle smykker, og bruger materialerne til at lave nye, spændende designs. Som tak for din hjælp vil du altid modtage en rabatkode til vores webshops, der som minimum giver 10% rabat.
          </p>
          <img src={`./images/upcycling_img.jpg`} alt="" className="upcycling_img" />
        </div>
        <div className="image-container">
          <img src={`./images/kunderejsen_mobile.png`} alt="" className="customerjourney_mobile" />
          <img src={`./images/kunderejsen_web.png`} alt="" className="customerjourney_web" />
        </div>
      </section>
      <section>
        <h2>Her kan du aflevere dine smykker</h2>
        <p></p>
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
                <img src={`/images/productimages/${imgExplore.imagename}`} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
}
