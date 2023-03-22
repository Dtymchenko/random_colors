import React from "react";
import "./Section.css";
import chroma from "chroma-js";
import { svgStorage } from "../svg";

const Section = ({ load }) => {
  const [locked, setLocked] = React.useState(false);
  const [bgColor, setBgColor] = React.useState("white");
  const handleClick = (e) => {
    e.preventDefault();
    setLocked((prev) => !prev);
  };

  const generateRandomColor = () => {
    if (!locked) {
      const hexCodes = "0123456789ABCDEF";
      let color = "";
      for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
      }
      setBgColor("#" + color);
    }
  };

  React.useEffect(() => {
    generateRandomColor();
  }, [load]);

  const luminance = chroma(bgColor).luminance();

  return (
    <div
      className="section_wrapper"
      style={{
        backgroundColor: bgColor,
        color: luminance > 0.5 ? "black" : "white",
      }}
    >
      <div className="text">{bgColor}</div>
      <div className="icon" onClick={handleClick}>
        <svg
          fill={luminance > 0.5 ? "black" : "white"}
          width={"3rem"}
          height={"3rem"}
        >
          {locked ? svgStorage.lock : svgStorage.unlock}
        </svg>
      </div>
    </div>
  );
};

export default Section;
