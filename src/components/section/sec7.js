import React, { useState, forwardRef, useEffect } from "react";
import PublicBtn from "../common/project_btn";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { toys } from "../../utils/text";

const Sec7 = forwardRef(({ sec7Ref }, ref) => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [swiper, setSwiper] = useState(null);

  const handlePrev = () => {
    swiper?.slidePrev();
  };

  const handleNext = () => {
    swiper?.slideNext();
  };

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", () => {
        setSwiperIndex(swiper.realIndex);
      });
    }
  }, [swiper]);

  return (
    <section className="sec sec7" ref={sec7Ref}>
      <article className="sec7_inner">
        <div className="sec7_tit">
          <h2>TOY PROJECT</h2>
          <span></span>
        </div>
        <div className="toy_project_slide_set">
          <Swiper
            className="slide_img_set"
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            onSwiper={(swiper) => setSwiper(swiper)}
            loop={true}
          >
            {toys.map((toy) => (
              <SwiperSlide className="item" key={toy.id}>
                <img src={toy.src} alt={toy.name} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="slide_text_set">
            <div className="text_box">
              <div className="flex tit_top">
                <span className="tit_deco">{toys[swiperIndex].title}</span>
                <span className="tit">{toys[swiperIndex].name}</span>
              </div>
              <span className="cont">{toys[swiperIndex].description}</span>
              <div className="custom-pagination">
                {toys.map((_, index) => (
                  <span
                    key={index}
                    className={`swiper-pagination-bullet ${
                      index === swiperIndex
                        ? "swiper-pagination-bullet-active"
                        : ""
                    }`}
                  ></span>
                ))}
              </div>
              <div className="navigation-buttons">
                <button
                  className="swiper-button-prev sec7_navi_btn"
                  onClick={handlePrev}
                ></button>
                <button
                  className="swiper-button-next sec7_navi_btn"
                  onClick={handleNext}
                ></button>
              </div>
              <PublicBtn
                className={"sec7_btn"}
                page_link={toys[swiperIndex].page_link}
                github_link={toys[swiperIndex].github_link}
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
});

export default Sec7;
