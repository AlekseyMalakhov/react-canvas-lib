import Canvas from "./lib/Canvas";
import Line from "./lib/Line";

function App() {
  return (
    <main>
      <div>Canvas library</div>
      <Canvas width={300} height={150}>
        <Line start={[20, 30]} end={[80, 150]} />
      </Canvas>
    </main>
  );
}

export default App;
