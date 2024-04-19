import { useContext } from "react";
import { CanvasContext } from "./Canvas";

export default function Line({ start, end }) {
  const canvas = useContext(CanvasContext);

  console.log(canvas);

  return null;
}
