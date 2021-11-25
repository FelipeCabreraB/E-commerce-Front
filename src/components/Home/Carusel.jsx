import React from "react";
import "./Carusel.css";
import { Button, Spinner } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Controller,
  Thumbs,
} from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

SwiperCore.use([Autoplay, Navigation, Pagination, Controller, Thumbs]);

function Carusel() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const getFeaturedProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL_BACKEND}/featured/products`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        setFeaturedProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFeaturedProducts();
  }, []);

  return (
    <div>
      <h3 className="titleCarusel text-center title mb-5">COFFEE</h3>

      {featuredProducts.length < 1 ? (
        <div className="w-100 text-center">
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
        <div className="carusel">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            breakpoints={{
              1084: {
                slidesPerView: 3,
              },
              600: {
                slidesPerView: 2,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {featuredProducts.map((product) => (
              <SwiperSlide key={product.id} className="slide">
                <div className="slide-content">
                  <div className="product-image">
                    <img
                      className="product-photo"
                      src={
                        "https://hxxxiarcaeviegtlscdm.supabase.in/storage/v1/object/public/culto-coffee-img/" +
                        product.picture
                      }
                      alt=""
                    />
                  </div>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/product/${product.categoryId}/${product.productName}`}
                  >
                    <div className="carusel-details">
                      <h3 className="titleCarusel text-center">
                        {product.productName}
                      </h3>
                      <p className="text-center" id="priceCarusel">
                        $ {product.price}
                      </p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      <div className="d-flex justify-content-center ">
        <Link to="/coffee">
          <Button
            className="btn-lg mt-5 mb-5 px-4 py-2 button-carusel rounded-pill"
            variant="dark"
          >
            SEE ALL
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Carusel;
