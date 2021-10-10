import Slider from 'react-slick';
import { map } from 'ramda';

import { Media } from '../../../../types';

import CarouselItem from '../CarouselItem';
import Wrapper from './Wrapper';

const settings = {
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

interface CarouselProps {
  data: Media[];
}

const Carousel = ({ data }: CarouselProps) => (
  <Wrapper>
    <Slider {...settings}>
      {map(
        (item) => (
          <CarouselItem key={item.id} data={item} />
        ),
        data
      )}
    </Slider>
  </Wrapper>
);

export default Carousel;
