import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Box } from "./Scene"


function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas>
          <Box position={[0, 0, 0]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
        </Canvas>
      </div>
      <h1>Real SUSHI Typing Game</h1>
      <a>もっと見る</a>
    </>
  );
}

export default App;