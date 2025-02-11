import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import Background from './components/Background.jsx';

const App = () => {
  return (
    <main className="w-full mx-auto relative">
      <Background className="fixed top-0 left-0 w-full h-full -z-10" />
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto relative">
      <About />
      <Projects />
      <Clients />
      <WorkExperience />
      <Contact />
      <Footer />  
      </div>
    </main>
  );
};

export default App;
