import { useEffect, useRef, useState } from "react";
import { createContext } from "react";

export const CanvasContext = createContext(null);

export default function Canvas({ width, height, children }) {
  const [canv, setCanv] = useState(null);
  const canvasEl = useRef(null);

  useEffect(() => {
    if (canvasEl.current) {
      setCanv(canvasEl.current);
    }
  }, [canvasEl]);

  return (
    <CanvasContext.Provider value={canv}>
      <canvas width={width} height={height} ref={canvasEl}></canvas>
      {children}
    </CanvasContext.Provider>
  );
}
