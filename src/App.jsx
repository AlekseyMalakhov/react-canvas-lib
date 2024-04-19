import Canvas from "./lib/Canvas";
import Line from "./lib/Line";
import Rectangle from "./lib/Rectangle";

function App() {
  return (
    <main>
      <div>Canvas library</div>
      <Canvas width={300} height={150}>
        <Line start={[20, 30]} end={[80, 150]} />
        <Rectangle start={[70, 60]} end={[170, 100]} />
      </Canvas>
      <Canvas width={300} height={150}>
        <Line start={[30, 70]} end={[150, 30]} />
        <Rectangle start={[100, 60]} end={[170, 140]} />
      </Canvas>
    </main>
  );
}

export default App;
