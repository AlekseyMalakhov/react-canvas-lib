import { useContext } from "react";
import { CanvasContext } from "./Canvas";

export default function Line({ start, end }) {
  const canvas = useContext(CanvasContext);

  if (canvas?.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(start[0], start[1]);
    ctx.lineTo(end[0], end[1]);
    ctx.stroke();
  }

  return null;
}
