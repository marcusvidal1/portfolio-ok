import { useState, useRef, useEffect } from "react";
import idleSprite from "../assets/CatIdle.png";
import runSprite from "../assets/CatRun.png";
import "../styles/mascot.css";

function Mascot() {
  const [isRunning, setIsRunning] = useState(false);
  const [frame, setFrame] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef(null);
  const mascotRef = useRef(null);

  const spriteData = {
    idle: {
      image: idleSprite,
      totalFrames: 8,
      width: 640,
      frameHeight: 64,
    },
    run: {
      image: runSprite,
      totalFrames: 8,
      width: 640,
      frameHeight: 64,
    },
  };

  const current = isRunning ? spriteData.run : spriteData.idle;
  const frameWidth = current.width / current.totalFrames;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (mascotRef.current) {
      observer.observe(mascotRef.current);
    }

    return () => {
      if (mascotRef.current) {
        observer.unobserve(mascotRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      clearInterval(intervalRef.current);
      return;
    }

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setFrame((prev) => (prev + 1) % current.totalFrames);
    }, 150);

    return () => clearInterval(intervalRef.current);
  }, [isRunning, isVisible]);

  const handleClick = () => {
    setIsRunning(true);
    setFrame(0);
    setTimeout(() => {
      setIsRunning(false);
      setFrame(0);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className="mascot-container"
      ref={mascotRef}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      aria-label="Animar mascote gato"
      tabIndex={0}
    >
      <div
        className="sprite"
        style={{
          backgroundImage: `url(${current.image})`,
          backgroundPosition: `-${frame * frameWidth}px 0px`,
          width: `${frameWidth}px`,
          height: `${current.frameHeight}px`,
          transform: "scale(2)",
          transformOrigin: "bottom right",
        }}
      />
    </div>
  );
}

export default Mascot;