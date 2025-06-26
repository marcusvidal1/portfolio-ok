import ParticlesBackground from "./components/ParticlesBackground";
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/variables.css';



function App() {
  return (
    <div>
      <Header />
      <ParticlesBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      
      <Footer />
    </div>
  );
}

export default App;
