import ShinyText from '../ShinyText';

const About = () => {
  return (
    <div className="content-wrapper">
      <div className="about-hero">
        <ShinyText text="We are the architects of the grid for modern innovation." className="page-headline" />
        <p className="page-intro">
          Our mission is to build a unified ecosystem of tools, platforms, and content that removes the barriers between ideas and reality. We empower creators, entrepreneurs, and innovators with the intelligent infrastructure they need to build the future.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            We envision a future where technology is not a fragmented set of tools, but a seamless, interconnected grid. A world where a single spark of an idea—whether it's an AI model, an e-commerce empire, a piece of hardware, or a groundbreaking educational course—can be brought to life without compromise.
          </p>
        </div>
        <div className="about-card">
          <h3>The Neuragrid Philosophy</h3>
          <p>
            Our name is our philosophy. <strong>Neura</strong> represents the core of what we do: building intelligence into everything. From AI-powered commerce platforms to educational content that fosters deep understanding, we believe that smarter tools lead to better creations. <strong>Grid</strong> represents our approach: creating an interconnected system where technology is not siloed. Our projects are the foundational nodes of this ever-expanding network.
          </p>
        </div>
        <div className="about-card full-width-card">
          <h3>An Ecosystem in Motion</h3>
          <p>
            Neuragrid is more than just a company; it's a growing ecosystem of specialized brands and projects. From Neuragrid AI and Neuragrid Commerce to our educational platforms and our hardware initiatives, each part of our organization is dedicated to pushing the boundaries in its respective field.
          </p>
        </div>
        <div className="about-card full-width-card">
          <h3>Build with Us</h3>
          <p>
            The world is full of complex challenges and extraordinary opportunities. We're here to build the tools you need to meet them. Welcome to Neuragrid.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

