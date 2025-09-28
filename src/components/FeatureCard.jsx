import MetaBalls from '../MetaBalls';
import './FeatureCard.css';

const FeatureCard = ({ title, text, services }) => {
  return (
    <div className="feature-card">
      <div className="metaballs-bg">
        <MetaBalls
          color="#4079ff"
          cursorBallColor="#40ffaa"
          speed={0.2}
          ballCount={10}
          clumpFactor={0.8}
          animationSize={20}
        />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{text}</p>
        <span>Services: {services}</span>
      </div>
    </div>
  );
};

export default FeatureCard;