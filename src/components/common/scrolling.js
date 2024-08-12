import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scrolling = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // ScrollTrigger 인스턴스 생성
    const st = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        setScrollPosition(self.scroll());
      }
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <div className="header-in" style={{ position: 'fixed', top: '10px', left: '50%', transform: 'translateX(-50%)', color: 'white', zIndex: 10000 }}>
        Scroll Position: {scrollPosition}px
    </div>
  );
};

export default Scrolling;
