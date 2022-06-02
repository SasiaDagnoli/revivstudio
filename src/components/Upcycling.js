import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";
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
        <h1 className="left">Aflever dine smykker</h1>
        <div className="upcycling-content">
          <p>
            Réviv Studio skaber nye tidløse designs med materialer fra smykker,
            der ikke længere bruges. Dette kan f.eks. være fordi de er gået af
            mode, fordi ejeren ikke kan lide dem længere, eller fordi smykkerne
            er i stykker. På den måde kommer materialerne i cirkulation igen, og
            går ikke til spilde. <br /> <br /> Noget af det bedste vi kan gøre i
            klimaets navn indenfor smykkebranchen, er at genanvende materialer,
            så der ikke skal trækkes nye op af jorden. <br /> <br /> Derfor
            modtager vi hjertens gerne dine gamle smykker, og bruger
            materialerne til at lave nye, spændende designs. Som tak for din
            hjælp vil du altid modtage en rabatkode til vores webshops, der som
            minimum giver 10% rabat.
          </p>
          <img
            src={`./images/upcycling_img.jpg`}
            alt=""
            className="upcycling_img"
          />
        </div>
        <div className="image-container">
          <img
            src={`./images/kunderejsen_mobile.png`}
            alt=""
            className="customerjourney_mobile"
          />
          <img
            src={`./images/kunderejsen_web.png`}
            alt=""
            className="customerjourney_web"
          />
        </div>
      </section>
      <section className="sendjewellery-section">
        <h2>Her kan du aflevere dine smykker</h2>
        <div>
          <input
            type="checkbox"
            id="copenhagenAccordion"
            className="dropDown_btn_adress"
          />
          <label
            htmlFor="copenhagenAccordion"
            className="dropDown_label_address"
          >
            <p>Sjælland</p>
          </label>
          <div className="addresslist">
            <div>
              <p>
                <strong>Det Kollektive Klædeskab</strong>
              </p>
              <p>
                Egilsgade 34 <br /> 2300 København S
              </p>
              <p>
                Peter Fabers Gade 42 <br /> 2200 København N
              </p>
              <p>
                Estlandsgade 20 <br /> 1724 København V
              </p>
              <p>
                Karen Olsdatter Stræde 4A <br /> 4000 Roskilde
              </p>
              <p>
                Østergade 8b, st. th <br /> 4180 Sorø
              </p>
            </div>
            <div>
              <p>
                <strong>Nærmere Dig - Din Helsekost</strong>
              </p>
              <p>
                Islands Brygge 25 <br /> 2300 København S
              </p>
              <p>
                <strong>Muttilove</strong>
              </p>
              <p>
                Birkegade 9 <br /> 2200 København N
              </p>
              <p>
                <strong>Green Living</strong>
              </p>
              <p>
                Nørrebrogade 218 <br /> 2200 København N
              </p>
            </div>
            <div>
              <p>
                <strong>Wøn</strong>
              </p>
              <p>
                Frederiksberg Allé 37 <br /> 1820 Frederiksberg
              </p>
              <p>
                <strong>LØS Market</strong>
              </p>
              <p>
                Nordre Frihavnsgade 21 <br /> 2100 København Ø
              </p>
              <p>
                <strong>Tapirus Secondhand</strong>
              </p>
              <p>
                Amagerbrogade 48 <br /> 2300 København S
              </p>
            </div>
          </div>
        </div>
        <div>
          <input
            type="checkbox"
            id="fynAccordion"
            className="dropDown_btn_adress"
          />
          <label htmlFor="fynAccordion" className="dropDown_label_address">
            <p>Fyn</p>
          </label>
          <div className="addresslist">
            <div>
              <p>
                <strong>Det Kollektive Klædeskab</strong>
              </p>
              <p>
                Nedergade 26 <br /> 5000 Odense
              </p>
              <p>
                Korsgade 12 <br /> 5700 Svendborg
              </p>
            </div>
          </div>
        </div>
        <div>
          <input
            type="checkbox"
            id="jyllandAccordion"
            className="dropDown_btn_adress"
          />
          <label htmlFor="jyllandAccordion" className="dropDown_label_address">
            <p>Jylland</p>
          </label>
          <div className="addresslist">
            <div>
              <p>
                <strong>Det Kollektive Klædeskab</strong>
              </p>
              <p>
                Vestergade 58T <br /> 8000 Aarhus
              </p>
            </div>
          </div>
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
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
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
