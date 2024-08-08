import "../../styles/sec2.css";
import React, { useState, forwardRef } from "react";
import { imgBundle2, MyProfileImg } from "../../utils/image";

const Sec2 = forwardRef(({ sec2Ref }, ref) => {
  const [infoType, setInfoType] = useState("Personal");

  const handleInfoClick = (type) => {
    setInfoType(type);
  };

  return (
    <section
      className="flex sec sec2"
      ref={sec2Ref}
    >
      <article className="sec2_AboutMe">
        <div className="AM_inner">
          <div className="flex AM_img_grid_wrap">
            <div className="AM_grid1 grid">
              <figure>
                <img src={MyProfileImg[1].src} id="test1"></img>
                <figcaption>
                  <p>#CREATIVE</p>
                </figcaption>
              </figure>
            </div>
            <div className="AM_grid2 grid">
              <figure>
                <img src={MyProfileImg[2].src} id="test1"></img>
                <figcaption>
                  <p>#RESPONSIBLE</p>
                </figcaption>
              </figure>
            </div>
            <div className="AM_grid3 grid">
              <figure>
                <img src={MyProfileImg[3].src} id="test1"></img>
                <figcaption>
                  <p>#POSITIVE</p>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="AM_wrap">
            <h2>
              <span>A</span>
              <span>B</span>
              <span>O</span>
              <span>U</span>
              <span>T</span>
              <span className="color">M</span>
              <span className="color">E</span>
            </h2>
            <div className="AM_btn">
              <span
                className={`P_info ${infoType === "Personal" ? "active" : ""}`}
                onClick={() => handleInfoClick("Personal")}
              >
                Personal Info
              </span>
              <span
                className={`E_info ${infoType === "Education" ? "active" : ""}`}
                onClick={() => handleInfoClick("Education")}
              >
                Education
              </span>
            </div>
            <div className="AM_cont">
              {infoType === "Personal" ? (
                <table className="AM_info">
                  <thead>
                    <tr className="info_cont_wrap">
                      <td className="flex info_cont">
                        <img src={imgBundle2[0].src} />
                        <p className="icon_txt">신효준</p>
                      </td>
                    </tr>
                    <tr className="info_cont_wrap">
                      <td className="flex info_cont">
                        <img src={imgBundle2[1].src} />
                        <p className="icon_txt">2001.07.24</p>
                      </td>
                    </tr>
                    <tr className="info_cont_wrap">
                      <td className="flex info_cont">
                        <img src={imgBundle2[2].src} />
                        <p className="icon_txt">@noboo724</p>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="info_cont_wrap">
                      <td className="flex info_cont">
                        <img src={imgBundle2[3].src} />
                        <p className="icon_txt">010-6660-8657</p>
                      </td>
                    </tr>
                    <tr className="info_cont_wrap">
                      <td className="flex info_cont">
                        <img src={imgBundle2[4].src} />
                        <p className="icon_txt">sksdhkd0724@gmail.com</p>
                      </td>
                    </tr>
                    <tr className="info_cont_wrap">
                      <td className="flex info_cont">
                        <img src={imgBundle2[5].src} />
                        <p className="icon_txt">https://github.com/Shikaboo</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className="ED_info">
                  <thead>
                    <tr className="flex Education_cont">
                      <th>
                        <img />
                        <p className="subheading">Hobby</p>
                      </th>
                      <th className="flex Ed_cont">
                        <div className="Ed_cont_deco">
                          <div className="deco_circle"></div>
                        </div>
                        <div className="flex subTxt">
                          <p>취미 1</p>
                          <p>취미 2</p>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="flex Education_cont">
                      <td>
                        <img />
                        <p className="subheading">Education</p>
                      </td>
                      <td className="flex Ed_cont">
                        <div className="Ed_cont_deco">
                          <div className="deco_circle"></div>
                        </div>
                        <div className="flex subTxt"> 
                          <p>대광 고등학교</p>
                          <p>노원그린컴퓨터아카데미</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
});

export default Sec2;
