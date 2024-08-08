import "../../styles/test.css";
import React, { useEffect, useRef, forwardRef } from "react";
import { imgBundle } from "../../utils/image";
import { ReactComponent as First_Wave } from "../../assets/img/layered_waves_haikei1.svg";
import { ReactComponent as Second_Wave } from "../../assets/img/layered_waves_haikei2.svg";
import { initScrollAnimations, scrollToSection } from "../../utils/Scroll";

const Test = ({ sec4Ref, sec5Ref, sec6Ref, sec7Ref }, ref) => {
  const svg1Ref = useRef(null);
  const svg2Ref = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    initScrollAnimations(mainRef, svg1Ref, svg2Ref);
  }, []);

  return (
    <section className="sec sec4" ref={sec4Ref}>
      <article>
        <div id="svg1" ref={svg1Ref}>
          <First_Wave />
        </div>
        <div className="main" ref={mainRef}>
          <div className="BgImg1">
            <img src={imgBundle[0].src} />
          </div>
          <div className="BgImg2">
            <img src={imgBundle[1].src} />
          </div>
          <div className="tit_wrap_sec">
            <ul className="tit_wrap">
              <li className="tit">
                <h2>
                  About My <span>Project</span>
                </h2>
              </li>
              <li>
                <div id="Scrolltn" onClick={() => scrollToSection(sec5Ref)}>
                  <span>PROJECT</span>
                </div>
              </li>
              <li>
                <div id="Scrolltn" onClick={() => scrollToSection(sec6Ref)}>
                  <span>WEB CLONE</span>
                </div>
              </li>
              <li>
                <div id="Scrolltn" onClick={() => scrollToSection(sec7Ref)}>
                  <span>TOY PROJECT</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="BgImg3">
            <img src={imgBundle[2].src} />
          </div>
        </div>
        <div id="svg2" ref={svg2Ref}>
          <Second_Wave />
        </div>
      </article>
    </section>
  );
};

export default forwardRef(Test);
