import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Particles from './Particles'; // Import the Particles component
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Founder from './pages/Founder';
import Products from './pages/Products';
import Media from './pages/Media';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* The Particles component is now the permanent background for the entire site */}
      <Particles
        className="background-canvas"
        particleCount={1000}
        particleSpread={25}
        particleBaseSize={150}
        alphaParticles={true}
        speed={0.05}
        cameraDistance={15}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/products" element={<Products />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </div>
  );
}

export default App;

