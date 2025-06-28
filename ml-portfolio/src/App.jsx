import About from './components/About';
import Hero from './components/hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import 'devicon/devicon.min.css';
import Projects from './components/Projects';



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
