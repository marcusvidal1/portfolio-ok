import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    try {
      await loadSlim(engine);
      setIsLoaded(true);
    } catch (error) {
      console.error("Erro ao carregar tsParticles:", error);
      setIsLoaded(false);
    }
  }, []);

  const isMobile = window.innerWidth <= 768;

  return (
    <div className="particles-wrapper">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: 0 },
          particles: {
            number: {
              value: isMobile ? 20 : 25,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#00aaff",
            },
            links: {
              color: "#00aaff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.4,
              random: true,
            },
            size: {
              value: { min: 1, max: 3 },
            },
            move: {
              enable: true,
              speed: isMobile ? 0.1 : 0.2,
              direction: "none",
              outModes: {
                default: "out",
              },
            },
          },
        }}
      />
      {!isLoaded && (
        <div className="particles-fallback" style={{ backgroundColor: 'var(--cor-fundo)' }} />
      )}
    </div>
  );
};

export default ParticlesBackground;
