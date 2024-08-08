import * as THREE from "three";
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { imgBundle } from "../../utils/image";

gsap.registerPlugin(ScrollTrigger);

const BackgroundScene = () => {
  const groupRef = useRef();

  useFrame(() => {
    groupRef.current.rotation.x += 0.001;
    groupRef.current.rotation.y += 0.001;
    groupRef.current.rotation.z += 0.001;
  });

  const mathRandom = (num = 10) => -Math.random() * num + Math.random() * num;

  return (
    <group ref={groupRef}>
      {Array.from({ length: 300 }).map((_, i) => {
        const pscale = 0.05 + Math.abs(mathRandom(0.03));
        return (
          <mesh
            key={i}
            position={[mathRandom(), mathRandom(), mathRandom()]}
            rotation={[mathRandom(), mathRandom(), mathRandom()]}
            scale={[pscale, pscale, pscale]}
          >
            <circleGeometry args={[1, 3]} />
            <meshPhongMaterial color="#F49983" side={THREE.DoubleSide} />
          </mesh>
        );
      })}
    </group>
  );
};

const CubeScene = ({ cubeScale, lineThickness }) => {
  const cubeRef = useRef(); // 가운데 큐브
  const wcubeRef = useRef(); // 가운데 큐브 외각선
  const bcubeRef = useRef(); // 삼각형
  const newCubeRef = useRef(); // 삼각형

  useFrame(() => {
    cubeRef.current.rotation.z -= 0.001;
    bcubeRef.current.rotation.z += 0.003;
    wcubeRef.current.rotation.z -= 0.001;
    newCubeRef.current.rotation.z -= 0.003;

    // scale을 업데이트
    cubeRef.current.scale.set(cubeScale, cubeScale, cubeScale);
    wcubeRef.current.scale.set(cubeScale, cubeScale, cubeScale);
    bcubeRef.current.scale.set(cubeScale * 3, cubeScale * 3, lineThickness);
    newCubeRef.current.scale.set(cubeScale * 3, cubeScale * 3, lineThickness); 
  });

  return (
    <>
      <mesh ref={cubeRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial color="#FAFAFA" flatShading side={THREE.DoubleSide} roughness={0} />
      </mesh>
      <mesh ref={wcubeRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#E56A4E" wireframe />
      </mesh>
      <mesh ref={bcubeRef} position={[0, 0, -1]}>
        <circleGeometry args={[1, 3]} />
        <meshBasicMaterial color="#E56A4E" wireframe />
      </mesh>
      <mesh ref={newCubeRef} position={[0, 0, -1]}>
        <circleGeometry args={[1, 3]} />
        <meshBasicMaterial color="#E56A4E" wireframe />
      </mesh>
    </>
  );
};

const StartPage = () => {
  const [cubeScale, setCubeScale] = useState(1); // 상태 추가
  const [lineThickness, setLineThickness] = useState(2); // 두께 상태 추가
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("#cubeCanvas", { opacity: 0 });

      const ThreeSectionTL = gsap.timeline({ defaults: { ease: "power3.out" } });
      ThreeSectionTL.to("#ThreeSection .img", { scale: 0, duration: 0 })
        .to("#ThreeSection .img", { scale: 1, duration: 4 })
        .to("#cubeCanvas", { opacity: 1 })
        .fromTo("#ThreeSection .line", { scaleX: 0, transformOrigin: "right" }, { duration: 1, scaleX: 1 })
        .fromTo("#ThreeSection .text .split", { autoAlpha: 0, y: 20 }, { duration: 1, autoAlpha: 1, y: 0, stagger: 0.2 });

      ScrollTrigger.create({
        animation: ThreeSectionTL,
        trigger: "#ThreeSection",
        start: "top center",
        markers: false,
      });

      gsap.fromTo(
        ["#ThreeSection .arrow1", "#ThreeSection .arrow2"],
        { rotation: 0 },
        {
          rotation: 25,
          scrollTrigger: {
            trigger: "#ThreeSection",
            start: "top top",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleScaleChange = (event) => {
    setCubeScale(Number(event.target.value));
  };

  const handleThicknessChange = (event) => {
    setLineThickness(Number(event.target.value));
  };

  return (
    <section id="ThreeSection" ref={sectionRef}>
      <img className="img" src={imgBundle[8].src} alt="Centered" />
      <div className="arrow1"></div>
      <div className="arrow2"></div>
      <div className="text">
        <span className="line"></span>
        <ul>
          <li className="split">WELCOME</li>
          <li className="split">TO MY</li>
          <li className="split">PORTFOLIO</li>
          <li className="split">SITE</li>
        </ul>
      </div>  
      <Canvas id="backgroundCanvas" style={{ position: "absolute", top: 0, left: 0, zIndex: 1, width: "100%", height: "100vh" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <BackgroundScene />
      </Canvas>
      <Canvas id="cubeCanvas" style={{ position: "absolute", top: 0, left: 0, zIndex: 3, width: "100%", height: "100vh" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <CubeScene cubeScale={cubeScale} lineThickness={lineThickness} />
      </Canvas>
    </section>
  );
};

export default StartPage;
