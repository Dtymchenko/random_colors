import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Section from "./components/Section/Section";

function App() {
  const quantity = 5;
  const tempArr = new Array(quantity).fill("");
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [colors, setColors] = React.useState(new Array(quantity).fill());
  const [load, setLoad] = React.useState(false);

  return (
    <div className="wrapper">
      <Button setLoad={setLoad} />
      <div className="sections">
        {tempArr.map((el, i) => (
          <Section
            quantity={quantity}
            key={i}
            i={i}
            load={load}
            setColors={setColors}
            colors={colors}
            isLoaded={isLoaded}
            setIsLoaded={setIsLoaded}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
