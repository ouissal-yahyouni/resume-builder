// ButtonUiverse.jsx
import React from "react";
import "./ButtonUiverse.css"; // Assure-toi de copier tout le CSS dans ce fichier

const ButtonUiverse = ({ text1 = "Join Today", text2 = "Join Now" }) => {
  return (
    <button className="button">
      <div className="bg"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 342 208"
        height="208"
        width="342"
        className="splash"
      >
        {/* paths ici */}
      </svg>

      <div className="wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 221 42"
          height="42"
          width="221"
          className="path"
        >
          <path
            strokeLinecap="round"
            strokeWidth="3"
            d="M182.674 2H203C211.837 2 219 9.16344 219 18V24C219 32.8366 211.837 40 203 40H18C9.16345 40 2 32.8366 2 24V18C2 9.16344 9.16344 2 18 2H47.8855"
          ></path>
        </svg>

        <div className="outline"></div>
        <div className="content">
          <span className="char state-1">
            {text1.split("").map((char, index) => (
              <span key={index} data-label={char} style={{ "--i": index + 1 }}>
                {char}
              </span>
            ))}
          </span>

          <div className="icon">
            <div></div>
          </div>

          <span className="char state-2">
            {text2.split("").map((char, index) => (
              <span key={index} data-label={char} style={{ "--i": index + 1 }}>
                {char}
              </span>
            ))}
          </span>
        </div>
      </div>
    </button>
  );
};

export default ButtonUiverse;
