import "./App.css";
import React, { useState, useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import { Box } from "./Scene";

function App() {
  const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState("sushi");
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const typedWord = e.target.value;
    if (typedWord === currentWord) {
      setScore(score + 1);
      setCurrentWord(getRandomWord());
      inputRef.current.value = ""; 
    }
  };

  const getRandomWord = () => {
    const words = ["maguro", "ramen", "udon", "tennpura"]; // Add more words if needed
    return words[Math.floor(Math.random() * words.length)];
  };

  return (
    <>
      <div id="canvas-container">
        <Canvas>
          <Box position={[0, 0, 0]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
        </Canvas>
        <h1>Real SUSHI Typing Game</h1>
        <p>{currentWord}</p>
        <input ref={inputRef} type="text" onChange={handleInputChange} />
      </div>
    </>
  );
}
export default App;