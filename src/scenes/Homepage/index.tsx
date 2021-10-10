import CarouselContainer from './containers/Carousel';
import TrendingContainer from './containers/Trending';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Homepage = () => {
  return (
    <div>
      <CarouselContainer />
      <TrendingContainer mediaType="movie" />
      <TrendingContainer mediaType="tv" />
    </div>
  );
};

export default Homepage;
