import React from 'react';
import { Link } from 'react-router-dom';
// import Particles from '../Particles'; // This import is no longer needed here
import GlareHover from '../components/GlareHover';
import MagicBento from '../components/MagicBento';
import FancyButton from '../components/FancyButton';
import ShinyText from '../ShinyText';
import './Home.css';

// Data for the navigational bento grid
const navCardData = [
  { url: '/about', color: '#060010', title: 'About Us', description: 'Discover the mission and vision that drives Neuragrid.', label: 'Our Story' },
  { url: '/services', color: '#060010', title: 'Our Services', description: 'Explore our full suite of tools for creation and innovation.', label: 'What We Do' },
  { url: '/products', color: '#060010', title: 'Products', description: 'Browse our channels, store, and upcoming digital assets.', label: 'Our Creations' },
  { url: '/media', color: '#060010', title: 'Media Hub', description: 'Watch tutorials, showcases, and company updates.', label: 'In Motion' },
  { url: '#', color: '#060010', title: 'Community', description: 'Join our Discord and connect with other creators.', label: 'Coming Soon' },
  { url: '/founder', color: '#060010', title: 'The Founder', description: 'Meet the visionary behind the Neuragrid ecosystem.', label: 'Our Visionary' }
];

const Home = () => {
  return (
    <>
      {/* The <Particles> component has been moved to App.jsx */}
      
      {/* Hero Section */}
      <div className="hero-section">
        <main className="content">
          <h1 className="main-tagline">
            Neuragrid: Empowering Vision, from Pixels to Processors.
          </h1>
          <p className="sub-headline">
            From dynamic websites and intelligent AI models to custom hardware and compelling content, Neuragrid is the integrated ecosystem that powers creation.
          </p>
          <div className="cta-buttons">
            <a href="mailto:neuragrid10@gmail.com">
              <FancyButton
                className="fancy-button--primary"
                width="220px"
                height="60px"
                borderRadius="99px"
              >
                Email Us
              </FancyButton>
            </a>
            <Link to="/products">
              <GlareHover
                width="220px"
                height="60px"
                background="rgba(255, 255, 255, 0.08)"
                borderRadius="99px"
                borderColor="rgba(255, 255, 255, 0.2)"
                hoverBackground="rgba(255, 255, 255, 0.15)"
                shadowColor="rgba(132, 0, 255, 0.2)"
              >
                <span className="button-text">Explore Our Projects</span>
              </GlareHover>
            </Link>
          </div>
        </main>
      </div>

      <section className="home-section">
        <div className="content-wrapper">
          <ShinyText text="One Grid. Limitless Creation." className="section-headline" />
          <p className="section-intro">
            Stop juggling dozens of disconnected tools. Neuragrid brings every component of your project—digital, physical, and intelligent—into one powerful, seamless platform.
          </p>
          <MagicBento cardData={navCardData} />
        </div>
      </section>

      <section className="home-section">
         <div className="content-wrapper">
            <ShinyText text="The Neuragrid Advantage" className="section-headline" />
            <div className="advantage-grid">
                <div className="advantage-point"><h4>A Truly Unified Ecosystem</h4><p>Our tools aren't just bundled; they're built to work together from the ground up, saving you time and unlocking new possibilities.</p></div>
                <div className="advantage-point"><h4>Intelligence at the Core</h4><p>We integrate AI across our entire platform, making your projects faster, smarter, and more efficient.</p></div>
                <div className="advantage-point"><h4>Unmatched Versatility</h4><p>Whether you're a YouTuber, a SaaS founder, or a hardware engineer, our grid scales to your ambition.</p></div>
                <div className="advantage-point"><h4>Future-Proof Your Vision</h4><p>Built on a scalable and robust architecture, Neuragrid is designed to grow with you.</p></div>
            </div>
         </div>
      </section>

      <section className="cta-section">
         <div className="content-wrapper">
            <ShinyText text="Ready to build something extraordinary?" className="cta-headline" />
            <p className="cta-subtext">Let's bring your project to life. Explore the full power of the grid.</p>
            <div className="cta-buttons">
              <Link to="/founder">
                <GlareHover
                    width="220px"
                    height="60px"
                    background="rgba(255, 255, 255, 0.05)"
                    borderRadius="12px"
                    borderColor="rgba(255, 255, 255, 0.2)"
                    hoverBackground="rgba(255, 255, 255, 0.1)"
                    shadowColor="rgba(132, 0, 255, 0.2)">
                    <span className="button-text">Our Socials</span>
                </GlareHover>
              </Link>
            </div>
         </div>
      </section>
    </>
  );
};

export default Home;

