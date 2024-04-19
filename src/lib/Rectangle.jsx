import { useContext } from "react";
import { CanvasContext } from "./Canvas";

export default function Rectangle({ start, end }) {
  const canvas = useContext(CanvasContext);

  if (canvas?.getContext) {
    const ctx = canvas.getContext("2d");
    const width = end[0] - start[0];
    const height = end[1] - start[1];
    ctx.fillRect(start[0], start[1], width, height);
  }

  return null;
}
