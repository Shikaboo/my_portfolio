import React, { useState, useEffect, useRef, forwardRef } from "react";
import { imgBundle3 } from "../../utils/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Circles = forwardRef(({ sec3Ref }, ref) => {
  const circleRefs = useRef([]);
  const circleRefs2 = useRef([]);
  const sectionRef = useRef(null);

  const [clickedCircles, setClickedCircles] = useState(Array(10).fill(false));

  const clientCircles = Array.from({ length: 5 }, (_, index) => (
    <span className={`client_circle top left client0${index + 1}`} key={index}>
      <span
        className="circle_item"
        ref={(el) => (circleRefs.current[index] = el)}>
        <span className="circle" onClick={() => handleCircleClick(index)}>
          <img src={imgBundle3[index].src} />
          <span className="screen_out">{imgBundle3[index].cont}</span>
          <span className="progress hide">{imgBundle3[index].progress}</span>
        </span>
      </span>
    </span>
  ));

  const clientCircles2 = Array.from({ length: 5 }, (_, index) => (
    <span
      className={`client_circle top left client0${index + 6}`}
      key={index + 6}>
      <span
        className="circle_item"
        ref={(el) => (circleRefs2.current[index] = el)}>
        <span className="circle" onClick={() => handleCircleClick(index + 5)}>
          <img src={imgBundle3[index + 5].src} />
          <span className="screen_out">{imgBundle3[index + 5].cont}</span>
          <span className="progress hide">{imgBundle3[index + 5].progress}</span>
        </span>
      </span>
    </span>
  ));

  const handleCircleClick = (index) => {
    const newClickedCircles = [...clickedCircles];
    newClickedCircles[index] = !newClickedCircles[index];
    setClickedCircles(newClickedCircles);

    let circleRef;
    if (index < 5) {
      circleRef = circleRefs.current[index];
    } else {
      circleRef = circleRefs2.current[index - 5];
    }

    if (newClickedCircles[index]) {
      gsap.to(circleRef, { rotationY: 180, duration: 0.3 });
      const img = circleRef.querySelector("img");
      const screenOutSpan = circleRef.querySelector(".screen_out");
      const progressSpan = circleRef.querySelector(".progress");
      img.classList.add("hide");
      progressSpan.classList.remove("hide");
      screenOutSpan.classList.add("hide");
    } else {
      gsap.to(circleRef, { rotationY: 0, duration: 0.3 });
      const img = circleRef.querySelector("img");
      const screenOutSpan = circleRef.querySelector(".screen_out");
      const progressSpan = circleRef.querySelector(".progress");
      img.classList.remove("hide");
      screenOutSpan.classList.remove("hide");
      progressSpan.classList.add("hide");
    }
  };

  useEffect(() => {
    const circles1 = circleRefs.current;
    const circles2 = circleRefs2.current;

    gsap.set(circles1, { x: "-15vw", y: "-5vw", scale: 0.6, opacity: 0 });
    gsap.set(circles2, { x: "15vw", y: "-5vw", scale: 0.6, opacity: 0 });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      onEnter: () => {
        gsap.to(circles1, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.2,
        });
        gsap.to(circles2, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.2,
        });
      },
      onLeaveBack: () => {
        gsap.to(circles1, {
          x: "-15vw",
          y: "-5vw",
          scale: 0.6,
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.2,
        });
        gsap.to(circles2, {
          x: "15vw",
          y: "-5vw",
          scale: 0.6,
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.2,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="sec sec3" ref={sectionRef}>
      <div ref={sec3Ref}>
        <div className="main_client_wrap">
          <div className="cont_pc">
            <div className="scrollmagic-pin-spacer">
              <div className="main_client">
                <div className="main_client_tit">
                  <div className="tit">
                    <span>SKILLS</span>
                  </div>
                  <div className="swiper">
                    <div></div>
                  </div>
                </div>
                <div className="client_circle_wrap client_circle_wrap01">
                  {clientCircles}
                </div>
                <div className="client_circle_wrap client_circle_wrap02">
                  {clientCircles2}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Circles;
