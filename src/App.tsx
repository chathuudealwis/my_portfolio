import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Bio from './components/Bio';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Bio />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
