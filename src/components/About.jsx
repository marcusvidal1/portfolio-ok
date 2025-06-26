import React from 'react';
import { motion } from 'framer-motion';
import '../styles/about.css';
import image2 from '../assets/Image2.png';

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="section-title">
          Sobre<span className="highlight-dot">.</span>
        </h2>
        <div className="about-layout">
          <motion.img
            src={image2}
            alt="Marcus com notebook"
            className="about-image"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          />
          <motion.p
            className="about-description"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            Estou em constante aprendizado, focado em me tornar um desenvolvedor front-end cada vez mais completo. 
            Tenho paixão por criar interfaces que não sejam apenas bonitas, mas também funcionais e acessíveis. 
            <br /><br />
            Acredito que o equilíbrio entre design e usabilidade é o que realmente transforma uma ideia em uma boa experiência digital. 
            Meu objetivo é evoluir a cada projeto, unindo técnica e sensibilidade para entregar soluções que façam sentido para quem usa.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;

