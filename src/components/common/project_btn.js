import React from "react";
import { Link } from 'react-router-dom';

export default function PublicBtn({ page_link, github_link, className }) {

  const buttons = [
    { text: "페이지 링크", link: page_link },
    { text: "깃허브 링크", link: github_link }
  ];

  return (
    <div className={`btn_wrap flex ${className || ''}`}>
      {buttons.map((btn, index) => (
        btn.link ? (
          <Link
            key={index}
            to={btn.link}
            className="public_btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {btn.text}
          </Link>
        ) : (
          <div
            key={index}
            className="public_btn"
            onClick={() => window.open(btn.link, "_blank")}
          >
            {btn.text}
          </div>
        )
      ))}
    </div>
  );
}
