import React from "react";
import "./Carusel.css";
import Button from "react-bootstrap/Button";
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

SwiperCore.use([Autoplay, Navigation, Pagination, Controller, Thumbs]);

const data = [
  {
    id: 1,
    name: "Sabanera",
    price: "550",
    image:
      "https://cultocafe.uy/wp-content/uploads/2020/03/DSC09435-600x750.jpg",
  },
  {
    id: 2,
    name: "Mamba Negra",
    price: "750",
    image:
      "https://cultocafe.uy/wp-content/uploads/2020/03/DSC09429-600x750.jpg",
  },
  {
    id: 3,
    name: "Naja",
    price: "650",
    image:
      "https://cultocafe.uy/wp-content/uploads/2020/03/DSC09428-600x750.jpg",
  },
  {
    id: 4,
    name: "Cascabel",
    price: "500",
    image:
      "https://cultocafe.uy/wp-content/uploads/2020/03/DSC09427-600x750.jpg",
  },
];

function Carusel() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div>
      <h3 className="titleCarusel text-center title mb-5">COFFEE</h3>
      <div className="carusel">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation
          // pagination={{ clickable: true }}
          //scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((product) => (
            <SwiperSlide key={product.id} className="slide">
              <div className="slide-content">
                <div className="product-image">
                  <img className="product-photo" src={product.image} alt="" />
                </div>
                <div className="carusel-details">
                  <h3 className="titleCarusel text-center">{product.name}</h3>
                  <p className="text-center" id="priceCarusel">
                    {product.price}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="d-flex justify-content-center ">
        <Button
          className="btn-lg mt-5 mb-5 px-4 py-2 button-carusel rounded-pill"
          variant="dark"
        >
          SEE ALL
        </Button>{" "}
      </div>
    </div>
  );
}

export default Carusel;
