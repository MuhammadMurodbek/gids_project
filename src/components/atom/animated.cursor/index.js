import React from "react";
import AnimatedCursor from "react-animated-cursor"
import {mainGreen} from "../../../styles/global/colors"
export default function App() {
  return (
    <div className="App">
    <AnimatedCursor
      innerSize={8}
      outerSize={16}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.4}
      outerScale={5}
    />
    </div>
  );
}