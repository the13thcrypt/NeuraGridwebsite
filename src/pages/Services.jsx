import ShinyText from '../ShinyText';
import './Services.css'; // We'll create this new CSS file

const Services = () => {
  return (
    <div className="content-wrapper">
      <div className="services-hero">
        <ShinyText text="A Solution for Every Stage of Innovation" className="page-headline" />
        <p className="page-intro">
          At Neuragrid, we build the components of the modern innovation grid. Our services are designed to function powerfully on their own and seamlessly together, providing a comprehensive toolkit to bring your most ambitious projects to life. Explore our core areas of expertise below.
        </p>
      </div>

      <div className="services-grid">
        {/* Card 1: Web & Commerce */}
        <div className="service-card">
          <h3>Intelligent Web & Commerce Solutions</h3>
          <p>
            We build the digital foundations for modern brands. From stunning, high-performance websites to scalable e-commerce platforms, our solutions are designed with intelligence at their core.
          </p>
          <ul>
            <li>Custom Website Development</li>
            <li>Scalable E-commerce Storefronts</li>
            <li>Bespoke User Dashboards & Control Panels</li>
            <li>Professional Video & Content Editing</li>
          </ul>
        </div>

        {/* Card 2: AI & Machine Learning */}
        <div className="service-card">
          <h3>Artificial Intelligence & Machine Learning</h3>
          <p>
            Unlock the power of your data. Our AI division, Neuragrid AI, specializes in developing custom machine learning models that solve complex challenges and create a durable competitive advantage.
          </p>
          <ul>
            <li>Custom AI Model Development & Training</li>
            <li>Data Analysis & Predictive Modeling</li>
            <li>Natural Language Processing (NLP) Solutions</li>
            <li>AI System Integration & Consulting</li>
          </ul>
        </div>

        {/* Card 3: Hardware */}
        <div className="service-card">
          <h3>Hardware Prototyping & Engineering</h3>
          <p>
            Bringing ideas into the physical world. Our hardware division, Neuragrid Labs, bridges the gap between digital concepts and tangible technology, embodying our "pixels to processors" philosophy.
          </p>
          <ul>
            <li>Custom Electronics & PCB Design</li>
            <li>IoT (Internet of Things) Device Prototyping</li>
            <li>Hardware Project Consulting & Guides</li>
            <li>Firmware Development & System Integration</li>
          </ul>
        </div>

        {/* Card 4: Education & Media */}
        <div className="service-card">
          <h3>Educational Content & Media Production</h3>
          <p>
            Knowledge is the catalyst for innovation. Through our educational platforms, Neuragrid Learn, we make complex topics in technology and science accessible to everyone.
          </p>
          <ul>
            <li>Technical YouTube Channel Production</li>
            <li>Online Course & Curriculum Development</li>
            <li>Educational Content Strategy</li>
            <li>High-Quality Explainer Videos & Tutorials</li>
          </ul>
        </div>

        {/* Final CTA Card */}
        <div className="service-card full-width-card cta-card">
            <h3>Ready to Build on the Grid?</h3>
            <p>Your project is unique. Let's discuss how Neuragrid's ecosystem of services can be tailored to meet your specific goals and accelerate your vision.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;

