import React, { useRef, useEffect, useState } from "react";

interface BoxRef {
  x: number;
  y: number;
  fallSpeed: number;
}

const PatternPractice: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boxRef = useRef<BoxRef>({ x: 50, y: 0, fallSpeed: 1 });
  const [score, setScore] = useState(0);
  const [diffTime, setDiffTime] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawBox = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw decision line at the bottom
      ctx.fillStyle = "red";
      ctx.fillRect(0, canvas.height - 2, canvas.width, 1);

      // Draw the falling box
      ctx.fillStyle = "#3498db";
      ctx.fillRect(boxRef.current.x, boxRef.current.y, 30, 3);
    };

    const updateBox = () => {
      // infinite animation
      boxRef.current.y += boxRef.current.fallSpeed;

      // stop animation
      // const diff = canvas.height - 1 - (boxRef.current.y + 25);
      // if (diff > 0) {
      //   boxRef.current.y += boxRef.current.fallSpeed;
      // }

      if (boxRef.current.y >= canvas.height + 148) {
        // Reset the box position when it touches the judgment line
        boxRef.current.y = 0;
      }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      // +면 fast, -면 slow
      const diff = canvas.height - 1 - (boxRef.current.y + 7.5);
      if (event.key === "a" && Math.abs(diff) <= 50) {
        setScore((prevScore) => prevScore + 1);
        setDiffTime(diff / boxRef.current.fallSpeed);
      }
    };

    const animate = () => {
      updateBox();
      drawBox();
      requestAnimationFrame(animate);
    };

    // Update the score when "a" key is pressed
    document.addEventListener("keydown", handleKeyPress);
    animate();
  }, []);

  return (
    <div className="w-screen max-w-7xl mx-auto my-0 p-8 text-center">
      <canvas ref={canvasRef} className="border-1 mx-auto w-full h-[80vh]" />
      <p>Score: {score}</p>
      <p>차이: {diffTime}ms</p>
    </div>
  );
};

export default PatternPractice;
