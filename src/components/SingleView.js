import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AddToBasket from "./AddToBasket";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function SingleView({ basket, setBasket }) {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    async function getProduct() {
      const res = await fetch(
        `https://revivstudio-8a0a.restdb.io/rest/shop/${params.id}`,
        {
          headers: {
            "cache-control": "no-cache",
            "x-apikey": "62741849e8128861fcf3d098",
          },
        }
      );

      const json = await res.json();

      setProduct(json);
    }
    getProduct();
  }, [params.id]);

  return (
    <div className="product">
      {product ? (
        <div className="productimage-text">
          <section className="single-section">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={1}
              navigation={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img
                  src={`/images/productimages/${product.imagename}`}
                  alt={product.productname}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`/images/productimages/${product.firstproductimagename}`}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`/images/productimages/${product.secondproductimagename}`}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`/images/productimages/${product.thirdproductimagename}`}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src={`/images/productimages/${product.imagename}`}
                  alt={product.productname}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`/images/productimages/${product.firstproductimagename}`}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`/images/productimages/${product.secondproductimagename}`}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`/images/productimages/${product.thirdproductimagename}`}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </section>
          <div>
            <h1>{product.productname}</h1>
            <h2>Normalpris {product.price} KR.</h2>
            <p>Inklusiv moms. Levering beregnes ved betaling.</p>
            <AddToBasket
              product={product}
              basket={basket}
              setBasket={setBasket}
            />
            <p className="pick-up-text">
              ✓ Afhentning er tilgængelig fra Holmbladsgade 107. <br />{" "}
              <strong>Normalt klar inden for 24 timer.</strong>
            </p>
            <p>{product.productdescription}</p>
          </div>
        </div>
      ) : (
        <section>
          <h1>Loading...</h1>
        </section>
      )}
    </div>
  );
}
