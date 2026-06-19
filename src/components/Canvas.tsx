import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";
import {
  ThreeTurnShapeUtil,
  BracketShapeUtil,
  RockerShapeUtil,
  CounterShapeUtil,
} from "./Shapes.tsx";
import { customTools, customUiComponents, customUiOverrides } from "./Tools";

const shapeUtils = [
  ThreeTurnShapeUtil,
  BracketShapeUtil,
  RockerShapeUtil,
  CounterShapeUtil,
];

export default function Canvas() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 72px)",
      }}
    >
      <Tldraw
        licenseKey="tldraw-2026-09-24/WyJkRFlpcThtcyIsWyIqIl0sMTYsIjIwMjYtMDktMjQiXQ.tnKquhMOt9+8N9UY5c0k9P7WVaFm41ryaIFoGmuq0LKYI4KcvVYKouLasay4BEZNGAhkeHs86+aWJssm8/M8fQ"
        shapeUtils={shapeUtils}
        tools={customTools}
        overrides={customUiOverrides}
        components={customUiComponents}
      />
    </div>
  );
}
