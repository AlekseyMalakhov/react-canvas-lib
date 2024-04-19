import { useEffect, useRef, useState } from "react";
import { createContext } from "react";

export const CanvasContext = createContext(null);

export default function Canvas({ width, height, children }) {
  const [canvasCurrent, setCanvasCurrent] = useState(null);
  const canvasEl = useRef(null);

  useEffect(() => {
    if (canvasEl.current) {
      setCanvasCurrent(canvasEl.current);
    }
  }, [canvasEl]);

  return (
    <CanvasContext.Provider value={canvasCurrent}>
      <canvas width={width} height={height} ref={canvasEl}></canvas>
      {children}
    </CanvasContext.Provider>
  );
}
