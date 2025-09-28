import MagicBento from '../components/MagicBento';
import ShinyText from '../ShinyText';
// Note: We don't need PageStyles.css if using the global content-wrapper

const productCardData = [
  {
    // MODIFIED: Updated title and added URL
    url: 'https://youtube.com/@neuralearnbyneuragrid?si=xc-aJWZU8cg8erIg',
    color: '#060010',
    title: 'NeuraLearn',
    description: 'Our primary channel for tutorials, showcases, and creative content.',
    label: 'YouTube Channel'
  },
  {
    // MODIFIED: Updated title and added URL
    url: 'https://youtube.com/@neuracodebyneuragrid?si=Hd_PmXQT-MlALLjU',
    color: '#060010',
    title: 'NeuraCode',
    description: 'Deep dives into AI, hardware experiments, and cutting-edge tech.',
    label: 'YouTube Channel'
  },
  {
    color: '#060010',
    title: 'The Grid Store',
    description: 'Official hardware, merchandise, and digital assets.',
    label: 'E-commerce'
  },
  {
    color: '#060010',
    title: 'AI Models Marketplace',
    description: 'Deploy and monetize your custom-trained AI models.',
    label: 'Coming Soon'
  },
  {
    color: '#060010',
    title: 'Hardware Hub',
    description: 'Access schematics, guides, and pre-built hardware kits.',
    label: 'Coming Soon'
  },
  {
    color: '#060010',
    title: 'Web & Panel Builder',
    description: 'Our core SaaS product for creating stunning digital experiences.',
    label: 'Core Product'
  }
];

const Products = () => {
  return (
    <div className="content-wrapper">
       <ShinyText text="A Tool for Every Ambition" className="page-headline" />
        <p className="page-intro">
            Discover our full suite of integrated services. Each component is powerful on its own, but together, they form the most comprehensive creation platform in the world.
        </p>
      {/* The MagicBento grid will now use the updated data with links */}
      <MagicBento cardData={productCardData} />
    </div>
  );
};

export default Products;

