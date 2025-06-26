import { motion } from "framer-motion";
import "../styles/hero.css";
import imagemInicial from "../assets/Image1.png";

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section id="hero" className="inicio">
      <motion.div
        className="conteudo-inicial"
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="titulo-principal">Marcus Vidal</h1>
        <h2 className="subtitulo">Desenvolvedor Front-End</h2>
        <a
          href="https://github.com/marcusvidal1"
          className="botao"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </motion.div>
      <motion.div
        className="imagem-inicial"
        variants={slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <img src={imagemInicial} alt="Marcus Vidal programando" />
      </motion.div>
    </section>
  );
}

export default Hero;

