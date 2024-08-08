import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const initScrollAnimations = (mainRef, svg1Ref, svg2Ref) => {
  gsap.set(svg1Ref.current, { height: "50%" });
  gsap.set(svg2Ref.current, { height: "50%" });

  ScrollTrigger.create({
    trigger: mainRef.current,
    start: "80% 90%",
    end: "top 5%", // 추가 스크롤 범위 설정
    scrub: 1,
    markers: true,
    onUpdate: (self) => {
      const progress = self.progress;

      // SVG 요소의 높이를 줄이기
      gsap.to(svg1Ref.current, { height: `${50 - 50 * progress}%` });
      gsap.to(svg2Ref.current, { height: `${50 - 50 * progress}%` });
    },
  });
};

export const scrollToSection = (sectionRef) => {
  if (sectionRef.current) {
    gsap.to(window, { duration: 1, scrollTo: sectionRef.current });
  } else {
    console.error("Section ref is null");
  }
};
