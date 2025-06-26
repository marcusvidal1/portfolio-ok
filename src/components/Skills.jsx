import { motion } from "framer-motion";
import "../styles/skills.css";

import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const skillsData = [
  {
    icon: <FaHtml5 size={40} color="#2a83d8" />,
    title: "HTML",

  },
  {
    icon: <FaCss3Alt size={40} color="#2a83d8" />,
    title: "CSS",

  },
  {
    icon: <FaReact size={40} color="#2a83d8" />,
    title: "React",

  },
  {
    icon: <SiJavascript size={40} color="#2a83d8" />,
    title: "JavaScript",

  },
  {
    icon: <FaGithub size={40} color="#2a83d8" />,
    title: "Git & GitHub",

  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">
          Minhas Skills<span className="highlight-dot">.</span>
        </h2>

        <div className="skills-grid">

          {skillsData.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: false, amount: 0.8 }}
            >

              <div className="icon">{skill.icon}</div>


              <h3>{skill.title}</h3>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


