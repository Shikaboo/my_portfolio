import React, { useRef } from "react";

import "../styles/App.css";
import "../styles/reset.css"

import Three from "../components/section/three";
import Sec1  from "../components/section/sec1";
import Sec2  from "../components/section/sec2";
import Circles from "../components/section/circles"; // sec3
import Test from "../components/section/test"; // sec4
import Sec5 from "../components/section/sec5";
import Credit from "../components/section/credit";

function Main() {
  const sec1Ref = useRef(null);
  const sec2Ref = useRef(null);
  const sec3Ref = useRef(null);
  const sec4Ref = useRef(null);
  const sec5Ref = useRef(null);
  const sec6Ref = useRef(null);
  const sec7Ref = useRef(null);

  return (
    <>
      <Three />
      <Sec1 sec1Ref={sec1Ref} />
      <Sec2 sec2Ref={sec2Ref}  />
      <Circles sec3Ref={sec3Ref} />
      <Test sec4Ref={sec4Ref} sec5Ref={sec5Ref} sec6Ref={sec6Ref} sec7Ref={sec7Ref} />
      <Sec5 sec5Ref={sec5Ref} sec6Ref={sec6Ref} sec7Ref={sec7Ref} />
      <Credit sec1Ref={sec1Ref} sec2Ref={sec2Ref} sec3Ref={sec3Ref} sec4Ref={sec4Ref} />
    </>
  );
}

export default Main;
