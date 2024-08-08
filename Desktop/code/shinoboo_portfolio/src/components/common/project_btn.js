import React, { useState } from "react";

export default function PublicBtn({ page_link, github_link }) {

  const handleButtonClick = (index, link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="btn_wrap flex">
      {[
        { text: "페이지 링크", link: page_link },
        { text: "깃허브 링크", link: github_link },
      ].map((btn, index) => (
        <div
          key={index}
          className="public_btn"
          onClick={() => handleButtonClick(index, btn.link)}
        >
          {btn.text}
        </div>
      ))}
    </div>
  );
}

