import { imgBundle } from "../../utils/image";
import React, { forwardRef } from "react";
import { scrollToSection } from "../../utils/Scroll";

const Credit = ({ sec1Ref, sec2Ref, sec3Ref, sec4Ref }, ref) => {
  return (
    <footer>
      <div className="left_txt_box">
        <div>
          <ul className="thx_txt">
            <li>THANK YOU</li>
            <li>FOR</li>
            <li>WATCHING</li>
          </ul>
        </div>
        <div className="deco_txt">
          <div className="credit_deco">
            <h4>Version</h4>
            <p>2024 © Edition</p>
          </div>
          <div className="time">
            <h4>Local time</h4>
            <p>
              <span id="timeSpan">오전/오후 00:00 GMT+2</span>
            </p>
          </div>
        </div>
      </div>
      <div className="right_txt_box">
        <div className="contact_me_txt">
          <ul>
            <li className="split">Don't hesitate.</li>
            <li className="split">To contact me,</li>
            <li className="split">I want to listen to it</li>
            <li className="split">From you!</li>
          </ul>
          <div className="contact">
            <div className="sec7_scroll scroll_text">
              <span className="sec7_scroll_main_txt">CONTACT ME</span>
            </div>
            <ul>
              <li>+82 1066608657</li>
              <li>sksdhkd321@naver.com</li>
              <li>sksdhkd0724@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="back_to_sec">
          <div className="sec7_scroll scroll_text">
            <span className="sec7_scroll_main_txt">SCROLL UP</span>
            <span className="sTxtDeco">Click the button below!</span>
            <div className="arrow">
              <img src={imgBundle[4].src} />
            </div>
          </div>
          <ul>
            <li className="split" onClick={()=>{scrollToSection(sec1Ref)}}>Introduce</li>
            <li className="split" onClick={()=>{scrollToSection(sec2Ref)}}>About Me</li>
            <li className="split" onClick={()=>{scrollToSection(sec3Ref)}}>Skills</li>
            <li className="split" onClick={()=>{scrollToSection(sec4Ref)}}>Project</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default forwardRef(Credit);