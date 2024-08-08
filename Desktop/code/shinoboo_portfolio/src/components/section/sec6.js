import React, { useState, forwardRef } from "react";
import PublicBtn from "../common/project_btn";
import { clones } from "../../utils/text";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Sec6 = forwardRef(({ sec6Ref }, ref) => {
  const [swiperIndex, setSwiperIndex] = useState(0); // 페이지네이션용
  const [swiper, setSwiper] = useState(null); // 슬라이드용

  const handlePrev = () => {
    swiper?.slidePrev();
  };

  const handleNext = () => {
    swiper?.slideNext();
  };

  return (
    <section className="sec sec6" ref={sec6Ref}>
      <article>
        <div className="sec6_tit">
          <h2>WEB CLONE</h2>
          <span></span>
        </div>
        <div className="clone_mockUp_wrap">
          <Swiper
            className="sec6_swiper"
            onSwiper={(swiper) => setSwiper(swiper)}
            onActiveIndexChange={(swiper) => setSwiperIndex(swiper.realIndex)}
            modules={[Navigation, Pagination]}
            slidesPerView={3}
            spaceBetween={10}
            breakpoints={
              {
                1280 : {
                  slidesPerView : 2
                },
                800 : {
                  slidesPerView : 1
                }
              }
            }
            pagination={{ clickable: true }}
            loop={true}
          >
            {clones.map((clone) => (
              <SwiperSlide key={clone.id}>
                <figure className="slide_cont">
                  <img className="project_img" src={clone.src} alt={clone.title} />
                  <figcaption className="slide_txt">
                    <h4>{clone.title}</h4>
                    <p>
                      {clone.description.split("\n").map((line, idx) => (
                        <React.Fragment key={idx}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                    <PublicBtn page_link={clone.page_link} github_link={clone.github_link} />
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="navigation-buttons">
            <button className="swiper-button-prev" onClick={handlePrev}></button>
            <div className="pagination" />
            <button className="swiper-button-next" onClick={handleNext}></button>
          </div>
        </div>
      </article>
    </section>
  );
});

export default Sec6;
