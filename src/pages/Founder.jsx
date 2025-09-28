import ChromaGrid from '../components/ChromaGrid';
import ShinyText from '../ShinyText';

// Data for the Company's social media cards
const companySocials = [
  {
    image: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
    title: 'Company LinkedIn',
    subtitle: 'Professional Network',
    handle: '@Neuragrid',
    borderColor: '#0A66C2',
    gradient: 'linear-gradient(145deg, #0A66C2, #060010)',
    url: 'https://linkedin.com/company/neuragrid' // Replace with your company's LinkedIn
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
    title: 'Company Instagram',
    subtitle: 'Visual Showcase',
    handle: '@Neuragrid',
    borderColor: '#E4405F',
    gradient: 'linear-gradient(145deg, #E4405F, #060010)',
    url: 'https://instagram.com/neuragrid' // Replace with your company's Instagram
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/124/124021.png',
    title: 'Company Twitter (X)',
    subtitle: 'Updates & News',
    handle: '@Neuragrid',
    borderColor: '#1DA1F2',
    gradient: 'linear-gradient(145deg, #1DA1F2, #060010)',
    url: 'https://twitter.com/neuragrid' // Replace with your company's Twitter
  }
];

// Data for the Founder's social media cards
const founderSocials = [
    {
    image: 'https://cdn-icons-png.flaticon.com/512/174/174857.png', // Replace with founder's image
    title: 'Founder\'s LinkedIn',
    subtitle: 'Professional Profile',
    handle: '@sameerdahiya13', // Replace with founder's handle
    borderColor: '#0A66C2',
    gradient: 'linear-gradient(225deg, #0A66C2, #060010)',
    url: 'https://www.linkedin.com/in/sameerdahiya13/' // Replace with founder's LinkedIn
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png', // Replace with founder's image
    title: 'Founder\'s Instagram',
    subtitle: 'Personal & Professional Life',
    handle: '@the13thcrypt_', // Replace with founder's handle
    borderColor: '#E4405F',
    gradient: 'linear-gradient(225deg, #E4405F, #060010)',
    url: 'https://instagram.com/the13thcrypt' // Replace with founder's Instagram
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/124/124021.png', // Replace with founder's image
    title: 'Founder\'s Twitter (X)',
    subtitle: 'Thoughts & Updates',
    handle: '@the13thcrypt_', // Replace with founder's handle
    borderColor: '#1DA1F2',
    gradient: 'linear-gradient(225deg, #1DA1F2, #060010)',
    url: 'https://twitter.com/the13thcrypt_' // Replace with founder's Twitter
  }
];

const Founder = () => {
  return (
    <div className="content-wrapper">
      <ShinyText text="The Visionary & The Brand" className="page-headline" />
      <p className="page-intro">
        Connect with the mind behind Neuragrid and follow our company's journey across our primary social channels.
      </p>

      {/* Section for Company Socials */}
      <h2 className="section-subheadline">Follow Our Journey</h2>
      <ChromaGrid items={companySocials} columns={3} radius={350} />

      {/* Section for Founder Socials */}
      <h2 className="section-subheadline">Connect with the Founder</h2>
      <ChromaGrid items={founderSocials} columns={3} radius={350} />
    </div>
  );
};

export default Founder;

