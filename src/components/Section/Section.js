import React from "react";
import "./Section.css";
import chroma from "chroma-js";
import { svgStorage } from "../svg";

const Section = ({
  i,
  quantity,
  load,
  setColors,
  colors,
  isLoaded,
  setIsLoaded,
}) => {
  const [locked, setLocked] = React.useState(false);
  const [bgColor, setBgColor] = React.useState("white");

  const handleClick = (e) => {
    e.preventDefault();
    setLocked((prev) => !prev);
  };

  const generateRandomColor = () => {
    if (document.location.hash.length > quantity && !isLoaded) {
      const hash = document.location.hash.substr(1).split("-");
      setColors((prev) => [
        ...prev.map((el, index) => (index === i ? (el = hash[i]) : el)),
      ]);
      setBgColor("#" + hash[i]);
    } else {
      if (!locked) {
        const hexCodes = "0123456789ABCDEF";
        let color = "";
        for (let i = 0; i < 6; i++) {
          color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
        }
        setBgColor("#" + color);
        setColors((prev) => [
          ...prev.map((el, index) => (index === i ? (el = color) : el)),
        ]);
      }
    }
    setIsLoaded(true);
  };

  React.useEffect(() => {
    generateRandomColor();
  }, [load]);

  React.useEffect(() => {
    if (isLoaded) {
      document.location.hash = colors.join("-");
    }
  }, [colors]);

  const luminance = chroma(bgColor)?.luminance();

  return (
    <div
      className="section_wrapper"
      style={{
        backgroundColor: bgColor,
        color: luminance > 0.5 ? "black" : "white",
      }}
    >
      <div className="text">
        <p onClick={() => navigator.clipboard.writeText(bgColor)}>{bgColor}</p>
        <p>Click on the color code to copy it!</p>
      </div>
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
