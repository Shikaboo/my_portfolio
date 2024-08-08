import React, { useState, forwardRef } from "react";
import PublicBtn from "../common/project_btn";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import { page_imgBundle } from "../../utils/image";

const Sec7 = forwardRef(({ sec7Ref }, ref) => {
  const [swiperIndex, setSwiperIndex] = useState(0); // 페이지네이션용
  const [swiper, setSwiper] = useState(null); // 슬라이드용

  const slideDescriptions = [
    {
      title: "My First Toy Project",
      name: "Project Name 1",
      description: "해당 토이 프로젝트에 대한 간략한 설명 을 할 예정입니다 -----(만든 이유, 기능, 사용 기술 등을서술)-----"
    },
    {
      title: "My Second Toy Project",
      name: "Project Name 2",
      description: "해당 토이 프로젝트에 대한 간략한 설명 을 할 예정입니다 -----(만든 이유, 기능, 사용 기술 등을서술)-----"
    },
    {
      title: "My Third Toy Project",
      name: "Project Name 3",
      description: "해당 토이 프로젝트에 대한 간략한 설명 을 할 예정입니다 -----(만든 이유, 기능, 사용 기술 등을서술)-----"
    },
    {
      title: "My Fourth Toy Project",
      name: "Project Name 4",
      description: "해당 토이 프로젝트에 대한 간략한 설명 을 할 예정입니다 -----(만든 이유, 기능, 사용 기술 등을서술)-----"
    },
  ];

  const handlePrev = () => {
    swiper?.slidePrev();
  };

  const handleNext = () => {
    swiper?.slideNext();
  };

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
            onSlideChange={(swiper) => setSwiperIndex(swiper.activeIndex)}
            onSwiper={(swiper) => setSwiper(swiper)}
            loop={true}
          >
            {page_imgBundle.slice(0, 4).map((img, index) => (
              <SwiperSlide className="item" key={index}>
                <img src={img.src} alt={`Project ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="slide_text_set">
            <div className="text_box">
              <span className="tit_deco">{slideDescriptions[swiperIndex].title}</span>
              <span className="tit">{slideDescriptions[swiperIndex].name}</span>
              <span className="cont">{slideDescriptions[swiperIndex].description}</span>
              <div className="custom-pagination">
                {page_imgBundle.slice(0, 4).map((_, index) => (
                  <span
                    key={index}
                    className={`swiper-pagination-bullet ${index === swiperIndex ? 'swiper-pagination-bullet-active' : ''}`}
                  ></span>
                ))}
              </div>
              <PublicBtn />
              <div className="navigation-buttons">
                <button className="swiper-button-prev" onClick={handlePrev}></button>
                <button className="swiper-button-next" onClick={handleNext}></button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
});

export default Sec7;
