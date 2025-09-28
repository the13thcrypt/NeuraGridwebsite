import ShinyText from '../ShinyText';
import './Media.css';

const Media = () => {
  // Replace this with the YouTube Video ID you want to autoplay
  const autoplayVideoId = 'aQYyndGp-6w'; 

  // Replace these with recent video IDs from your channels
  const neuraLearnVideoId = '_iTqSohMBMY';
  const neuraCodeVideoId = '5YB4eP4c8n8';

  return (
    <div className="content-wrapper">
      {/* Autoplaying Video Banner */}
      <div className="media-hero-banner">
        <iframe
          src={`https://www.youtube.com/embed/${autoplayVideoId}?autoplay=1&loop=1&mute=1&playlist=${autoplayVideoId}&controls=0&showinfo=0&autohide=1&modestbranding=1`}
          title="Autoplaying Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <div className="video-overlay">
          <ShinyText text="" className="page-headline" />
        </div>
      </div>

      <p className="page-intro">
        Explore our channels to find in-depth tutorials, project showcases, and the latest insights from the world of technology and innovation.
      </p>

      {/* Channel Showcase Section */}
      <div className="channel-grid">
        {/* NeuraLearn Channel Card */}
        <div className="channel-card">
          <h3>NeuraLearn</h3>
          <p>Our primary channel for tutorials, showcases, and creative content.</p>
          <div className="video-responsive">
            <iframe
              // MODIFIED: Added loop=1 and playlist parameters to enable looping
              src={`https://www.youtube.com/embed/${neuraLearnVideoId}?loop=1&playlist=${neuraLearnVideoId}`}
              title="NeuraLearn Recent Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <a href="https://www.youtube.com/@NeuraLearnbyNeuraGrid" target="_blank" rel="noopener noreferrer" className="channel-button">
            Visit NeuraLearn
          </a>
        </div>

        {/* NeuraCode Channel Card */}
        <div className="channel-card">
          <h3>NeuraCode</h3>
          <p>Deep dives into AI, hardware experiments, and cutting-edge tech.</p>
          <div className="video-responsive">
            <iframe
              // MODIFIED: Added loop=1 and playlist parameters to enable looping
              src={`https://www.youtube.com/embed/${neuraCodeVideoId}?loop=1&playlist=${neuraCodeVideoId}`}
              title="NeuraCode Recent Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <a href="https://www.youtube.com/@NeuraCodebyNeuraGrid" target="_blank" rel="noopener noreferrer" className="channel-button">
            Visit NeuraCode
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;

